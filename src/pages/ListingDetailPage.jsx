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
import IconTextBlock from "../components/buildingblocks/IconTextBlock.jsx";

function ListingDetailPage() {
  return (
    <>
      <Navbar />
      {/* Page Content */}
      <div className="mt-4 mb-24 mx-4 md:mx-8">
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
              <IconTextBlock type="floorSize" textHidden="true" value="1205" variant="beigeBadge" />
              <IconTextBlock type="floors" textHidden="true" value="5" variant="beigeBadge" />
              <IconTextBlock type="rooms" textHidden="true" value="53" variant="beigeBadge" />
              <IconTextBlock type="lotSize" textHidden="true" value="3200" variant="beigeBadge" />
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
        <HStack mt={4} spacing={4} align="stretch">
          <div className="bg-beige-0 p-8 rounded-2xl flex flex-col w-full h-full">
            <VStack align="start" spacing={4}>
              <h3>Interior</h3>
              <VStack align="start" spacing={6}>
                <IconTextBlock value="2" type="bed" variant="thornLrg" />
                <IconTextBlock value="2" type="bath" variant="thornLrg" />
                <IconTextBlock value="2" type="kitchen" variant="thornLrg" />
                <IconTextBlock value="2" type="dining" variant="thornLrg" />
                <IconTextBlock value="2" type="gym" variant="thornLrg" />
                <IconTextBlock value="2" type="billiard" variant="thornLrg" />
                <IconTextBlock value="2" type="basement" variant="thornLrg" />
                <IconTextBlock value="2" type="garage" variant="thornLrg" />
              </VStack>
            </VStack>
          </div>
          <div className="bg-beige-0 p-8 rounded-2xl flex flex-col w-full">
            <VStack align="start" spacing={4}>
              <h3>Exterior</h3>
              <VStack align="start" spacing={6}>
                <IconTextBlock value="2" type="pool" variant="thornLrg" />
                <IconTextBlock value="2" type="court" variant="thornLrg" />
                <IconTextBlock value="2" type="deck" variant="thornLrg" />
                <IconTextBlock value="2" type="flowerGard" variant="thornLrg" />
                <IconTextBlock value="2" type="vegGard" variant="thornLrg" />
                <IconTextBlock value="2" type="orchard" variant="thornLrg" />
              </VStack>
            </VStack>
          </div>
          <div className="bg-beige-0 p-8 rounded-2xl flex flex-col w-full ">
            <VStack align="start" spacing={4}>
              <h3>Features</h3>
              <VStack align="start" spacing={6}>
                <IconTextBlock type="internet" variant="thornLrg" />
                <IconTextBlock type="airCon" variant="thornLrg" />
                <IconTextBlock type="heating" variant="thornLrg" />
                <IconTextBlock type="secSys" variant="thornLrg" />
                <IconTextBlock type="solar" variant="thornLrg" />
                <IconTextBlock type="gardServ" variant="thornLrg" />
                <IconTextBlock type="outdoorLight" variant="thornLrg" />
                <IconTextBlock type="gatedCommunity" variant="thornLrg" />
              </VStack>
            </VStack>
          </div>
        </HStack>
      </div>
    </>
  );
}

export default ListingDetailPage;
