import { HStack } from "@chakra-ui/react";
import missingImg from "../../assets/images/missingImg.png";
import { useNavigate } from "react-router-dom";
import IconTextBlock from "../buildingblocks/IconTextBlock";

// Services
import { getAgencyById } from "../../services/agencyService";
import { getPrimaryImageByHouseId } from "../../services/houseService";

// Utility Functions
import { houseCatchphrase } from "../../utils/houseCatchphrase";
import { formatPrice } from "../../utils/formatPrice";
import { getNumOfRooms } from "../../utils/getNumOfRooms";
import logoMap from "../../utils/logoMap";
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

function ListingHouseCard({ house }) {
  const [agency, setAgency] = useState(null);
  const [priImage, setPriImage] = useState(null);
  const navigate = useNavigate();

  // When listing card mounts, fetch respective agency
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

    fetchAgency();
    fetchPrimaryImage();
  }, []);

  // When card is clicked, go to individual house "ListingDetailPage"
  const handleClick = () => {
    navigate(`/listing/${house.houseId}`);
  };

  return (
    <>
      <div
        className="flex h-56 min-w-full p-4 rounded-3xl hover:bg-beige-P1 hover:cursor-pointer transition-all duration-300"
        onClick={handleClick}
      >
        {/* Image (left) */}
        <div className="relative mr-4 group">
          <img
            src={priImage ? priImage : missingImg}
            alt={JSON.stringify(priImage)}
            className="object-cover rounded-xl h-48 w-64 group-hover:brightness-50 transition duration-300"
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
              <p className="mb-2">{houseCatchphrase(house)}</p>
              <HStack>
                {parseInt(house.internet) && <WifiOutlined />}
                {parseInt(house.airCon) && <AcUnitOutlined />}
                {parseInt(house.heating) && <LocalFireDepartmentOutlined />}
                {parseInt(house.secSys) && <VideocamOutlined />}
                {parseInt(house.solar) && <SolarPowerOutlined />}
                {parseInt(house.gardServ) && <WaterDropOutlined />}
                {parseInt(house.irrigation) && <WbTwilightOutlined />}
                {parseInt(house.outdoorLight) && <OutdoorGrillOutlined />}
                {parseInt(house.boma) && <WifiOutlined />}
                {parseInt(house.gatedCommunity) && <FenceOutlined />}
              </HStack>
            </div>
            {agency ? (
              <img src={logoMap[agency.logoColour]} alt="estate logo" className="w-16" />
            ) : (
              <div>Loading</div>
            )}
          </div>
          {/* Pricing */}
          <h3 className="text-thorn-0 font-bold font-alt">{formatPrice(house.price)}</h3>
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
