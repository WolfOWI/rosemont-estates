import Navbar from "../components/navigation/Navbar";
import SearchBar from "../components/input/SearchBar";
import PopoverForm from "../components/input/PopoverForm";
import RoomIconText from "../components/buildingblocks/RoomIconText";
import FeatureIconText from "../components/buildingblocks/FeatureIconText";
import React, { useState } from "react";
import {
  Container,
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

function ListingsPage() {
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
  return (
    <>
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
        </HStack>
      </div>
    </>
  );
}

export default ListingsPage;
