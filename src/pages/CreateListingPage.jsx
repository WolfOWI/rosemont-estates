import React, { useState, useEffect } from "react";
import Navbar from "../components/navigation/Navbar";
import { createHouse } from "../services/houseService";
import AddressModal from "../components/overlays/AddressModal";

import {
  useRadioGroup,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  CheckboxGroup,
  Checkbox,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

import {
  AddHomeOutlined,
  CheckCircleOutlineOutlined,
  HouseOutlined,
  ImageOutlined,
  UploadFileOutlined,
  PaymentsOutlined,
  MeetingRoomOutlined,
  ParkOutlined,
  OtherHousesOutlined,
  DeleteForeverOutlined,
} from "@mui/icons-material";

import RadioCard from "../components/input/RadioCard";
import IconTextBlock from "../components/buildingblocks/IconTextBlock";

function CreateListingPage() {
  // Price Filtering
  // ------------------------------------------------
  const pricingOptions = ["For Sale", "To Rent"];
  const [selectedOption, setSelectedOption] = useState("For Sale");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "sellType",
    defaultValue: "For Sale",
    onChange: setSelectedOption,
  });

  const group = getRootProps();
  // ------------------------------------------------

  // Address Modal
  // ------------------------------------------------
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddressDone = (address) => {
    setFormData((prevData) => ({
      ...prevData,
      street: address.street,
      suburb: address.suburb,
      city: address.city,
      province: address.province,
      zip: address.zip,
    }));
    onClose();
  };
  // ------------------------------------------------

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    street: "",
    suburb: "",
    city: "",
    province: "",
    zip: "",
    style: "",
    availableDate: "",
    realEstateId: "",
    sellType: "For Sale",
    price: "",
    numFloors: 0,
    floorSize: 0,
    numBed: 0,
    numBath: 0,
    numKitchen: 0,
    numDining: 0,
    numGym: 0,
    numBilliard: 0,
    numBasement: 0,
    numGarage: 0,
    lotSize: 0,
    numPool: 0,
    numCourt: 0,
    numDeck: 0,
    numFlowerGard: 0,
    numVegGard: 0,
    numOrchard: 0,
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
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createHouse(formData);
      alert(response.message);
    } catch (error) {
      console.error("Failed to create house listing", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-8">
        <div className="w-[90%] flex flex-col">
          <Box as="form" w="full" onSubmit={handleSubmit}>
            {/* Top Section */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <AddHomeOutlined sx={{ fontSize: 80, color: "#C3BDAE" }} />
                <h2 className="mt-2 ml-4">New Property</h2>
              </div>
              <HStack>
                <Button
                  variant="thornOutline"
                  size="lg"
                  mt={4}
                  leftIcon={<DeleteForeverOutlined />}
                >
                  Clear
                </Button>
                <Button size="lg" mt={4} rightIcon={<CheckCircleOutlineOutlined />} type="submit">
                  Submit
                </Button>
              </HStack>
            </div>
            {/* Content */}
            <div className="flex justify-between mb-16">
              {/* Left */}
              <div className="flex flex-col w-[32%]">
                {/* Property Details */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <HouseOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Property Details</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                      <FormLabel>Title</FormLabel>
                      <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Address</FormLabel>
                      <Input
                        value={`${formData.street}, ${formData.suburb}, ${formData.city}, ${formData.province}, ${formData.zip}`}
                        onClick={onOpen}
                        readOnly
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>House Style</FormLabel>
                      <Select
                        placeholder="Select Style"
                        name="style"
                        value={formData.style}
                        onChange={handleChange}
                      >
                        <option value="colonial">American Colonial</option>
                        <option value="chateau">French Château</option>
                        <option value="gothic">Gothic</option>
                        <option value="villa">Italian Villa</option>
                        <option value="modern">Modern</option>
                        <option value="neoclassical">Neoclassical</option>
                        <option value="framed">Timber-Framed</option>
                        <option value="victorian">Victorian</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Available From</FormLabel>
                      <Input
                        type="date"
                        name="availableDate"
                        value={formData.availableDate}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Real Estate Agent</FormLabel>
                      <Select placeholder="Select Agency">
                        <option value="2">AIDA</option>
                        <option value="3">Engel and Völkers</option>
                        <option value="4">Pam Golding Properties</option>
                        <option value="5">Rawson</option>
                        <option value="6">RealNet</option>
                        <option value="7">RE/MAX South Africa</option>
                        <option value="8">Seeff</option>
                        <option value="9">Tsungai Holdings</option>
                      </Select>
                    </FormControl>
                  </VStack>
                </div>
                {/* Imagery */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl">
                  <HStack spacing={2} align="center" mb={2}>
                    <ImageOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Imagery</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                      <FormLabel>Images</FormLabel>
                      <Input />
                    </FormControl>
                    <Button size="lg" mt={4} leftIcon={<UploadFileOutlined />}>
                      Upload (Max 5)
                    </Button>
                  </VStack>
                </div>
              </div>
              {/* Middle */}
              <div className="flex flex-col w-[32%]">
                {/* Pricing */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <PaymentsOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Pricing</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <HStack {...group} spacing={4} width="100%">
                      {pricingOptions.map((value) => {
                        const radio = getRadioProps({ value });
                        return (
                          <RadioCard key={value} {...radio} flex="1">
                            {value}
                          </RadioCard>
                        );
                      })}
                    </HStack>
                    <FormControl isRequired>
                      <HStack spacing={4}>
                        <Input type="number" flex="1" placeholder="ZAR" />
                        {selectedOption === "To Rent" && <p className="text-sm">per month</p>}
                      </HStack>
                    </FormControl>
                  </VStack>
                </div>
                {/* Interior */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <MeetingRoomOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Interior</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                      <FormLabel>Total Floors</FormLabel>
                      <HStack spacing={4}>
                        <Input type="number" flex="1" />
                        <p className="text-sm">floor(s)</p>
                      </HStack>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Floor Size</FormLabel>
                      <HStack spacing={4}>
                        <Input type="number" flex="1" />
                        <p className="text-sm">square meters</p>
                      </HStack>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Rooms</FormLabel>
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
                  </VStack>
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-col w-[32%]">
                {/* Exterior */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <ParkOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Exterior</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                      <FormLabel>Lot Size</FormLabel>
                      <HStack spacing={4}>
                        <Input type="number" flex="1" />
                        <p className="text-sm">square meters</p>
                      </HStack>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Exterior Spaces</FormLabel>
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
                  </VStack>
                </div>
                {/* Features */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <OtherHousesOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Features</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                      <FormLabel>Interior</FormLabel>
                      <VStack align="start">
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
                        </CheckboxGroup>
                      </VStack>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Exterior</FormLabel>
                      <VStack align="start">
                        <CheckboxGroup>
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
                    </FormControl>
                  </VStack>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <AddressModal isOpen={isOpen} onClose={onClose} handleAddressDone={handleAddressDone} />
    </>
  );
}

export default CreateListingPage;
