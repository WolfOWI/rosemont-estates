import { HStack } from "@chakra-ui/react";
import missingImg from "../../assets/images/missingImg.png";
import { useNavigate } from "react-router-dom";
import IconTextBlock from "../buildingblocks/IconTextBlock";
import { removeSavedHouse } from "../../services/savedService";

// Services
import { getPrimaryImageByHouseId } from "../../services/houseService";

// Utility Functions
import { formatPrice } from "../../utils/formatPrice";
import { getNumOfRooms } from "../../utils/getNumOfRooms";
import {
  WifiOutlined,
  AcUnitOutlined,
  LocalFireDepartmentOutlined,
  VideocamOutlined,
  SolarPowerOutlined,
  YardOutlined,
  WaterDropOutlined,
  WbTwilightOutlined,
  OutdoorGrillOutlined,
  FenceOutlined,
  ErrorOutline,
  FavoriteOutlined,
} from "@mui/icons-material";

import { useState, useEffect } from "react";

function SavedHouseCard({ house, onRemove }) {
  const [priImage, setPriImage] = useState(null);
  const navigate = useNavigate();

  // When card mounts, get primary Image
  useEffect(() => {
    async function fetchPrimaryImage() {
      try {
        const imagePath = await getPrimaryImageByHouseId(house.houseId);
        setPriImage(imagePath.imagePath);
      } catch (error) {
        console.error("Error fetching primary house image:", error);
      }
    }

    fetchPrimaryImage();
  }, [house.houseId]);

  // Handle image click to remove the house from the saved list
  const handleImageClick = async (e) => {
    console.log("handleImageClick");
    e.stopPropagation(); // Prevent navigation on click
    try {
      await removeSavedHouse(house.houseId);
      onRemove(house.houseId); // Notify parent to remove this house from the list
    } catch (error) {
      console.error("Failed to remove saved house:", error);
    }
  };

  return (
    <>
      <div
        className="flex min-w-full p-4 rounded-3xl hover:bg-beige-P1 hover:cursor-pointer transition-all duration-300"
        onClick={() => navigate(`/listing/${house.houseId}`)}
      >
        {/* Image (left) */}
        <div className="relative mr-4 group" onClick={handleImageClick}>
          <img
            src={priImage ? priImage : missingImg}
            alt={JSON.stringify(priImage)}
            className="object-cover rounded-xl h-40 min-w-40 w-40 group-hover:brightness-50 transition duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
            <FavoriteOutlined className="text-rosered-0" fontSize="large" />
          </div>
        </div>

        {/* Content (right) */}
        <div className="flex flex-col justify-between h-full w-full">
          {/* Title, Catchphrase, Icons & Estate Group */}
          <div className="flex items-start justify-between">
            <div>
              <h3>{house.title}</h3>
              <p className="mb-2 text-sm">{`${house.street}, ${house.suburb}`}</p>
            </div>
            <div className="bg-beige-M1 px-4 py-2 rounded-xl">
              <p>{house.sellType === "sell" ? "For Sale" : "To Rent"}</p>
            </div>
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
            <IconTextBlock type="bed" value={house.numBed} variant="beigeBadge" textHidden={true} />
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
            <IconTextBlock
              type="floors"
              value={house.numFloors}
              variant="beigeBadge"
              textHidden={true}
            />
          </HStack>
        </div>
      </div>
    </>
  );
}

export default SavedHouseCard;
