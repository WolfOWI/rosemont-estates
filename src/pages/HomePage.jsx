import React, { useState } from "react";
import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
  CheckboxGroup,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  IconButton,
  InputLeftElement,
  InputRightElement,
  PopoverFooter,
  Button,
  Switch,
} from "@chakra-ui/react";
import { PriceCheckOutlined, BedOutlined, HouseOutlined, StarOutline } from "@mui/icons-material";
import Navbar from "../components/navigation/Navbar";
import heroImg from "../assets/images/plant-wall-1.jpg";
import SearchBar from "../components/input/SearchBar";
import PopoverForm from "../components/input/PopoverForm";
import RoomIconText from "../components/buildingblocks/RoomIconText";
import FeatureIconText from "../components/buildingblocks/FeatureIconText";
import RecentHouseCard from "../components/home/RecentHouseCard";
import familyImg from "../assets/images/familyAtHome.jpg";

function HomePage() {
  const [priceRange, setPriceRange] = useState([0, 150]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const handleMinInputChange = (valueString) => {
    const value = parseInt(valueString, 10);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxInputChange = (valueString) => {
    const value = parseInt(valueString, 10);
    setPriceRange([priceRange[0], value]);
  };

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
        <div className="w-full h-[38vh] overflow-hidden relative bg-thorn-M1">
          <img
            src={heroImg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
          />
          <Navbar transparent={true} className="relative z-20" />
          <div className="flex flex-col items-center h-[40vh]">
            <h1 className="relative z-10 text-beige-0 mt-16">Discover your dream mansion</h1>
            <p className="relative z-10 text-beige-M3">Find the right luxury home for you.</p>
          </div>
        </div>

        <div className="flex w-full justify-center">
          {/* Home Page Content */}
          <div className="w-[70%]">
            {/* Search bar */}
            <div className="mt-[-40px]">
              <SearchBar />
            </div>
            {/* Filters */}
            <HStack my={2}>
              {/* Price Filtering */}
              <PopoverForm label="Price" icon={<PriceCheckOutlined />} title="Price Filter">
                <FormControl>
                  <RangeSlider
                    defaultValue={[0, 150]}
                    min={0}
                    max={150}
                    step={1}
                    value={priceRange}
                    onChange={handleSliderChange}
                  >
                    <RangeSliderTrack bg="beige.M1">
                      <RangeSliderFilledTrack bg="thorn.0" />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0} />
                    <RangeSliderThumb boxSize={6} index={1} />
                  </RangeSlider>
                </FormControl>
                <FormControl>
                  <div className="flex items-center">
                    <p className="pr-4">Min</p>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none" color="warmgray.0">
                        R
                      </InputLeftElement>
                      <Input
                        value={priceRange[0]}
                        min={0}
                        max={priceRange[1]}
                        onChange={handleMinInputChange}
                        type="number"
                      ></Input>
                      <InputRightElement pointerEvents="none" color="warmgray.0" w="35%">
                        million
                      </InputRightElement>
                    </InputGroup>
                  </div>
                </FormControl>
                <FormControl>
                  <div className="flex items-center">
                    <p className="pr-4">Max</p>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none" color="warmgray.0">
                        R
                      </InputLeftElement>
                      <Input
                        value={priceRange[1]}
                        min={priceRange[0]}
                        max={150}
                        onChange={handleMaxInputChange}
                        type="number"
                      ></Input>
                      <InputRightElement pointerEvents="none" color="warmgray.0" w="35%">
                        million
                      </InputRightElement>
                    </InputGroup>
                  </div>
                </FormControl>
              </PopoverForm>

              {/* Interior Filter */}
              <PopoverForm label="Interior" icon={<BedOutlined />} title="Rooms">
                <FormControl>
                  <VStack align="start">
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="bed" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="bath" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="kitchen" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="dining" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="gym" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="billiard" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="basement" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="garage" />
                    </HStack>
                  </VStack>
                </FormControl>
              </PopoverForm>

              {/* Exterior Filter */}
              <PopoverForm label="Exterior" icon={<HouseOutlined />} title="Outdoor Areas">
                <FormControl>
                  <VStack align="start">
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="pool" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="court" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="deck" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="flowerGard" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="vegGard" />
                    </HStack>
                    <HStack>
                      <Input type="number" w={10} p={0} textAlign="center" />
                      <RoomIconText type="orchard" />
                    </HStack>
                  </VStack>
                </FormControl>
              </PopoverForm>

              {/* Features Filter */}
              <PopoverForm label="Features" icon={<StarOutline />} title="Include:">
                <VStack align="start">
                  <CheckboxGroup>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="internet" />
                      <Checkbox value="internet"></Checkbox>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="airCon" />
                      <Checkbox value="aircon"></Checkbox>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="heating" />
                      <Checkbox value="heating"></Checkbox>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="secSys" />
                      <Checkbox value="securitysys"></Checkbox>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="solar" />
                      <Checkbox value="solar"></Checkbox>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="gardServ" />
                      <Checkbox value="gardenserv"></Checkbox>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="irrigation" />
                      <Checkbox value="irrigation"></Checkbox>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="outdoorLight" />
                      <Checkbox value="outLighting"></Checkbox>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="boma" />
                      <Checkbox value="boma"></Checkbox>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <FeatureIconText type="gatedCommunity" />
                      <Checkbox value="gatedCommunity"></Checkbox>
                    </div>
                  </CheckboxGroup>
                </VStack>
              </PopoverForm>
              <div className="w-[34%]">{/* Spacer */}</div>
            </HStack>

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
    </>
  );
}

export default HomePage;
