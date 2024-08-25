// IMPORT
// -----------------------------------------------------------
// React & Hooks
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// Services
import { getHouseById, getImagesByHouseId } from "../services/houseService";
import { getAgencyById } from "../services/agencyService";
import {
  createInterested,
  fetchInterestedBySessionUserId,
  deleteInterested,
} from "../services/interestedService.js";

// Utility Functions
import { capitaliseString } from "../utils/capitaliseString.js";
import { getNumOfRooms } from "../utils/getNumOfRooms.js";
import { formatPrice } from "../utils/formatPrice.js";
import logoMap from "../utils/logoMap.js";

// Third-Party Components
import { Button, HStack, IconButton, VStack } from "@chakra-ui/react";
import {
  ArrowBack,
  ThumbUpOutlined,
  EditOutlined,
  FavoriteOutlined,
  LocationCityOutlined,
  LocationOnOutlined,
  CalendarMonthOutlined,
  ThumbUp,
  CancelOutlined,
  CircleNotificationsOutlined,
  NotificationsOffOutlined,
  ThumbDownAltOutlined,
  EmailOutlined,
} from "@mui/icons-material";

// Internal Components
import Navbar from "../components/navigation/Navbar.jsx";
import ImageCollection from "../components/visual/ImageCollection.jsx";
import IconTextBlock from "../components/buildingblocks/IconTextBlock.jsx";

// Imagery
// -

// -----------------------------------------------------------

function ListingDetailPage() {
  const { houseId } = useParams();
  const [house, setHouse] = useState(null);
  const [agency, setAgency] = useState(null);
  const [images, setImages] = useState([]);
  const [interestArr, setInterestArr] = useState([]);
  const [interestActive, setInterestActive] = useState(false);
  const [interestIsHovered, setInterestIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const data = await getHouseById(houseId);
        setHouse(data);
      } catch (error) {
        console.log("Error fetching the house's details:", error);
      }
    };

    const fetchImages = async () => {
      try {
        const imagePaths = await getImagesByHouseId(houseId);
        setImages(imagePaths);
      } catch (error) {
        console.error("Error fetching house images:", error);
      }
    };

    const fetchUserInterests = async () => {
      try {
        const allUserInterested = await fetchInterestedBySessionUserId();
        setInterestArr(allUserInterested);
      } catch (error) {
        console.error("Error fetching logged-in user's interests:", error);
      }
    };

    fetchHouseDetails();
    fetchImages();
    fetchUserInterests();
  }, [houseId]);

  useEffect(() => {
    // Determine if logged-in user's interest list includes current house.id
    const alreadyInterested = interestArr.some(
      (interest) => interest.houseId === parseInt(houseId)
    );

    if (alreadyInterested) {
      setInterestActive(true);
    }
  }, [houseId, interestArr]);

  // When house object changes, get agency info
  useEffect(() => {
    // If house exists
    if (house) {
      async function fetchAgency() {
        try {
          const agencyData = await getAgencyById(house.realEstateId);
          setAgency(agencyData);
        } catch (error) {
          console.error("Failed to fetch agency:", error);
        }
      }
      fetchAgency();
    }
  }, [house]);

  // When edit btn is clicked, go to edit house page "editListingPage"
  const handleEditClick = () => {
    navigate(`/edit/${house.houseId}`);
  };

  // When Interested Button is clicked
  const handleInterestedClick = () => {
    if (!interestActive) {
      createInterested(houseId);
      setInterestActive(true);
    } else {
      deleteInterested(houseId);
      setInterestActive(false);
    }
  };

  if (!house) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Navbar />
      {/* Page Content */}
      <div className="mt-4 mb-24 mx-2 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
        <HStack>
          <IconButton as={Link} to="/listings" icon={<ArrowBack />} minW={12} />
          <Button leftIcon={<EditOutlined />} variant="thornOutline" onClick={handleEditClick}>
            Edit Listing
          </Button>
        </HStack>
        {/* House Imagery */}
        <div className="mt-4">
          {images.length > 0 ? <ImageCollection images={images} /> : <div>No images available</div>}
        </div>
        {/* House Info Box */}
        <div className="mt-4 bg-beige-0 rounded-2xl p-8 flex justify-between">
          {/* General Info (Right) */}
          <div className="w-[75%] flex flex-col justify-between">
            <div className="flex flex-col">
              <h2>{capitaliseString(house.title)}</h2>
              <h3 className="text-warmgray-600 font-normal mt-[-8px]">
                {capitaliseString(house.style)}
              </h3>
              <p>{house.description}</p>
            </div>
            <VStack align="start">
              <HStack>
                <LocationOnOutlined />
                <p>{`${house.street}, ${house.suburb}, ${house.city}, ${house.province}, ${house.zip}`}</p>
              </HStack>
              <HStack>
                <CalendarMonthOutlined />
                <p>Available from {house.availableDate}</p>
              </HStack>
            </VStack>
            <HStack w="fit-content">
              <IconTextBlock
                type="floorSize"
                textHidden="true"
                value={house.floorSize}
                variant="beigeBadge"
              />
              <IconTextBlock
                type="floors"
                textHidden="true"
                value={house.numFloors}
                variant="beigeBadge"
              />
              <IconTextBlock
                type="rooms"
                textHidden="true"
                value={getNumOfRooms(house)}
                variant="beigeBadge"
              />
              <IconTextBlock
                type="lotSize"
                textHidden="true"
                value={house.lotSize}
                variant="beigeBadge"
              />
            </HStack>
          </div>
          {/* Price & Buttons (Left) */}
          <div className="w-[20%]">
            <div className="bg-beige-M1 px-4 py-8 flex flex-col justify-center items-center rounded-xl">
              {house.sellType === "sell" ? (
                <>
                  <p>For Sale</p>
                  <h3 className="font-alt">{formatPrice(house.price)}</h3>
                </>
              ) : (
                <>
                  <p>To Rent</p>
                  <h3 className="font-alt">{formatPrice(house.price)}</h3>
                  <p className="text-sm">per month</p>
                </>
              )}
              {agency ? (
                <img src={logoMap[agency.logoColour]} alt="estate logo" className="w-24 mt-8" />
              ) : (
                <div>Loading</div>
              )}
            </div>
            <HStack w="full" mt={4}>
              <Button
                w="full"
                leftIcon={
                  interestActive ? (
                    interestIsHovered ? (
                      <ThumbDownAltOutlined />
                    ) : (
                      <CircleNotificationsOutlined />
                    )
                  ) : interestIsHovered ? (
                    <EmailOutlined />
                  ) : (
                    <ThumbUpOutlined />
                  )
                }
                onClick={handleInterestedClick}
                onMouseEnter={() => setInterestIsHovered(true)}
                onMouseLeave={() => setInterestIsHovered(false)}
                variant={interestActive ? "activated" : "thornFilled"}
              >
                {interestActive
                  ? interestIsHovered
                    ? "Cancel Interest"
                    : "Interest Sent"
                  : interestIsHovered
                  ? "Notify Agent"
                  : "Show Interest"}
              </Button>
              <IconButton icon={<FavoriteOutlined />} minW={12} variant="roseOutline" />
            </HStack>
          </div>
        </div>
        {/* Interior, Exterior & Features */}
        <HStack mt={4} spacing={4} align="stretch">
          <div className="bg-beige-0 p-8 rounded-2xl flex flex-col w-full">
            <VStack align="start" spacing={4}>
              <h3>Interior</h3>
              <VStack align="start" spacing={6}>
                <IconTextBlock value={house.numBed} type="bed" variant="thornLrg" />
                <IconTextBlock value={house.numBath} type="bath" variant="thornLrg" />
                <IconTextBlock value={house.numKitchen} type="kitchen" variant="thornLrg" />
                <IconTextBlock value={house.numDining} type="dining" variant="thornLrg" />
                <IconTextBlock value={house.numGym} type="gym" variant="thornLrg" />
                <IconTextBlock value={house.numBilliard} type="billiard" variant="thornLrg" />
                <IconTextBlock value={house.numBasement} type="basement" variant="thornLrg" />
                <IconTextBlock value={house.numGarage} type="garage" variant="thornLrg" />
              </VStack>
            </VStack>
          </div>
          <div className="bg-beige-0 p-8 rounded-2xl flex flex-col w-full">
            <VStack align="start" spacing={4}>
              <h3>Exterior</h3>
              <VStack align="start" spacing={6}>
                <IconTextBlock value={house.numPool} type="pool" variant="thornLrg" />
                <IconTextBlock value={house.numCourt} type="court" variant="thornLrg" />
                <IconTextBlock value={house.numDeck} type="deck" variant="thornLrg" />
                <IconTextBlock value={house.numFlowerGard} type="flowerGard" variant="thornLrg" />
                <IconTextBlock value={house.numVegGard} type="vegGard" variant="thornLrg" />
                <IconTextBlock value={house.numOrchard} type="orchard" variant="thornLrg" />
              </VStack>
            </VStack>
          </div>
          {/* Features */}
          <div className="bg-beige-0 p-8 rounded-2xl flex flex-col w-full ">
            <VStack align="start" spacing={4}>
              <h3>Features</h3>
              <VStack align="start" spacing={6}>
                {parseInt(house.internet) && <IconTextBlock type="internet" variant="thornLrg" />}
                {parseInt(house.airCon) && <IconTextBlock type="airCon" variant="thornLrg" />}
                {parseInt(house.heating) && <IconTextBlock type="heating" variant="thornLrg" />}
                {parseInt(house.secSys) && <IconTextBlock type="secSys" variant="thornLrg" />}
                {parseInt(house.solar) && <IconTextBlock type="solar" variant="thornLrg" />}
                {parseInt(house.gardServ) && <IconTextBlock type="gardServ" variant="thornLrg" />}
                {parseInt(house.irrigation) && (
                  <IconTextBlock type="irrigation" variant="thornLrg" />
                )}
                {parseInt(house.outdoorLight) && (
                  <IconTextBlock type="outdoorLight" variant="thornLrg" />
                )}
                {parseInt(house.boma) && <IconTextBlock type="boma" variant="thornLrg" />}
                {parseInt(house.gatedCommunity) && (
                  <IconTextBlock type="gatedCommunity" variant="thornLrg" />
                )}
              </VStack>
            </VStack>
          </div>
        </HStack>
      </div>
    </>
  );
}

export default ListingDetailPage;
