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
  Stack,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

import { CheckOutlined, CloseOutlined } from "@mui/icons-material";

// TODO Temporary Image Placeholder (Delete later)
import tempImg from "../../assets/images/familyAtHome.jpg";

function PropertyAccordion({ property }) {
  return (
    <Accordion allowToggle bg="beige.P1" borderRadius="3xl" border="none">
      <AccordionItem border="none" p={4} mb={4}>
        {({ isExpanded }) => (
          <>
            <div className={`flex justify-between ${isExpanded ? "items-start" : "items-center"}`}>
              <HStack spacing={4} align="start" w="80%">
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
              <div className="w-[15%] flex flex-col items-start relative">
                <AccordionButton as={Button} rightIcon={<AccordionIcon />} w="full">
                  {isExpanded ? "Collapse" : "Expand"}
                </AccordionButton>
                <div
                  className={`w-full bg-green-500  absolute mt-16  ${
                    isExpanded ? "block" : "hidden"
                  }`}
                >
                  <h3>Features</h3>
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
            <AccordionPanel px={0}>
              <div className="flex w-full bg-beige-0 p-6">Total Floors</div>
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
                  <Text fontWeight="bold">Features</Text>
                  <Divider />
                  <SimpleGrid columns={2} spacing={4} mt={2}>
                    <Box>Internet Connection</Box>
                    <Box>Air Conditioning</Box>
                    <Box>Security System</Box>
                    {/* Add more features */}
                  </SimpleGrid>
                </VStack>
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
