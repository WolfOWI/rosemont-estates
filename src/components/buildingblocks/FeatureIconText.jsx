// Home Features: Icon & Text

import { HStack } from "@chakra-ui/react";

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
} from "@mui/icons-material";

let icon = null;
let text = "";

function FeatureIconText({ type }) {
  switch (type) {
    case "internet":
      icon = <WifiOutlined />;
      text = "Internet Connection";
      break;
    case "airCon":
      icon = <AcUnitOutlined />;
      text = "Air Conditioning";
      break;
    case "heating":
      icon = <LocalFireDepartmentOutlined />;
      text = "Central Heating";
      break;
    case "secSys":
      icon = <VideocamOutlined />;
      text = "Security System";
      break;
    case "solar":
      icon = <SolarPowerOutlined />;
      text = "Solar Panels";
      break;
    case "gardServ":
      icon = <YardOutlined />;
      text = "Garden Services";
      break;
    case "irrigation":
      icon = <WaterDropOutlined />;
      text = "Irrigation System";
      break;
    case "outdoorLight":
      icon = <WbTwilightOutlined />;
      text = "Outdoor Lighting";
      break;
    case "boma":
      icon = <OutdoorGrillOutlined />;
      text = "Outdoor Boma";
      break;
    case "gatedCommunity":
      icon = <FenceOutlined />;
      text = "Gated Community";
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

export default FeatureIconText;
