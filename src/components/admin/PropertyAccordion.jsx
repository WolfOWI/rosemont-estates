import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Divider,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { CheckOutlined, CloseOutlined } from "@mui/icons-material";

// TODO Temporary Image Placeholder (Delete later)
import tempImg from "../../assets/images/familyAtHome.jpg";
import FeatureIconText from "../buildingblocks/FeatureIconText";
import RoomIconText from "../buildingblocks/RoomIconText";
import HomeInfoIconText from "../buildingblocks/HomeInfoIconText";

function PropertyAccordion({ property }) {
  return (
    <Accordion allowToggle bg="beige.P1" borderRadius="3xl">
      <AccordionItem border="none" p={4} mb={4}>
        {({ isExpanded }) => (
          <>
            {/* Accordion Head */}
            <div
              className={`flex justify-between ${
                isExpanded ? "items-start" : "items-center"
              } transition-all duration-250`}
            >
              {/* Basic Home Info */}
              <HStack spacing={4} align="start" w="70%">
                <img
                  src={tempImg}
                  alt="home"
                  className={`object-cover rounded-xl ${
                    isExpanded ? "w-84 h-64" : "w-24 h-24"
                  } transition-all duration-250`}
                />
                <VStack align="start" spacing={1}>
                  <h3>{property.title}</h3>
                  <HStack spacing={4}>
                    <p>{property.style}</p>
                    <p>Available: {property.availableDate}</p>
                  </HStack>
                  <p className="font-bold">{property.address}</p>
                  <p className={`${isExpanded ? "block" : "hidden"}`}>{property.description}</p>
                </VStack>
              </HStack>
              <div className="w-[25%] flex flex-col items-start relative">
                <AccordionButton
                  as={Button}
                  rightIcon={<AccordionIcon />}
                  _hover=""
                  w="full"
                  bg={isExpanded ? "beige.M3" : "thorn.0"}
                >
                  {isExpanded ? "Collapse" : "Expand"}
                </AccordionButton>

                <div
                  className={`w-full absolute mt-14 justify-between  ${
                    isExpanded ? "block" : "hidden"
                  }`}
                >
                  <div>
                    {/* Home Features */}
                    <div>
                      <h3 className="mb-2">Features</h3>
                      <VStack align="start">
                        <FeatureIconText type="internet" />
                        <FeatureIconText type="airCon" />
                        <FeatureIconText type="heating" />
                        <FeatureIconText type="secSys" />
                        <FeatureIconText type="solar" />
                        <FeatureIconText type="gardServ" />
                        <FeatureIconText type="irrigation" />
                        <FeatureIconText type="outdoorLight" />
                        <FeatureIconText type="boma" />
                        <FeatureIconText type="gatedCommunity" />
                      </VStack>
                    </div>
                    {/* Pricing */}
                    <div className="mb-2">
                      <h3 className="mt-5 mb-2">Pricing</h3>
                      <VStack>
                        <div className="flex justify-center w-full bg-beige-M1 rounded-2xl py-2">
                          <HomeInfoIconText type="toRent" />
                        </div>
                        <div className="flex justify-between items-center w-full bg-beige-M1 rounded-2xl p-4">
                          <p className="text-2xl">R64,500</p>
                          <p>per month</p>
                        </div>
                      </VStack>
                    </div>
                  </div>
                  <VStack>
                    <Button w="full" leftIcon={<CheckOutlined />}>
                      Approve
                    </Button>
                    <Button w="full" leftIcon={<CloseOutlined />} variant="colorOutline">
                      Decline
                    </Button>
                  </VStack>
                </div>
              </div>
            </div>
            {/* Accordion Content */}
            <AccordionPanel p={0} w="73%" transition="all">
              {/* Size Section */}
              <HStack bg="beige.M1" px={6} py={4} rounded="2xl" spacing={16} mt={4}>
                <HStack w="full" spacing={4}>
                  <p className="font-bold min-w-fit">Total Floors</p>
                  <div className="bg-beige-0 rounded-2xl p-2 w-full text-center">X</div>
                </HStack>
                <HStack w="full" spacing={4}>
                  <p className="font-bold min-w-fit">Floor Size</p>
                  <div className="bg-beige-0 rounded-2xl p-2 w-full text-center">
                    XX m<sup>2</sup>
                  </div>
                </HStack>
                <HStack w="full" spacing={4}>
                  <p className="font-bold min-w-fit">Lot Size</p>
                  <div className="bg-beige-0 rounded-2xl p-2 w-full text-center">
                    XX,XXX m<sup>2</sup>
                  </div>
                </HStack>
              </HStack>
              {/* Interior Section */}
              <VStack bg="beige.M1" px={6} py={4} rounded="2xl" mt={4} align="start">
                <h3 className="mb-2">Interior</h3>
                <Wrap spacingX={8} spacingY={4} pb={4}>
                  {/* Bedrooms */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="bed" />
                    </HStack>
                  </WrapItem>
                  {/* Bathrooms */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="bath" />
                    </HStack>
                  </WrapItem>
                  {/* Kitchens */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="kitchen" />
                    </HStack>
                  </WrapItem>
                  {/* Dining Rooms */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="dining" />
                    </HStack>
                  </WrapItem>
                  {/* Gymnasiums */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="gym" />
                    </HStack>
                  </WrapItem>
                  {/* Billiard Rooms */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="billiard" />
                    </HStack>
                  </WrapItem>
                  {/* Basements */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="basement" />
                    </HStack>
                  </WrapItem>
                  {/* Garages */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="garage" />
                    </HStack>
                  </WrapItem>
                </Wrap>
              </VStack>
              {/* Exterior Section */}
              <VStack bg="beige.M1" px={6} py={4} rounded="2xl" mt={4} align="start">
                <h3 className="mb-2">Exterior</h3>
                <Wrap spacingX={8} spacingY={4} pb={4}>
                  {/* Swimming Pools */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="pool" />
                    </HStack>
                  </WrapItem>
                  {/* Sports Courts */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="court" />
                    </HStack>
                  </WrapItem>
                  {/* Decks */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="deck" />
                    </HStack>
                  </WrapItem>
                  {/* Flower Gardens */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="flowerGard" />
                    </HStack>
                  </WrapItem>
                  {/* Veg Gardens */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="vegGard" />
                    </HStack>
                  </WrapItem>
                  {/* Orchards */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        X
                      </div>
                      <RoomIconText type="orchard" />
                    </HStack>
                  </WrapItem>
                </Wrap>
              </VStack>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default PropertyAccordion;
