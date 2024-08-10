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
} from "@chakra-ui/react";

import { CheckOutlined, CloseOutlined } from "@mui/icons-material";

// TODO Temporary Image Placeholder (Delete later)
import tempImg from "../../assets/images/familyAtHome.jpg";
import FeatureIconText from "../buildingblocks/FeatureIconText";

function PropertyAccordion({ property }) {
  return (
    <Accordion allowToggle bg="beige.P1" borderRadius="3xl" border="none">
      <AccordionItem border="none" p={4} mb={4}>
        {({ isExpanded }) => (
          <>
            <div className={`flex justify-between ${isExpanded ? "items-start" : "items-center"}`}>
              <HStack spacing={4} align="start" w="70%">
                <img
                  src={tempImg}
                  alt="home"
                  className={`w-40 h-40 object-cover rounded-xl ${isExpanded ? "block" : "hidden"}`}
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
                <AccordionButton as={Button} rightIcon={<AccordionIcon />} _hover="" w="full">
                  {isExpanded ? "Collapse" : "Expand"}
                </AccordionButton>
                <div className={`w-full absolute mt-16  ${isExpanded ? "block" : "hidden"}`}>
                  <h3>Features</h3>
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
            <AccordionPanel px={0} w="70%">
              <div className="flex w-full bg-beige-M1 p-6 rounded-xl">Total Floors</div>
              <Box>
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <Text fontWeight="bold">Interior</Text>
                    <Divider />
                    <SimpleGrid columns={3} spacing={4} mt={2}>
                      <Box>Bedrooms: {property.bedrooms}</Box>
                      <Box>Bathrooms: {property.bathrooms}</Box>
                      <Box>Kitchens: {property.kitchens}</Box>
                      {/* Add more interior details */}
                    </SimpleGrid>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Exterior</Text>
                    <Divider />
                    <SimpleGrid columns={3} spacing={4} mt={2}>
                      <Box>Swimming Pools: {property.swimmingPools}</Box>
                      <Box>Sports Courts: {property.sportsCourts}</Box>
                      {/* Add more exterior details */}
                    </SimpleGrid>
                  </Box>
                </SimpleGrid>

                <VStack mt={4} align="start">
                  <Text fontWeight="bold">Pricing</Text>
                  <Divider />
                  <Box>To Rent: {property.rentPrice}</Box>
                  <Box>Per Month: {property.perMonth}</Box>
                </VStack>
              </Box>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default PropertyAccordion;
