// IMPORT
// -----------------------------------------------------------
// React & Hooks
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Services
import { fetchAllHouses } from "../services/houseService";

// Utility Functions
// -

// Third-Party Components
import { HStack, VStack, Button } from "@chakra-ui/react";
import { HouseOutlined } from "@mui/icons-material";

// Internal Components
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import FeaturedHouseCard from "../components/house/FeaturedHouseCard";

// Imagery
import heroImg from "../assets/images/plant-wall-1.jpg";
import agentImg from "../assets/images/smiling_agent.png";
import neighbourhoodImg from "../assets/images/aerial_houses.jpg";
import founderImg from "../assets/images/rosemont_founder.png";
// -----------------------------------------------------------

function HomePage() {
  const [houses, setHouses] = useState([]);
  const [featHouses, setFeatHouses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getHouses = async () => {
      const houseArr = await fetchAllHouses();
      setHouses(houseArr);
    };

    getHouses();
  }, []);

  useEffect(() => {
    if (houses.length > 0) {
      let iArr = []; // Array to store unique random indices
      let fArr = []; // Array to store the selected houses

      while (iArr.length < 4) {
        // Continue until we have 4 unique houses
        let randomIndex = Math.floor(Math.random() * houses.length);

        if (!iArr.includes(randomIndex)) {
          // Check if index is unique
          iArr.push(randomIndex); // Store the unique index
          fArr.push(houses[randomIndex]); // Add the house to featured houses
        }
      }

      setFeatHouses(fArr); // Update the state with the selected houses
    }
  }, [houses]);

  return (
    <>
      <div className="bg-beige-0 w-full min-h-screen">
        {/* Hero Image */}
        <div className="w-full h-[80vh] overflow-hidden relative bg-thorn-M1 flex flex-col items-center">
          <img
            src={heroImg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
          />
          <div className="absolute w-full">
            <Navbar transparent={true} className=" z-20" />
          </div>
          <div className="flex flex-col items-start justify-center w-[50%] h-full">
            <h1 className="z-10 text-beige-P2 mt-16">Your Dream Home Awaits</h1>
            <h3 className="z-10 text-thorn-P3 font-">Find the right luxury home for you.</h3>
            <Button size="lg" mt={16} py={8} variant="lightFilled" as={Link} to="/listings">
              <h3 className="text-thorn-0">Explore Properties</h3>
            </Button>
          </div>
        </div>

        {/* Subhero Section */}
        <div className="w-full h-[30vh] bg-beige flex justify-center bg-beige-0">
          <div className="w-[50%] mt-16">
            <h3>
              Browse our extensive listings, connect with agents, and make informed decisions—all in
              one place.
            </h3>
          </div>
        </div>

        {/* About Us */}
        <div className="w-full h-96 bg-thorn-M2 flex justify-center items-center">
          <img src={neighbourhoodImg} alt="happy family" className="w-full h-full object-cover" />
          <div className="ml-16 mr-24 w-[50%]">
            <h3 className="text-beige-0">Exclusive Listings</h3>
            <p className="text-thorn-P3">
              Rosemont Estates is proud to offer an exclusive portfolio of properties that you won’t
              find anywhere else. Our close relationships with developers, architects, and private
              sellers give us access to homes that are as unique as they are luxurious. Whether
              you’re searching for a secluded waterfront retreat or a penthouse in the heart of the
              city, our curated selection of properties ensures that you’ll find the perfect match.
            </p>
          </div>
        </div>
        <div className="w-full h-[500px] bg-thorn-M2 flex justify-center items-center">
          <div className="ml-16 mr-24 w-[50%]">
            <h3 className="text-beige-0 text-right">Our Origins</h3>
            <p className="text-thorn-P3 text-right">
              In the early 1940s, Rosemont Estates was born out of a passion for architecture and an
              unwavering commitment to excellence. Founded by the visionary architect and a seasoned
              real estate investor, Tsungai Roseston Katsuro, the company began as a small boutique
              agency specializing in restoring historic estates in the heart of Johannesburg. As
              word spread about their impeccable taste and attention to detail, Rosemont Estates
              quickly became synonymous with luxury living, attracting an elite clientele seeking
              properties that blended timeless elegance with modern comforts.
            </p>
          </div>
          <img
            src={founderImg}
            alt="happy family"
            className="w-full h-full object-cover brightness-125"
          />
        </div>
        <div className="w-full h-96 bg-thorn-M2 flex justify-center items-center">
          <img src={agentImg} alt="happy family" className="w-full h-full object-cover" />
          <div className="ml-16 mr-24 w-[50%]">
            <h3 className="text-beige-0">A Commitment to Excellence</h3>
            <p className="text-thorn-P3">
              Excellence is at the heart of everything we do at Rosemont Estates. From our
              meticulous property selection process to our bespoke client services, we strive for
              perfection in every detail. Our dedication to excellence ensures that you receive the
              highest standard of service, whether you’re buying, selling, or simply exploring your
              options.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center">
          {/* Home Page Content */}
          <div className="w-[50%]">
            {/* Featured Houses */}
            <div className="mt-16">
              <h3 className="mb-4">Featured Properties</h3>
              <VStack align="start" spacing={2}>
                {houses && (
                  <>
                    {featHouses.map((house) => (
                      <FeaturedHouseCard key={house.houseId} house={house} />
                    ))}
                  </>
                )}
              </VStack>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="w-full h-40 bg-beige flex justify-center items-center mt-16 bg-beige-M1">
          <h3 className="">
            The home of your dreams is just a{" "}
            <Button
              mx={2}
              leftIcon={<HouseOutlined />}
              onClick={() => {
                navigate("/listings");
              }}
            >
              Click
            </Button>{" "}
            away.
          </h3>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
