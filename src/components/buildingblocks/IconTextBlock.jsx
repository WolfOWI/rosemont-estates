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
  Person2Outlined,
  PhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";

function IconTextBlock({ type, value, variant, textHidden, fontWeight }) {
  let icon = null;
  let singleText = "";
  let pluralText = "";
  let text = "";
  let m2Unit = false; // Show m² unit.

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
      singleText = "Bedroom";
      pluralText = "Bedrooms";

      break;
    case "bath":
      icon = <ShowerOutlined {...getIconProps()} />;
      singleText = "Bathroom";
      pluralText = "Bathrooms";

      break;
    case "kitchen":
      icon = <KitchenOutlined {...getIconProps()} />;
      singleText = "Kitchen";
      pluralText = "Kitchens";

      break;
    case "dining":
      icon = <RestaurantOutlined {...getIconProps()} />;
      singleText = "Dining Room";
      pluralText = "Dining Rooms";

      break;
    case "gym":
      icon = <FitnessCenterOutlined {...getIconProps()} />;
      singleText = "Gymnasium";
      pluralText = "Gymnasiums";

      break;
    case "billiard":
      icon = <ImportContactsOutlined {...getIconProps()} />;
      singleText = "Billiard Room";
      pluralText = "Billiard Rooms";

      break;
    case "basement":
      icon = <FoundationOutlined {...getIconProps()} />;
      singleText = "Basement";
      pluralText = "Basements";

      break;
    case "garage":
      icon = <DirectionsCarOutlined {...getIconProps()} />;
      singleText = "Garage";
      pluralText = "Garages";

      break;
    case "pool":
      icon = <PoolOutlined {...getIconProps()} />;
      singleText = "Swimming Pool";
      pluralText = "Swimming Pools";

      break;
    case "court":
      icon = <SportsTennisOutlined {...getIconProps()} />;
      singleText = "Sports Court";
      pluralText = "Sports Courts";

      break;
    case "deck":
      icon = <DeckOutlined {...getIconProps()} />;
      singleText = "Deck";
      pluralText = "Decks";

      break;
    case "flowerGard":
      icon = <LocalFloristOutlined {...getIconProps()} />;
      singleText = "Flower Garden";
      pluralText = "Flower Gardens";

      break;
    case "vegGard":
      icon = <SpaOutlined {...getIconProps()} />;
      singleText = "Veg Garden";
      pluralText = "Veg Gardens";

      break;
    case "orchard":
      icon = <NatureOutlined {...getIconProps()} />;
      singleText = "Orchard";
      pluralText = "Orchards";

      break;

    // Home Info
    case "floorSize":
      icon = <CropFreeOutlined {...getIconProps()} />;
      singleText = "Floor Size";
      pluralText = "Floor Size";

      m2Unit = true;
      break;
    case "floors":
      icon = <StairsOutlined {...getIconProps()} />;
      singleText = "Floor";
      pluralText = "Floors";

      break;
    case "rooms":
      icon = <CabinOutlined {...getIconProps()} />;
      singleText = "Room";
      pluralText = "Rooms";

      break;
    case "lotSize":
      icon = <YardOutlined {...getIconProps()} />;
      singleText = "Lot Size";
      pluralText = "Lot Size";

      m2Unit = true;
      break;
    case "toRent":
      icon = <CurrencyExchangeOutlined {...getIconProps()} />;
      singleText = "To Rent";
      pluralText = "To Rent";

      break;
    case "forSale":
      icon = <SellOutlined {...getIconProps()} />;
      singleText = "For Sale";
      pluralText = "For Sale";

      break;

    // Home Features
    case "internet":
      icon = <WifiOutlined {...getIconProps()} />;
      singleText = "Internet Connection";
      pluralText = "Internet Connection";

      break;
    case "airCon":
      icon = <AcUnitOutlined {...getIconProps()} />;
      singleText = "Air Conditioning";
      pluralText = "Air Conditioning";

      break;
    case "heating":
      icon = <LocalFireDepartmentOutlined {...getIconProps()} />;
      singleText = "Central Heating";
      pluralText = "Central Heating";

      break;
    case "secSys":
      icon = <VideocamOutlined {...getIconProps()} />;
      singleText = "Security System";
      pluralText = "Security System";

      break;
    case "solar":
      icon = <SolarPowerOutlined {...getIconProps()} />;
      singleText = "Solar Panels";
      pluralText = "Solar Panels";

      break;
    case "gardServ":
      icon = <YardOutlined {...getIconProps()} />;
      singleText = "Garden Services";
      pluralText = "Garden Services";

      break;
    case "irrigation":
      icon = <WaterDropOutlined {...getIconProps()} />;
      singleText = "Irrigation System";
      pluralText = "Irrigation System";

      break;
    case "outdoorLight":
      icon = <WbTwilightOutlined {...getIconProps()} />;
      singleText = "Outdoor Lighting";
      pluralText = "Outdoor Lighting";

      break;
    case "boma":
      icon = <OutdoorGrillOutlined {...getIconProps()} />;
      singleText = "Outdoor Boma";
      pluralText = "Outdoor Boma";

      break;
    case "gatedCommunity":
      icon = <FenceOutlined {...getIconProps()} />;
      singleText = "Gated Community";
      pluralText = "Gated Community";

      break;

    // User-related
    case "name":
      icon = <Person2Outlined {...getIconProps()} />;
      singleText = "Name";
      pluralText = "Names";

      break;
    case "phone":
      icon = <PhoneOutlined {...getIconProps()} />;
      singleText = "Phone Number";
      pluralText = "Phone Numbers";

      break;
    case "email":
      icon = <EmailOutlined {...getIconProps()} />;
      singleText = "Email Address";
      pluralText = "Email Addresses";

      break;

    default:
      icon = <ErrorOutline {...getIconProps()} />;
      singleText = "Icon & Text Not Found";
      pluralText = "Icon & Text Not Found";
      text = "Icon & Text Not Found";
      break;
  }

  // Singular, plural form, based on value prop
  if (value !== null) {
    if (parseInt(value) === 1) {
      text = singleText;
    } else if (parseInt(value) === 0) {
      text = "No " + pluralText;
    } else {
      text = pluralText;
    }
  } else {
    text = singleText;
  }

  return (
    <>
      <HStack
        bg={variant === "beigeBadge" ? "beige.M1" : "transparent"}
        py={variant === "beigeBadge" ? 2 : 0}
        px={variant === "beigeBadge" ? 4 : 0}
        rounded={variant === "beigeBadge" ? "xl" : "none"}
        w={variant === "beigeBadge" ? "full" : "auto"}
        minW={variant === "beigeBadge" ? "fit-content" : "auto"}
        justify={variant === "beigeBadge" ? "center" : "start"}
      >
        {icon}
        <p className={fontWeight ? "font-bold" : ""}>
          {parseInt(value) !== 0 && value} {/* If value is zero, don't display it */}
          {m2Unit && ` m²`}
          {textHidden ? "" : ` ${text}`}
        </p>
      </HStack>
    </>
  );
}

export default IconTextBlock;
