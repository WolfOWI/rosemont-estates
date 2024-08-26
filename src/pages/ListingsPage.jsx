// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useEffect, useState } from "react";

// Services
import { fetchAllHouses } from "../services/houseService";

// Utility Functions
import { filterHousesByPrice, filterHousesByRooms } from "../utils/houseFiltering";
import { millionify } from "../utils/millionify";

// Third-Party Components
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

// Internal Components
import Navbar from "../components/navigation/Navbar";
import SearchBar from "../components/input/SearchBar";
import PopoverForm from "../components/input/PopoverForm";
import IconTextBlock from "../components/buildingblocks/IconTextBlock";
import ListingHouseCard from "../components/house/ListingHouseCard";

// Imagery
// -

// -----------------------------------------------------------

function ListingsPage() {
  // Filtering States
  //    Price
  const [priceRangeFilt, setPriceRangeFilt] = useState([0, 150]);
  const [isFiltPrice, setIsFiltPrice] = useState(false);

  //    Interior
  const [intFilt, setIntFilt] = useState({
    bed: 0,
    bath: 0,
    kitchen: 0,
    dining: 0,
    gym: 0,
    billiard: 0,
    basement: 0,
    garage: 0,
  });
  const [isFiltInt, setIsFiltInt] = useState(false);

  // Houses
  const [houses, setHouses] = useState([]); // All Houses (default unfiltered)
  const [filtHouses, setFiltHouses] = useState([]); // Filtered Houses

  // On Page Load
  useEffect(() => {
    async function loadHouses() {
      try {
        const response = await fetchAllHouses();
        setHouses(response);
        setFiltHouses(response);
      } catch (error) {
        console.log("Error fetching houses: ", error);
      }
    }

    loadHouses();
  }, []);

  // useEffect(() => {
  //   console.log("Filtered Houses:");
  //   console.log(filtHouses);
  // }, [filtHouses]);

  // PRICE FILTERING
  // ----------------------------------------------------
  // Inputs
  // - - - - - - - - - - - - - - - - - - - -
  const handleSliderChange = (value) => {
    setPriceRangeFilt(value);
    if (value[0] === 0 && value[1] === 150) {
      setIsFiltPrice(false);
    } else {
      setIsFiltPrice(true);
    }
  };

  const handleMinInputChange = (valueString) => {
    const value = parseInt(valueString);
    setPriceRangeFilt([value, priceRangeFilt[1]]);
  };

  const handleMaxInputChange = (valueString) => {
    const value = parseInt(valueString);
    setPriceRangeFilt([priceRangeFilt[0], value]);
  };
  // - - - - - - - - - - - - - - - - - - - -

  // Buttons
  // - - - - - - - - - - - - - - - - - - - -
  // Handle Reset Button (Price)
  const handlePriceFilterReset = () => {
    console.log("Resetting Price Filter");
    setPriceRangeFilt([0, 150]); // Reset to default
    setIsFiltPrice(false);
  };
  // - - - - - - - - - - - - - - - - - - - -
  // ----------------------------------------------------

  // INTERIOR FILTERING
  // ----------------------------------------------------
  // Handle Interior Inputs
  // - - - - - - - - - - - - - - - - - - - -
  const handleInteriorInputChange = (e) => {
    const { name, value } = e.target;
    setIntFilt({ ...intFilt, [name]: parseInt(value) });
  };
  // - - - - - - - - - - - - - - - - - - - -
  useEffect(() => {
    // Check if all interior form values are 0
    const allValuesZero = Object.values(intFilt).every((value) => value === 0);
    if (allValuesZero) {
      console.log("Setting isFiltInt to false");
      setIsFiltInt(false);
    } else {
      console.log("Setting isFiltInt to true");
      setIsFiltInt(true);
    }
    console.log(intFilt);
  }, [intFilt]);
  // ----------------------------------------------------

  // FILTERING
  // ----------------------------------------------------
  useEffect(() => {
    const filterHouses = () => {
      let houseArr = houses;

      // Stage 1: Price Filtering
      if (isFiltPrice) {
        console.log("Stage 1: Filtering by Price");
        houseArr = filterHousesByPrice(
          houseArr,
          millionify(priceRangeFilt[0]),
          millionify(priceRangeFilt[1])
        );
        console.log(houseArr);
      }

      // Stage 2: Interior Filtering
      if (isFiltInt) {
        console.log("Stage 2: Filtering by Interior");
        houseArr = filterHousesByRooms(houseArr, intFilt);
      }

      setFiltHouses(houseArr);
    };

    filterHouses();
  }, [houses, isFiltPrice, priceRangeFilt, isFiltInt, intFilt]);

  // ----------------------------------------------------

  return (
    <>
      <div className="bg-beige-0 w-full min-h-screen">
        <Navbar />
        <div className="mt-8 mx-4 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96">
          <SearchBar />
          {/* Filters */}
          <HStack my={2}>
            {/* Price Filtering */}
            <PopoverForm
              label="Price"
              icon={<PriceCheckOutlined />}
              title="Price Filter"
              isActive={isFiltPrice}
              resetFilter={handlePriceFilterReset}
            >
              <FormControl>
                <RangeSlider
                  defaultValue={[0, 150]}
                  min={0}
                  max={150}
                  step={1}
                  value={priceRangeFilt}
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
                      value={priceRangeFilt[0]}
                      min={0}
                      max={priceRangeFilt[1]}
                      onChange={handleMinInputChange}
                      type="number"
                    ></Input>
                    {/* TODO Text Input Not Working */}
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
                      value={priceRangeFilt[1]}
                      min={priceRangeFilt[0]}
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
            <PopoverForm label="Interior" icon={<BedOutlined />} title="Minimum # of Rooms">
              <FormControl>
                <VStack align="start">
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="bed"
                      value={intFilt.bed}
                      onChange={handleInteriorInputChange}
                    />
                    <IconTextBlock type="bed" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="bath"
                      value={intFilt.bath}
                      onChange={handleInteriorInputChange}
                    />
                    <IconTextBlock type="bath" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="kitchen"
                      value={intFilt.kitchen}
                      onChange={handleInteriorInputChange}
                    />
                    <IconTextBlock type="kitchen" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="dining"
                      value={intFilt.dining}
                      onChange={handleInteriorInputChange}
                    />
                    <IconTextBlock type="dining" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="gym"
                      value={intFilt.gym}
                      onChange={handleInteriorInputChange}
                    />
                    <IconTextBlock type="gym" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="billiard"
                      value={intFilt.billiard}
                      onChange={handleInteriorInputChange}
                    />
                    <IconTextBlock type="billiard" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="basement"
                      value={intFilt.basement}
                      onChange={handleInteriorInputChange}
                    />
                    <IconTextBlock type="basement" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="garage"
                      value={intFilt.garage}
                      onChange={handleInteriorInputChange}
                    />
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
            {filtHouses.map((house) => (
              <ListingHouseCard key={house.houseId} house={house} />
            ))}
          </VStack>
        </div>
      </div>
    </>
  );
}

export default ListingsPage;
