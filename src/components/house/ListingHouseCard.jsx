// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Services
import { getAgencyById } from "../../services/agencyService";
import { getPrimaryImageByHouseId } from "../../services/houseService";
import {
  addToSaved,
  getSavedHouseIdsByUserId,
  removeSavedHouse,
} from "../../services/savedService";

// Utility Functions
import { houseCatchphrase } from "../../utils/houseCatchphrase";
import { formatPrice } from "../../utils/formatPrice";
import { getNumOfRooms } from "../../utils/getNumOfRooms";
import logoMap from "../../utils/logoMap";

// Third-Party Components
import { HStack, VStack, Badge } from "@chakra-ui/react";
import { FavoriteOutlined, FavoriteBorderOutlined, EditOutlined } from "@mui/icons-material";

// Internal Components
import IconTextBlock from "../buildingblocks/IconTextBlock";

// Imagery
import missingImg from "../../assets/images/missingImg.png";

// -----------------------------------------------------------

function ListingHouseCard({ house, sessionUser }) {
  const [agency, setAgency] = useState(null);
  const [priImage, setPriImage] = useState(null);
  // const [userSavedHouses, setUserSavedHouses] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isMine, setIsMine] = useState(false); // State if house belongs to logged in user
  const navigate = useNavigate();

  // Check if house belongs to logged in user
  useEffect(() => {
    if (house.userId === JSON.stringify(sessionUser.userId)) {
      setIsMine(true);
    }
  }, [house.userId, sessionUser.userId]);

  // When card mounts, fetch respective agency, image, and saved status
  useEffect(() => {
    async function fetchAgency() {
      try {
        const agencyData = await getAgencyById(house.realEstateId);
        setAgency(agencyData);
      } catch (error) {
        console.error("Failed to fetch agency:", error);
      }
    }

    async function fetchPrimaryImage() {
      try {
        const imagePath = await getPrimaryImageByHouseId(house.houseId);
        setPriImage(imagePath.imagePath);
      } catch (error) {
        console.error("Error fetching primary house image:", error);
      }
    }

    async function fetchSavedHouseIds() {
      try {
        const idsArr = await getSavedHouseIdsByUserId();
        if (idsArr) {
          setIsSaved(idsArr.includes(parseInt(house.houseId)));
        }
        // setUserSavedHouses(idsArr);
      } catch (error) {
        console.log("Error fetching the saved house ids:", error);
      }
    }

    fetchSavedHouseIds();
    fetchAgency();
    fetchPrimaryImage();
  }, [house.houseId, house.realEstateId]);

  // useEffect(() => {
  //   console.log("userSavedHouses are:");
  //   console.log(userSavedHouses);
  // }, [userSavedHouses]);

  // useEffect(() => {
  //   console.log(`The house with id: ${house.houseId} is ${isSaved}`);
  // }, [isSaved]);

  // When card is clicked, go to individual house "ListingDetailPage"
  const handleClick = () => {
    navigate(`/listing/${house.houseId}`);
  };

  // Toggle house in the saved list
  const handleImageSaveClick = async (e) => {
    e.stopPropagation(); // Prevent navigation on click
    try {
      // If house is in saved list
      if (isSaved) {
        await removeSavedHouse(house.houseId);
        console.log("Removing house from saved list");
      } else {
        await addToSaved(house.houseId);
        console.log("Adding house to saved list");
      }
      setIsSaved((prevState) => !prevState); // Toggle saved status
    } catch (error) {
      console.error(`Failed to ${isSaved ? "remove" : "add"} saved house:`, error);
    }
  };

  // Click to go to house editmode (when belonging to logged in user)
  const handleImageEditClick = async (e) => {
    e.stopPropagation(); // Prevent navigation on click
    navigate(`/edit/${house.houseId}`);
  };

  return (
    <>
      <div
        className="flex h-56 min-w-full p-4 rounded-3xl hover:bg-beige-P1 hover:cursor-pointer transition-all duration-300"
        onClick={handleClick}
      >
        {/* Image (left) */}
        {isMine ? (
          <>
            {/* House belongs to logged in user */}
            <div className="relative mr-4 group" onClick={handleImageEditClick}>
              <img
                src={priImage ? priImage : missingImg}
                alt={JSON.stringify(priImage)}
                className="object-cover rounded-xl h-48 w-64 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-thorn-0 rounded-xl">
                <HStack>
                  <EditOutlined className="text-beige-0" fontSize="large" />
                  <p className="text-beige-0">Edit</p>
                </HStack>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* House does NOT belong to logged in user */}
            <div className="relative mr-4 group" onClick={handleImageSaveClick}>
              <img
                src={priImage ? priImage : missingImg}
                alt={JSON.stringify(priImage)}
                className="object-cover rounded-xl h-48 w-64 group-hover:brightness-50 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                {isSaved ? (
                  <FavoriteOutlined className="text-rosered-0" fontSize="large" />
                ) : (
                  <FavoriteBorderOutlined className="text-rosered-0" fontSize="large" />
                )}
              </div>
            </div>
          </>
        )}

        {/* Content (right) */}
        <div className="flex flex-col justify-between h-full w-full">
          {/* Title, Catchphrase, Icons & Estate Group */}
          <div className="flex items-start justify-between">
            <div>
              <HStack spacing={4}>
                <h3>{house.title}</h3>
                {isMine ? <Badge variant="thornFilled">Listed by You</Badge> : <></>}
              </HStack>
              <p className="mb-2">{houseCatchphrase(house)}</p>
              <HStack spacing={0}>
                {parseInt(house.internet) && <IconTextBlock type="internet" textHidden={true} />}
                {parseInt(house.airCon) && <IconTextBlock type="airCon" textHidden={true} />}
                {parseInt(house.heating) && <IconTextBlock type="heating" textHidden={true} />}
                {parseInt(house.secSys) && <IconTextBlock type="secSys" textHidden={true} />}
                {parseInt(house.solar) && <IconTextBlock type="solar" textHidden={true} />}
                {parseInt(house.gardServ) && <IconTextBlock type="gardServ" textHidden={true} />}
                {parseInt(house.irrigation) && (
                  <IconTextBlock type="irrigation" textHidden={true} />
                )}
                {parseInt(house.outdoorLight) && (
                  <IconTextBlock type="outdoorLight" textHidden={true} />
                )}
                {parseInt(house.boma) && <IconTextBlock type="boma" textHidden={true} />}
                {parseInt(house.gatedCommunity) && (
                  <IconTextBlock type="gatedCommunity" textHidden={true} />
                )}
              </HStack>
            </div>
            {agency ? (
              <img src={logoMap[agency.logoColour]} alt="estate logo" className="w-16" />
            ) : (
              <div>Loading</div>
            )}
          </div>
          {/* Pricing */}
          {house.sellType === "sell" ? (
            <h3 className="text-thorn-0 font-bold font-alt">{formatPrice(house.price)}</h3>
          ) : (
            <h3 className="text-thorn-0 font-bold font-alt">
              {formatPrice(house.price)} <span className="text-sm">/ month</span>
            </h3>
          )}
          {/* Badges */}
          <HStack>
            <IconTextBlock
              type="floorSize"
              value={house.floorSize}
              variant="beigeBadge"
              textHidden={true}
            />
            <IconTextBlock
              type="rooms"
              value={getNumOfRooms(house)}
              variant="beigeBadge"
              textHidden={true}
            />
            <IconTextBlock
              type="floors"
              value={house.numFloors}
              variant="beigeBadge"
              textHidden={true}
            />
            <IconTextBlock
              type="bath"
              value={house.numBath}
              variant="beigeBadge"
              textHidden={true}
            />
            <IconTextBlock
              type="garage"
              value={house.numGarage}
              variant="beigeBadge"
              textHidden={true}
            />
          </HStack>
        </div>
      </div>
    </>
  );
}

export default ListingHouseCard;
