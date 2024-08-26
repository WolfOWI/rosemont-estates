// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useEffect, useState } from "react";

// Services
import { fetchAllApprovedHouses } from "../services/houseService";

// Utility Functions
import {
  filterHousesByLocationSearch,
  filterHousesBySellType,
  filterHousesByPrice,
  filterHousesByRooms,
  filterHousesByOutdoors,
  filterHousesByFeatures,
} from "../utils/houseFiltering";
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
  // FILTERING STATES
  // -----------------------------------------------------------

  // Location Text Search
  const [locSearchFilt, setLocSearchFilt] = useState("");
  const [isFiltLocSearch, setIsFiltLocSearch] = useState(false);

  // SellType
  const [sellTypeFilt, setSellTypeFilt] = useState("");

  // Price
  const [priceRangeFilt, setPriceRangeFilt] = useState([0, 150]);
  const [isFiltPrice, setIsFiltPrice] = useState(false);

  // Interior
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

  // Exterior
  const [extFilt, setExtFilt] = useState({
    pool: 0,
    court: 0,
    deck: 0,
    flowerGard: 0,
    vegGard: 0,
    orchard: 0,
  });
  const [isFiltExt, setIsFiltExt] = useState(false);

  // House Features
  const [featFilt, setFeatFilt] = useState({
    internet: false,
    airCon: false,
    heating: false,
    secSys: false,
    solar: false,
    gardServ: false,
    irrigation: false,
    outdoorLight: false,
    boma: false,
    gatedCommunity: false,
  });
  const [isFiltFeat, setIsFiltFeat] = useState(false);
  // -----------------------------------------------------------

  // House Listings States
  const [houses, setHouses] = useState([]); // All Houses (default unfiltered)
  const [filtHouses, setFiltHouses] = useState([]); // Filtered Houses

  // On Page Load, fetch all houses with approved status
  useEffect(() => {
    async function loadHouses() {
      try {
        const approvedHouses = await fetchAllApprovedHouses();
        setHouses(approvedHouses);
        setFiltHouses(approvedHouses);
      } catch (error) {
        console.log("Error fetching houses: ", error);
      }
    }

    loadHouses();
  }, []);

  // LOCATION SEARCH FILTERING
  // ----------------------------------------------------
  const handleSearchInputChange = (input) => {
    setLocSearchFilt(input);
  };

  // Search Bar Submit
  // const handleSearchSubmit = () => {
  //   console.log("Search Submit Clicked");
  //   console.log(locSearchFilt);
  // };

  useEffect(() => {
    if (locSearchFilt === "") {
      // console.log("locSearchFilt is empty");
      setIsFiltLocSearch(false);
    } else {
      setIsFiltLocSearch(true);
    }
    // console.log(locSearchFilt);
  }, [locSearchFilt]);
  // ----------------------------------------------------

  // PRICE FILTERING
  // ----------------------------------------------------
  // Slider Input
  const handleSliderChange = (value) => {
    setPriceRangeFilt(value);
  };

  // Minimum Price Text Input
  const handleMinInputChange = (valueString) => {
    const value = parseInt(valueString);
    setPriceRangeFilt([value, priceRangeFilt[1]]);
  };

  // Maximum Price Text Input
  const handleMaxInputChange = (valueString) => {
    const value = parseInt(valueString);
    setPriceRangeFilt([priceRangeFilt[0], value]);
  };

  // On priceFilter changes, set filter ON/OFF states
  useEffect(() => {
    if (priceRangeFilt[0] === 0 && priceRangeFilt[1] === 150) {
      setIsFiltPrice(false);
    } else {
      setIsFiltPrice(true);
    }
  }, [priceRangeFilt]);

  // Handle Reset Button (Price)
  const handlePriceFilterReset = () => {
    console.log("Resetting Price Filter");
    setPriceRangeFilt([0, 150]); // Reset to default
    setIsFiltPrice(false);
  };
  // ----------------------------------------------------

  // INTERIOR FILTERING
  // ----------------------------------------------------
  // Handle Interior Inputs
  const handleInteriorInputChange = (e) => {
    const { name, value } = e.target;
    setIntFilt({ ...intFilt, [name]: parseInt(value) });
  };

  // On interiorFilter changes, set filter ON/OFF states
  useEffect(() => {
    // Check if all interior form values are 0
    const allValuesZero = Object.values(intFilt).every((value) => value === 0);
    if (allValuesZero) {
      // console.log("Setting isFiltInt to false");
      setIsFiltInt(false);
    } else {
      // console.log("Setting isFiltInt to true");
      setIsFiltInt(true);
    }
  }, [intFilt]);

  // Handle Reset Button (Interior)
  const handleIntFilterReset = () => {
    console.log("Resetting Interior Filter");
    setIntFilt({
      bed: 0,
      bath: 0,
      kitchen: 0,
      dining: 0,
      gym: 0,
      billiard: 0,
      basement: 0,
      garage: 0,
    });
  };
  // ----------------------------------------------------

  // EXTERIOR FILTERING
  // ----------------------------------------------------
  // Handle Exterior Field Inputs
  const handleExteriorInputChange = (e) => {
    const { name, value } = e.target;
    setExtFilt({ ...extFilt, [name]: parseInt(value) });
  };

  // On exterior filter changes, set filter ON/OFF states
  useEffect(() => {
    // Check if all interior object values are 0
    const allValuesZero = Object.values(extFilt).every((value) => value === 0);
    if (allValuesZero) {
      setIsFiltExt(false);
    } else {
      setIsFiltExt(true);
    }
  }, [extFilt]);

  // Handle Reset Button (Exterior)
  const handleExtFilterReset = () => {
    console.log("Resetting Exterior Filter");
    setExtFilt({
      pool: 0,
      court: 0,
      deck: 0,
      flowerGard: 0,
      vegGard: 0,
      orchard: 0,
    });
  };
  // ----------------------------------------------------

  // FEATURE FILTERING
  // ----------------------------------------------------
  // Handle feature checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFeatFilt((prevData) => ({ ...prevData, [name]: checked }));
  };

  // On exterior filter changes, set filter ON/OFF states
  useEffect(() => {
    // console.log(featFilt);
    // Check if all feature object values are 0
    const allValuesZero = Object.values(featFilt).every((value) => value === false);
    if (allValuesZero) {
      // console.log("setting isFiltFeat to false");
      setIsFiltFeat(false);
    } else {
      // console.log("setting isFiltFeat to true");
      setIsFiltFeat(true);
    }
  }, [featFilt]);

  // Handle Reset Button (Exterior)
  const handleFeatFilterReset = () => {
    console.log("Resetting Feature Filter");
    setFeatFilt({
      internet: false,
      airCon: false,
      heating: false,
      secSys: false,
      solar: false,
      gardServ: false,
      irrigation: false,
      outdoorLight: false,
      boma: false,
      gatedCommunity: false,
    });
  };
  // ----------------------------------------------------

  // OVERALL FILTERING
  // ----------------------------------------------------
  useEffect(() => {
    const filterHouses = () => {
      let houseArr = houses;

      // Stage 1A: Location Filtering
      if (isFiltLocSearch) {
        console.log("Stage 1A: Filtering by Location");
        houseArr = filterHousesByLocationSearch(houseArr, locSearchFilt);
      }

      // Stage 2: Price Filtering
      if (isFiltPrice) {
        console.log("Stage 2: Filtering by Price");
        houseArr = filterHousesByPrice(
          houseArr,
          millionify(priceRangeFilt[0]),
          millionify(priceRangeFilt[1])
        );
      }

      // Stage 3: Interior Filtering
      if (isFiltInt) {
        console.log("Stage 3: Filtering by Interior");
        houseArr = filterHousesByRooms(houseArr, intFilt);
      }

      // Stage 4: Exterior Filtering
      if (isFiltExt) {
        houseArr = filterHousesByOutdoors(houseArr, extFilt);
        console.log("Stage 4: Filtering by Exterior");
      }

      // Stage 5: Features Filtering
      if (isFiltFeat) {
        houseArr = filterHousesByFeatures(houseArr, featFilt);
        console.log("Stage 5: Filtering by Features");
      }

      setFiltHouses(houseArr);
    };

    filterHouses();
  }, [
    houses,
    locSearchFilt,
    priceRangeFilt,
    intFilt,
    extFilt,
    featFilt,
    isFiltLocSearch,
    isFiltPrice,
    isFiltInt,
    isFiltExt,
    isFiltFeat,
  ]);
  // ----------------------------------------------------

  // useEffect(() => {
  //   console.log("Houses");
  //   houses.forEach((house) => {
  //     console.log(house.title);
  //   });
  // }, [houses]);

  return (
    <>
      <div className="bg-beige-0 w-full min-h-screen">
        <Navbar />
        <div className="mt-8 mx-4 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96">
          <SearchBar searchChange={handleSearchInputChange} />
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
            <PopoverForm
              label="Interior"
              icon={<BedOutlined />}
              title="Minimum Rooms"
              isActive={isFiltInt}
              resetFilter={handleIntFilterReset}
            >
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
            <PopoverForm
              label="Exterior"
              icon={<HouseOutlined />}
              title="Minimum Outdoor Areas"
              isActive={isFiltExt}
              resetFilter={handleExtFilterReset}
            >
              <FormControl>
                <VStack align="start">
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="pool"
                      value={extFilt.pool}
                      onChange={handleExteriorInputChange}
                    />
                    <IconTextBlock type="pool" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="court"
                      value={extFilt.court}
                      onChange={handleExteriorInputChange}
                    />
                    <IconTextBlock type="court" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="deck"
                      value={extFilt.deck}
                      onChange={handleExteriorInputChange}
                    />
                    <IconTextBlock type="deck" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="flowerGard"
                      value={extFilt.flowerGard}
                      onChange={handleExteriorInputChange}
                    />
                    <IconTextBlock type="flowerGard" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="vegGard"
                      value={extFilt.vegGard}
                      onChange={handleExteriorInputChange}
                    />
                    <IconTextBlock type="vegGard" />
                  </HStack>
                  <HStack>
                    <Input
                      type="number"
                      w={10}
                      p={0}
                      textAlign="center"
                      name="orchard"
                      value={extFilt.orchard}
                      onChange={handleExteriorInputChange}
                    />
                    <IconTextBlock type="orchard" />
                  </HStack>
                </VStack>
              </FormControl>
            </PopoverForm>

            {/* Features Filter */}
            <PopoverForm
              label="Features"
              icon={<StarOutline />}
              title="Include"
              isActive={isFiltFeat}
              resetFilter={handleFeatFilterReset}
            >
              <VStack align="start" mb={4}>
                <CheckboxGroup>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="internet" />
                    <Checkbox
                      name="internet"
                      isChecked={featFilt.internet}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="airCon" />
                    <Checkbox
                      name="airCon"
                      isChecked={featFilt.airCon}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="heating" />
                    <Checkbox
                      name="heating"
                      isChecked={featFilt.heating}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="secSys" />
                    <Checkbox
                      name="secSys"
                      isChecked={featFilt.secSys}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="solar" />
                    <Checkbox
                      name="solar"
                      isChecked={featFilt.solar}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="gardServ" />
                    <Checkbox
                      name="gardServ"
                      isChecked={featFilt.gardServ}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="irrigation" />
                    <Checkbox
                      name="irrigation"
                      isChecked={featFilt.irrigation}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="outdoorLight" />
                    <Checkbox
                      name="outdoorLight"
                      isChecked={featFilt.outdoorLight}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="boma" />
                    <Checkbox
                      name="boma"
                      isChecked={featFilt.boma}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <IconTextBlock type="gatedCommunity" />
                    <Checkbox
                      name="gatedCommunity"
                      isChecked={featFilt.gatedCommunity}
                      onChange={handleCheckboxChange}
                    ></Checkbox>
                  </div>
                </CheckboxGroup>
              </VStack>
            </PopoverForm>
          </HStack>
          {filtHouses.length > 0 ? (
            <>
              <div className="w-full flex justify-end px-5 mt-8 mb-2">
                <h4 className="text-beige-M3">
                  {filtHouses.length} Home{filtHouses.length > 1 ? "s" : ""} Found
                </h4>
              </div>
            </>
          ) : (
            <>
              {/* TODO Add No Homes Found Image */}
              <div className="flex flex-col text-center w-full mt-20">
                <h3 className="text-warmgray-600">No Homes Found.</h3>
                <p>Please reset your filters and try again.</p>
              </div>
            </>
          )}

          {/* Homes List */}
          <VStack w="full" spacing={4}>
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
