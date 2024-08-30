// IMPORT
// -----------------------------------------------------------
// React & Hooks
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Services
// -

// Utility Functions
// -

// Third-Party Components
import { VStack, Button } from "@chakra-ui/react";

// Internal Components
import Navbar from "../components/navigation/Navbar";
import RecentHouseCard from "../components/house/RecentHouseCard";
import Footer from "../components/navigation/Footer";

// Imagery
import heroImg from "../assets/images/plant-wall-1.jpg";
import familyImg from "../assets/images/familyAtHome.jpg";
// -----------------------------------------------------------

function HomePage() {
  const property = {
    title: "Modern Riversands Villa",
    style: "Italian-Style",
    availableDate: "01/09/2024",
    address: "22 Century Boulevard, Riversands, Johannesburg, 1684",
    description:
      "Modern bedroom with en-suite bathroom available in two bedroom apartment. Are you looking for a vibrant living experience in the heart of River-sands, near the University of Johannesburg? Look no further than this fantastic opportunity at Urban Quarter!",
    bedrooms: 6,
    bathrooms: 5,
    kitchens: 2,
    swimmingPools: 1,
    sportsCourts: 1,
    price: "R64,500,000",
  };

  return (
    <>
      <div className="bg-beige-0 w-full min-h-screen">
        {/* Hero Image */}
        <div className="w-full h-[60vh] overflow-hidden relative bg-thorn-M1 flex flex-col items-center">
          <img
            src={heroImg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
          />
          <div className="absolute w-full">
            <Navbar transparent={true} className=" z-20" />
          </div>
          <div className="flex flex-col items-start justify-center w-[70%] h-full">
            <h1 className="z-10 text-beige-P2 mt-16">Your Dream Home Awaits</h1>
            <h3 className="z-10 text-thorn-P3 font-">Find the right luxury home for you.</h3>
            <Button size="lg" mt={16} py={8} variant="lightFilled" as={Link} to="/listings">
              <h3 className="text-thorn-0">Explore Properties</h3>
            </Button>
          </div>
        </div>

        <div className="flex w-full justify-center">
          {/* Home Page Content */}
          <div className="w-[70%]">
            {/* Recently Viewed */}
            <VStack align="start" mt={16} spacing={8}>
              <h3 className="mb-[-16px]">Recently Viewed</h3>
              <RecentHouseCard property={property} />
              <RecentHouseCard property={property} />
              <RecentHouseCard property={property} />
            </VStack>

            {/* About Us */}
            <VStack align="start" mt={16}>
              <h3>About Us</h3>
              <img
                src={familyImg}
                alt="happy family"
                className="h-64 w-full object-cover rounded-3xl"
              />
              <p>
                At Rosemont Estates, we understand that luxury is about more than just opulence—it's
                about lifestyle, comfort, and creating a haven where memories are made. Our curated
                collection of high-end homes includes a diverse range of architectural styles, from
                contemporary masterpieces to timeless estates, ensuring that we have the perfect
                property to match your unique taste and preferences.
              </p>
            </VStack>

            {/* Spacer */}
            <div className="w-full h-64"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
