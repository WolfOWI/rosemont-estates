import { Button, HStack, IconButton } from "@chakra-ui/react";
import Navbar from "../components/navigation/Navbar.jsx";
import { Link } from "react-router-dom";
import { ArrowBack, ThumbUpOutlined, FavoriteOutlined } from "@mui/icons-material";
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
        {/* House Information */}
        <div className="mt-4 bg-beige-0 rounded-2xl p-8 flex">
          {/* General Info (Right) */}
          <div className="w-[80%]">
            <h2>Modern Riversands Villa</h2>
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
              <Button w="full" h={12} leftIcon={<ThumbUpOutlined />}>
                I'm Interested
              </Button>
              <IconButton icon={<FavoriteOutlined />} h={12} minW={12} />
            </HStack>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingDetailPage;
