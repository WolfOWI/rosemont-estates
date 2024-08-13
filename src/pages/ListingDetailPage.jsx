import { Button, HStack, IconButton, VStack } from "@chakra-ui/react";
import Navbar from "../components/navigation/Navbar.jsx";
import { Link } from "react-router-dom";
import {
  ArrowBack,
  ThumbUpOutlined,
  FavoriteOutlined,
  LocationCityOutlined,
  LocationOnOutlined,
  CalendarMonthOutlined,
} from "@mui/icons-material";
import ImageCollection from "../components/visual/ImageCollection.jsx";

import tempImgA from "../assets/images/familyAtHome.jpg";
import tempImgB from "../assets/images/plant-wall-1.jpg";
import tempImgC from "../assets/images/plant-wall-2.jpg";

// Real Estate Colour Logos
import aidaLogoColour from "../assets/logos/agencyLogos/aidaLogoColour.png";
import engelLogoColour from "../assets/logos/agencyLogos/engelLogoColour.png";
import pamLogoColour from "../assets/logos/agencyLogos/pamLogoColour.png";
import rawsonLogoColour from "../assets/logos/agencyLogos/rawsonLogoColour.png";
import realnetLogoColour from "../assets/logos/agencyLogos/realnetLogoColour.png";
import remaxLogoColour from "../assets/logos/agencyLogos/remaxLogoColour.png";
import seeffLogoColour from "../assets/logos/agencyLogos/seeffLogoColour.png";
import tsungaiLogoColour from "../assets/logos/agencyLogos/tsungaiLogoColour.png";
import adminLogoColour from "../assets/logos/agencyLogos/adminLogoColour.png";
import ListingBadge from "../components/buildingblocks/ListingBadge.jsx";
import IconTextBlock from "../components/buildingblocks/IconTextBlock.jsx";

function ListingDetailPage() {
  return (
    <>
      <Navbar />
      {/* Page Content */}
      <div className="mt-4 mx-4 md:mx-8">
        <IconButton as={Link} to="/listings" icon={<ArrowBack />} />
        {/* House Imagery */}
        <div className="mt-4">
          <ImageCollection images={[tempImgB, tempImgA, tempImgC, tempImgC, tempImgA]} />
        </div>
        {/* House Info Box */}
        <div className="mt-4 bg-beige-0 rounded-2xl p-8 flex justify-between">
          {/* General Info (Right) */}
          <div className="w-[75%] flex flex-col justify-between">
            <div className="flex flex-col">
              <h2>Modern Riversands Villa</h2>
              <h3 className="text-warmgray-600 font-normal mt-[-8px]">Italian-style mansion</h3>
              <p>
                Modern bedroom with en-suite bathroom available in two bedroom apartment. Are you
                looking for a vibrant living experience in the heart of River-sands, near the
                University of Johannesburg? Look no further than this fantastic opportunity at Urban
                Quarter!
              </p>
            </div>
            <VStack align="start">
              <HStack>
                <LocationOnOutlined />
                <p>22 Century Boulevard, Riversands, Johannesburg, 1684</p>
              </HStack>
              <HStack>
                <CalendarMonthOutlined />
                <p>Available from 1 Sept 2024</p>
              </HStack>
            </VStack>
            <HStack w="fit-content">
              <ListingBadge type="floorSize" size="full" value="1205" />
              <ListingBadge type="numFloors" size="full" value="5" />
              <ListingBadge type="rooms" size="full" value="53" />
              <ListingBadge type="lotSize" size="full" value="3200" />
            </HStack>
          </div>
          {/* Price & Buttons (Left) */}
          <div className="w-[20%]">
            <div className="bg-beige-M1 px-4 py-8 flex flex-col justify-center items-center rounded-xl">
              <p>To Rent</p>
              <h3 className="font-alt">R64,500</h3>
              <p className="text-sm">per month</p>
              <img src={remaxLogoColour} alt="estate logo" className="w-24 mt-8" />
            </div>
            <HStack w="full" mt={4}>
              <Button w="full" leftIcon={<ThumbUpOutlined />}>
                I'm Interested
              </Button>
              <IconButton icon={<FavoriteOutlined />} minW={12} variant="roseOutline" />
            </HStack>
          </div>
        </div>
        {/* Interior, Exterior & Features */}
        <HStack mt={4}>
          <div className="bg-beige-0 p-8 rounded-2xl flex flex-col">
            <VStack align="start" spacing={4}>
              <h3>Interior</h3>
              <IconTextBlock value="2" type="bed" variant="thornLrg" />
              <IconTextBlock value="2" type="bed" variant="thornLrg" />
            </VStack>
          </div>
        </HStack>
      </div>
    </>
  );
}

export default ListingDetailPage;
