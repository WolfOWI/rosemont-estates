import { HStack } from "@chakra-ui/react";

import {
  CropFreeOutlined,
  StairsOutlined,
  CabinOutlined,
  YardOutlined,
  CurrencyExchangeOutlined,
  SellOutlined,
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
  ErrorOutline,
} from "@mui/icons-material";

function ListingBadge({ type, value, size }) {
  let icon = null;
  let text = "";
  let m2Unit = false;

  // Depending on TYPE
  switch (type) {
    case "floorSize":
      icon = <CropFreeOutlined />;
      text = "Floor Size";
      m2Unit = true;
      break;
    case "numFloors":
      icon = <StairsOutlined />;
      text = "Floors";
      break;
    case "rooms":
      icon = <CabinOutlined />;
      text = "Rooms";
      break;
    case "lotSize":
      icon = <YardOutlined />;
      text = "Lot Size";
      m2Unit = true;
      break;
    case "toRent":
      icon = <CurrencyExchangeOutlined />;
      text = "To Rent";
      break;
    case "forSale":
      icon = <SellOutlined />;
      text = "For Sale";
      break;
    case "bed":
      icon = <BedOutlined />;
      text = "Bedrooms";
      break;
    case "bath":
      icon = <ShowerOutlined />;
      text = "Bathrooms";
      break;
    case "kitchen":
      icon = <KitchenOutlined />;
      text = "Kitchens";
      break;
    case "dining":
      icon = <RestaurantOutlined />;
      text = "Dining Rooms";
      break;
    case "gym":
      icon = <FitnessCenterOutlined />;
      text = "Gymnasiums";
      break;
    case "billiard":
      icon = <ImportContactsOutlined />;
      text = "Billiard Rooms";
      break;
    case "basement":
      icon = <FoundationOutlined />;
      text = "Basements";
      break;
    case "garage":
      icon = <DirectionsCarOutlined />;
      text = "Garages";
      break;
    case "pool":
      icon = <PoolOutlined />;
      text = "Swimming Pools";
      break;
    case "court":
      icon = <SportsTennisOutlined />;
      text = "Sports Courts";
      break;
    case "deck":
      icon = <DeckOutlined />;
      text = "Decks";
      break;
    case "flowerGard":
      icon = <LocalFloristOutlined />;
      text = "Flower Gardens";
      break;
    case "vegGard":
      icon = <SpaOutlined />;
      text = "Veg Gardens";
      break;
    case "orchard":
      icon = <NatureOutlined />;
      text = "Orchards";
      break;

    default:
      icon = <ErrorOutline />;
      text = "Icon & Text Not Found";
      break;
  }

  return (
    <>
      <HStack bg="beige.M1" py={2} px={4} rounded="xl" w="full" minW="fit-content" justify="center">
        {icon}
        <p>
          {value}
          {m2Unit && ` m²`}
          {size === "full" && ` ${text}`}
        </p>
      </HStack>
    </>
  );
}

export default ListingBadge;
