import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";

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
import FeatureIconText from "../components/buildingblocks/FeatureIconText";
import RoomIconText from "../components/buildingblocks/RoomIconText";

function CreateListingPage() {
  const pricingOptions = ["For Sale", "To Rent"];
  const [selectedOption, setSelectedOption] = useState("For Sale");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "sellType",
    defaultValue: "For Sale",
    onChange: setSelectedOption,
  });

  const group = getRootProps();

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-8">
        <div className="w-[90%] flex flex-col">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <AddHomeOutlined sx={{ fontSize: 80, color: "#C3BDAE" }} />
              <h2 className="mt-2 ml-4">New Property</h2>
            </div>
            <HStack>
              <Button variant="colorOutline" size="lg" mt={4} leftIcon={<DeleteForeverOutlined />}>
                Clear
              </Button>
              <Button size="lg" mt={4} rightIcon={<CheckCircleOutlineOutlined />}>
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
                    <Input type="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Description</FormLabel>
                    <Textarea />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>House Style</FormLabel>
                    <Select placeholder="Select Style">
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
                    <Input type="date" />
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
                      </CheckboxGroup>
                    </VStack>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Exterior</FormLabel>
                    <VStack align="start">
                      <CheckboxGroup>
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
                  </FormControl>
                </VStack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateListingPage;
