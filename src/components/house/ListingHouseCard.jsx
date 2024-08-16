import { HStack } from "@chakra-ui/react";
import tempImg from "../../assets/images/familyAtHome.jpg";
import IconTextBlock from "../buildingblocks/IconTextBlock";
import { houseCatchphrase } from "../../utils/houseCatchphrase";
import { formatPrice } from "../../utils/formatPrice";
import { getNumOfRooms } from "../../utils/getNumOfRooms";
import { getAgencyById } from "../../services/agencyService";
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

// Real Estate Colour Logos
import aidaLogoColour from "../../assets/logos/agencyLogos/aidaLogoColour.png";
import engelLogoColour from "../../assets/logos/agencyLogos/engelLogoColour.png";
import pamLogoColour from "../../assets/logos/agencyLogos/pamLogoColour.png";
import rawsonLogoColour from "../../assets/logos/agencyLogos/rawsonLogoColour.png";
import realnetLogoColour from "../../assets/logos/agencyLogos/realnetLogoColour.png";
import remaxLogoColour from "../../assets/logos/agencyLogos/remaxLogoColour.png";
import seeffLogoColour from "../../assets/logos/agencyLogos/seeffLogoColour.png";
import tsungaiLogoColour from "../../assets/logos/agencyLogos/tsungaiLogoColour.png";
import adminLogoColour from "../../assets/logos/agencyLogos/adminLogoColour.png";
import { useState, useEffect } from "react";

function ListingHouseCard({ house }) {
  const [agency, setAgency] = useState(null);

  useEffect(() => {
    async function fetchAgency() {
      try {
        const agencyData = await getAgencyById(house.realEstateId);
        setAgency(agencyData);
      } catch (error) {
        console.error("Failed to fetch agency:", error);
      }
    }

    fetchAgency();
  }, []);

  return (
    <>
      <div className="flex h-56 min-w-full p-4 rounded-3xl hover:bg-beige-P1 hover:cursor-pointer transition-all duration-300">
        {/* Image (left) */}
        <div className="relative mr-4 group">
          <img
            src={tempImg}
            alt="home"
            className="object-cover rounded-xl h-48 group-hover:brightness-50 transition duration-300"
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
