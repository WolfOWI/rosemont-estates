// IMPORT
// -----------------------------------------------------------
// React & Hooks
import React from "react";
import { useState, useEffect } from "react";

// Services
import { getPrimaryImageByHouseId } from "../../services/houseService";
import { updateSubmissionByHouseId } from "../../services/submissionService";
import { getAgencyById } from "../../services/agencyService";

// Utility Functions
import { formatPrice } from "../../utils/formatPrice";
import { dateNow } from "../../utils/getDateNow";
import logoMap from "../../utils/logoMap";

// Third-Party Components
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  WifiOutlined,
  AcUnitOutlined,
  LocalFireDepartmentOutlined,
  VideocamOutlined,
  SolarPowerOutlined,
  YardOutlined,
  WaterDropOutlined,
  WbTwilightOutlined,
  OutdoorGrillOutlined,
  FenceOutlined,
  ErrorOutline,
  FavoriteOutlined,
  FavoriteBorderOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@mui/icons-material";

// Internal Components
import IconTextBlock from "../buildingblocks/IconTextBlock";

// Imagery
import missingImg from "../../assets/images/missingImg.png";

// -----------------------------------------------------------

function PropertyAccordion({ house, onDecision }) {
  const [agency, setAgency] = useState(null);
  const [primaryImage, setPrimaryImage] = useState(null);

  // When house.id changes/received, get the primaryImage & agency
  useEffect(() => {
    const fetchPrimaryImage = async () => {
      const response = await getPrimaryImageByHouseId(house.houseId);
      setPrimaryImage(response.imagePath);
    };

    async function fetchAgency() {
      try {
        const agencyData = await getAgencyById(house.realEstateId);
        setAgency(agencyData);
      } catch (error) {
        console.error("Failed to fetch agency:", error);
      }
    }
    fetchPrimaryImage();
    fetchAgency();
  }, [house.houseId, house.realEstateId]);

  const handleDecisionClick = async (decicion) => {
    try {
      console.log("Handling Decision Click");
      await updateSubmissionByHouseId(house.houseId, {
        submitStatus: decicion,
        decisionDate: dateNow(),
      });

      onDecision(house.houseId); // Notify parent to refresh homes.
    } catch (error) {
      console.log("Failed to update the submission: ", error);
    }
  };

  return (
    <Accordion allowToggle bg="beige.0" borderRadius="3xl">
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
                  src={primaryImage ? primaryImage : missingImg}
                  alt="home"
                  className={`object-cover rounded-xl ${
                    isExpanded ? "w-84 h-64" : "w-24 h-24"
                  } transition-all duration-250`}
                />
                <VStack align="start" spacing={1}>
                  <h3 className="text-thorn-0">{house.title}</h3>
                  <HStack spacing={4}>
                    <p>{house.style}</p>
                    <p>Available: {house.availableDate}</p>
                  </HStack>
                  {agency ? (
                    <img src={logoMap[agency.logoColour]} alt="estate logo" className="w-16" />
                  ) : (
                    <div>Loading</div>
                  )}
                  <p className="font-bold">{house.address}</p>
                  <p className={`${isExpanded ? "block" : "hidden"}`}>{house.description}</p>
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
                        {parseInt(house.internet) && <IconTextBlock type="internet" />}
                        {parseInt(house.airCon) && <IconTextBlock type="airCon" />}
                        {parseInt(house.heating) && <IconTextBlock type="heating" />}
                        {parseInt(house.secSys) && <IconTextBlock type="secSys" />}
                        {parseInt(house.solar) && <IconTextBlock type="solar" />}
                        {parseInt(house.gardServ) && <IconTextBlock type="gardServ" />}
                        {parseInt(house.irrigation) && <IconTextBlock type="irrigation" />}
                        {parseInt(house.outdoorLight) && <IconTextBlock type="outdoorLight" />}
                        {parseInt(house.boma) && <IconTextBlock type="boma" />}
                        {parseInt(house.gatedCommunity) && <IconTextBlock type="gatedCommunity" />}
                      </VStack>
                    </div>
                    {/* Pricing */}
                    <div className="mb-2">
                      <h3 className="mt-5 mb-2">Pricing</h3>
                      <VStack>
                        <div className="flex justify-center w-full bg-beige-M1 rounded-2xl py-2">
                          {house.sellType === "sell" ? (
                            <IconTextBlock type="forSale" />
                          ) : (
                            <IconTextBlock type="toRent" />
                          )}
                        </div>
                        {house.sellType === "sell" ? (
                          <>
                            <div className="flex justify-center items-center w-full bg-beige-M1 rounded-2xl p-4">
                              <p className="text-2xl">{formatPrice(house.price)}</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-between items-center w-full bg-beige-M1 rounded-2xl p-4">
                              <p className="text-2xl">{formatPrice(house.price)}</p>
                              <p>per month</p>
                            </div>
                          </>
                        )}
                      </VStack>
                    </div>
                  </div>
                  <VStack>
                    <Button
                      w="full"
                      leftIcon={<CheckOutlined />}
                      onClick={() => handleDecisionClick("approved")}
                    >
                      Approve
                    </Button>
                    <Button
                      w="full"
                      leftIcon={<CloseOutlined />}
                      variant="thornOutline"
                      onClick={() => handleDecisionClick("rejected")}
                    >
                      Reject
                    </Button>
                  </VStack>
                </div>
              </div>
            </div>
            {/* Accordion Content */}
            <AccordionPanel p={0} w="73%" transition="all">
              {/* Size Section */}
              <HStack bg="beige.M1" px={6} py={4} rounded="2xl" spacing={4} mt={4}>
                <HStack w="full" spacing={4}>
                  <p className="font-bold min-w-fit">Total Floors</p>
                  <div className="bg-beige-0 rounded-2xl p-2 w-full text-center">
                    {house.numFloors}
                  </div>
                </HStack>
                <HStack w="full" spacing={4}>
                  <p className="font-bold min-w-fit">Floor Size</p>
                  <div className="bg-beige-0 rounded-2xl p-2 w-full text-center">
                    {house.floorSize} m<sup>2</sup>
                  </div>
                </HStack>
                <HStack w="full" spacing={4}>
                  <p className="font-bold min-w-fit">Lot Size</p>
                  <div className="bg-beige-0 rounded-2xl p-2 w-full text-center">
                    {house.lotSize} m<sup>2</sup>
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
                        {house.numBed}
                      </div>
                      <IconTextBlock type="bed" />
                    </HStack>
                  </WrapItem>
                  {/* Bathrooms */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numBath}
                      </div>
                      <IconTextBlock type="bath" />
                    </HStack>
                  </WrapItem>
                  {/* Kitchens */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numKitchen}
                      </div>
                      <IconTextBlock type="kitchen" />
                    </HStack>
                  </WrapItem>
                  {/* Dining Rooms */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numDining}
                      </div>
                      <IconTextBlock type="dining" />
                    </HStack>
                  </WrapItem>
                  {/* Gymnasiums */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numGym}
                      </div>
                      <IconTextBlock type="gym" />
                    </HStack>
                  </WrapItem>
                  {/* Billiard Rooms */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numBilliard}
                      </div>
                      <IconTextBlock type="billiard" />
                    </HStack>
                  </WrapItem>
                  {/* Basements */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numBasement}
                      </div>
                      <IconTextBlock type="basement" />
                    </HStack>
                  </WrapItem>
                  {/* Garages */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numGarage}
                      </div>
                      <IconTextBlock type="garage" />
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
                        {house.numPool}
                      </div>
                      <IconTextBlock type="pool" />
                    </HStack>
                  </WrapItem>
                  {/* Sports Courts */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numCourt}
                      </div>
                      <IconTextBlock type="court" />
                    </HStack>
                  </WrapItem>
                  {/* Decks */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numDeck}
                      </div>
                      <IconTextBlock type="deck" />
                    </HStack>
                  </WrapItem>
                  {/* Flower Gardens */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numFlowerGard}
                      </div>
                      <IconTextBlock type="flowerGard" />
                    </HStack>
                  </WrapItem>
                  {/* Veg Gardens */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numVegGard}
                      </div>
                      <IconTextBlock type="vegGard" />
                    </HStack>
                  </WrapItem>
                  {/* Orchards */}
                  <WrapItem w="14em">
                    <HStack spacing={2}>
                      <div className="flex justify-center items-center bg-beige-0 rounded-full w-10 h-10">
                        {house.numOrchard}
                      </div>
                      <IconTextBlock type="orchard" />
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
