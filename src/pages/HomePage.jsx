import React, { useState } from "react";
import {
  Box,
  VStack,
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
} from "@chakra-ui/react";
import { PriceCheckOutlined, BedOutlined, HouseOutlined, StarOutline } from "@mui/icons-material";
import Navbar from "../components/navigation/Navbar";
import heroImg from "../assets/images/plant-wall-1.jpg";
import SearchBar from "../components/input/SearchBar";
import PopoverForm from "../components/input/PopoverForm";

function HomePage() {
  const [priceRange, setPriceRange] = useState([0, 100]);

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
      {/* Hero Image */}
      <div className="w-full h-[50vh] overflow-hidden relative bg-thorn-M1">
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
      {/* Search bar */}
      <div className="flex justify-center mt-[-40px] w-full">
        <SearchBar />
      </div>
      {/* Filters */}
      <div className="flex justify-center mt-4 space-x-4">
        <PopoverForm label="Price" icon={<PriceCheckOutlined />}>
          <FormControl>
            <FormLabel>Price Range</FormLabel>
            <RangeSlider
              defaultValue={[0, 100]}
              min={0}
              max={100}
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
            <FormLabel>Min Price</FormLabel>
            <NumberInput
              value={priceRange[0]}
              min={0}
              max={priceRange[1]}
              onChange={handleMinInputChange}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Max Price</FormLabel>
            <NumberInput
              value={priceRange[1]}
              min={priceRange[0]}
              max={100}
              onChange={handleMaxInputChange}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </PopoverForm>

        {/* Interior Filter */}
        <PopoverForm label="Interior" icon={<BedOutlined />}>
          <InputGroup>
            <InputLeftAddon>Max Price</InputLeftAddon>
            <Input type="tel" placeholder="phone number" />
          </InputGroup>
          <Input label="Bedrooms" id="bedrooms" type="number" />
          <Input label="Bathrooms" id="bathrooms" type="number" />
        </PopoverForm>

        {/* Exterior Filter */}
        <PopoverForm label="Exterior" icon={<HouseOutlined />}>
          <Input label="Lot Size" id="lot-size" type="number" />
          <Input label="Number of Floors" id="floors" type="number" />
        </PopoverForm>

        {/* Features Filter */}
        <PopoverForm label="Features" icon={<StarOutline />}>
          <VStack align="start">
            <CheckboxGroup>
              <Checkbox value="internet">Internet</Checkbox>
              <Checkbox value="airConditioning">Air Conditioning</Checkbox>
              <Checkbox value="pool">Pool</Checkbox>
              <Checkbox value="gym">Gym</Checkbox>
              <Checkbox value="garden">Garden</Checkbox>
              <Checkbox value="garage">Garage</Checkbox>
            </CheckboxGroup>
          </VStack>
        </PopoverForm>
      </div>
    </>
  );
}

export default HomePage;
