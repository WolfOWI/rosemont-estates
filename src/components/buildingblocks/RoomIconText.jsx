// Room (interior & exterior): Icon & Text

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
  ErrorOutline,
} from "@mui/icons-material";

let icon = null;
let text = "";

function RoomIconText({ type }) {
  switch (type) {
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
      <HStack>
        {icon}
        <p>{text}</p>
      </HStack>
    </>
  );
}

export default RoomIconText;
