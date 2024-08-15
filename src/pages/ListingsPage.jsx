import Navbar from "../components/navigation/Navbar";
import SearchBar from "../components/input/SearchBar";
import PopoverForm from "../components/input/PopoverForm";
import IconTextBlock from "../components/buildingblocks/IconTextBlock";
import React, { useEffect, useState } from "react";
import { fetchAllHouses } from "../services/houseService";
import {
  VStack,
  HStack,
  FormControl,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
  CheckboxGroup,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { PriceCheckOutlined, BedOutlined, HouseOutlined, StarOutline } from "@mui/icons-material";
import ListingHouseCard from "../components/house/ListingHouseCard";

function ListingsPage() {
  // Houses in database
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    async function loadHouses() {
      try {
        const response = await fetchAllHouses();
        setHouses(response);
      } catch (error) {
        console.log("Error fetching houses: ", error);
      }
    }

    loadHouses();
  }, []);

  // Price Filter
  // ----------------------------------------------------
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
  // ----------------------------------------------------

  // TODO Temporary Home
  const propertyA = {
    title: "Modern Riversands Villa",
    style: "Italian-Style",
    availableDate: "01/09/2024",
    address: "22 Century Boulevard, Riversands, Johannesburg, 1684",
    description:
      "Modern bedroom with en-suite bathroom available in two bedroom apartment. Are you looking for a vibrant living experience in the heart of River-sands, near the University of Johannesburg? Look no further than this fantastic opportunity at Urban Quarter!",
    catchphrase: "6 Bedroom Italian-Style Mansion in Riversands",
    floorSize: 1200,
    floors: 5,
    numRooms: 53,
    numBath: 5,
    numGarage: 2,
    swimmingPools: 1,
    sportsCourts: 1,
    price: "R64,500,000",
  };

  return (
    <>
      <div className="bg-beige-0 w-full min-h-screen">
        <Navbar />
        <div className="mt-8 mx-4 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96">
          <SearchBar />
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
                    <IconTextBlock type="bed" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="bath" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="kitchen" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="dining" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="gym" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="billiard" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="basement" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="garage" />
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
                    <IconTextBlock type="pool" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="court" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="deck" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="flowerGard" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="vegGard" />
                  </HStack>
                  <HStack>
                    <Input type="number" w={10} p={0} textAlign="center" />
                    <IconTextBlock type="orchard" />
                  </HStack>
                </VStack>
              </FormControl>
            </PopoverForm>

            {/* Features Filter */}
            <PopoverForm label="Features" icon={<StarOutline />} title="Include:">
              <VStack align="start" mb={4}>
                <CheckboxGroup>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="internet" />
                    <Checkbox value="internet"></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="airCon" />
                    <Checkbox value="aircon"></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="heating" />
                    <Checkbox value="heating"></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="secSys" />
                    <Checkbox value="securitysys"></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="solar" />
                    <Checkbox value="solar"></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="gardServ" />
                    <Checkbox value="gardenserv"></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="irrigation" />
                    <Checkbox value="irrigation"></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="outdoorLight" />
                    <Checkbox value="outLighting"></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="boma" />
                    <Checkbox value="boma"></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="gatedCommunity" />
                    <Checkbox value="gatedCommunity"></Checkbox>
                  </div>
                </CheckboxGroup>
              </VStack>
            </PopoverForm>
          </HStack>
          {/* Homes List */}
          <VStack w="full" mt={8} spacing={4}>
            <ListingHouseCard house={propertyA} />
            <ListingHouseCard house={propertyA} />
            <ListingHouseCard house={propertyA} />
            <ListingHouseCard house={propertyA} />
            <ListingHouseCard house={propertyA} />
            <ListingHouseCard house={propertyA} />
            <ListingHouseCard house={propertyA} />
            <ListingHouseCard house={propertyA} />
          </VStack>
        </div>
      </div>
    </>
  );
}

export default ListingsPage;
