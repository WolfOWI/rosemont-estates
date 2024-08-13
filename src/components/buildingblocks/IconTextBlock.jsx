import { HStack } from "@chakra-ui/react";
import {
  BedOutlined,
  ShowerOutlined,
  KitchenOutlined,
  RestaurantOutlined,
  FitnessCenterOutlined,
  ImportContactsOutlined,
  FoundationOutlined,
  DirectionsCarOutlined,
  PoolOutlined,
  SportsTennisOutlined,
  DeckOutlined,
  LocalFloristOutlined,
  SpaOutlined,
  NatureOutlined,
  CropFreeOutlined,
  StairsOutlined,
  CabinOutlined,
  YardOutlined,
  CurrencyExchangeOutlined,
  SellOutlined,
  WifiOutlined,
  AcUnitOutlined,
  LocalFireDepartmentOutlined,
  VideocamOutlined,
  SolarPowerOutlined,
  WaterDropOutlined,
  WbTwilightOutlined,
  OutdoorGrillOutlined,
  FenceOutlined,
  ErrorOutline,
} from "@mui/icons-material";

function IconTextBlock({ type, value, variant }) {
  let icon = null;
  let text = "";

  // Icon Property Function (for different variants)
  const getIconProps = () => {
    if (variant === "thornLrg") {
      return { fontSize: "large", className: "text-thorn-0" };
    }
    return {}; // Default empty object for other cases
  };

  switch (type) {
    // Rooms
    case "bed":
      icon = <BedOutlined {...getIconProps()} />;
      text = "Bedrooms";
      break;
    case "bath":
      icon = <ShowerOutlined {...getIconProps()} />;
      text = "Bathrooms";
      break;
    case "kitchen":
      icon = <KitchenOutlined {...getIconProps()} />;
      text = "Kitchens";
      break;
    case "dining":
      icon = <RestaurantOutlined {...getIconProps()} />;
      text = "Dining Rooms";
      break;
    case "gym":
      icon = <FitnessCenterOutlined {...getIconProps()} />;
      text = "Gymnasiums";
      break;
    case "billiard":
      icon = <ImportContactsOutlined {...getIconProps()} />;
      text = "Billiard Rooms";
      break;
    case "basement":
      icon = <FoundationOutlined {...getIconProps()} />;
      text = "Basements";
      break;
    case "garage":
      icon = <DirectionsCarOutlined {...getIconProps()} />;
      text = "Garages";
      break;
    case "pool":
      icon = <PoolOutlined {...getIconProps()} />;
      text = "Swimming Pools";
      break;
    case "court":
      icon = <SportsTennisOutlined {...getIconProps()} />;
      text = "Sports Courts";
      break;
    case "deck":
      icon = <DeckOutlined {...getIconProps()} />;
      text = "Decks";
      break;
    case "flowerGard":
      icon = <LocalFloristOutlined {...getIconProps()} />;
      text = "Flower Gardens";
      break;
    case "vegGard":
      icon = <SpaOutlined {...getIconProps()} />;
      text = "Veg Gardens";
      break;
    case "orchard":
      icon = <NatureOutlined {...getIconProps()} />;
      text = "Orchards";
      break;

    // Home Info
    case "floorSize":
      icon = <CropFreeOutlined {...getIconProps()} />;
      text = "Floor Size";
      break;
    case "floors":
      icon = <StairsOutlined {...getIconProps()} />;
      text = "Floors";
      break;
    case "rooms":
      icon = <CabinOutlined {...getIconProps()} />;
      text = "Rooms";
      break;
    case "lotSize":
      icon = <YardOutlined {...getIconProps()} />;
      text = "Lot Size";
      break;
    case "toRent":
      icon = <CurrencyExchangeOutlined {...getIconProps()} />;
      text = "To Rent";
      break;
    case "forSale":
      icon = <SellOutlined {...getIconProps()} />;
      text = "For Sale";
      break;

    // Home Features
    case "internet":
      icon = <WifiOutlined {...getIconProps()} />;
      text = "Internet Connection";
      break;
    case "airCon":
      icon = <AcUnitOutlined {...getIconProps()} />;
      text = "Air Conditioning";
      break;
    case "heating":
      icon = <LocalFireDepartmentOutlined {...getIconProps()} />;
      text = "Central Heating";
      break;
    case "secSys":
      icon = <VideocamOutlined {...getIconProps()} />;
      text = "Security System";
      break;
    case "solar":
      icon = <SolarPowerOutlined {...getIconProps()} />;
      text = "Solar Panels";
      break;
    case "gardServ":
      icon = <YardOutlined {...getIconProps()} />;
      text = "Garden Services";
      break;
    case "irrigation":
      icon = <WaterDropOutlined {...getIconProps()} />;
      text = "Irrigation System";
      break;
    case "outdoorLight":
      icon = <WbTwilightOutlined {...getIconProps()} />;
      text = "Outdoor Lighting";
      break;
    case "boma":
      icon = <OutdoorGrillOutlined {...getIconProps()} />;
      text = "Outdoor Boma";
      break;
    case "gatedCommunity":
      icon = <FenceOutlined {...getIconProps()} />;
      text = "Gated Community";
      break;

    default:
      icon = <ErrorOutline {...getIconProps()} />;
      text = "Icon & Text Not Found";
      break;
  }

  return (
    <>
      <HStack>
        {icon}
        <p>
          {value}
          {value ? ` ${text}` : text}
        </p>
      </HStack>
    </>
  );
}

export default IconTextBlock;
