// Home Info (lot size, rooms, etc): Icon & Text

import { HStack } from "@chakra-ui/react";

import {
  CropFreeOutlined,
  StairsOutlined,
  CabinOutlined,
  YardOutlined,
  CurrencyExchangeOutlined,
  SellOutlined,
  ErrorOutline,
} from "@mui/icons-material";

let icon = null;
let text = "";

function HomeInfoIconText({ type, value }) {
  switch (type) {
    case "floorSize":
      icon = <CropFreeOutlined />;
      text = "Floor Size";
      break;
    case "floors":
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
      break;
    case "toRent":
      icon = <CurrencyExchangeOutlined />;
      text = "To Rent";
      break;
    case "forSale":
      icon = <SellOutlined />;
      text = "For Sale";
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
        <p>
          {value}
          {value ? ` ${text}` : text}
        </p>
      </HStack>
    </>
  );
}

export default HomeInfoIconText;
