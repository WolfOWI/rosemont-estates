// Customer Card (Potential Buyers & Tenants) - Admin Dashboard

// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect, useRef } from "react";

// Services
import { getAgencyById } from "../../services/agencyService";
import { fetchInterestedByHouseId } from "../../services/interestedService";

// Utility Functions
import { formatPrice } from "../../utils/formatPrice";
import logoMap from "../../utils/logoMap";

// Third-Party Components
import {
  Button,
  VStack,
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  EmailOutlined,
  SellOutlined,
  CurrencyExchangeOutlined,
  CloseOutlined,
  PhoneOutlined,
} from "@mui/icons-material";

// Internal Components
// -

// Imagery
// -

// -----------------------------------------------------------

function CustomerCard({ type, interest, onDismiss, onMark }) {
  // Confirmation Dialog Popup
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [agency, setAgency] = useState(null);

  const [numInterestInHouse, setNumInterestInHouse] = useState(0);

  // console.log(type);
  // console.log(interest);

  // When interest object is received, fetch agency & number of people interested in specific home (for alert dialog)
  useEffect(() => {
    const fetchAgency = async () => {
      try {
        const agencyData = await getAgencyById(interest.realEstateId);
        setAgency(agencyData);
      } catch (error) {
        console.error("Failed to fetch agency:", error);
      }
    };

    const getInterestedNumber = async () => {
      try {
        const numOfInterest = await fetchInterestedByHouseId(interest.houseId);
        setNumInterestInHouse(numOfInterest.length);
      } catch (error) {
        console.log("Failed to fetch length of interested:", error);
      }
    };

    getInterestedNumber();
    fetchAgency();
  }, [interest]);

  // Mark as Text (Mark as Sold or Rented)
  let markAsText = "";
  let markAsIcon = "";

  switch (type) {
    case "buyer":
      markAsText = "Mark as Sold";
      markAsIcon = <SellOutlined />;
      break;
    case "tenant":
      markAsText = "Mark as Rented";
      markAsIcon = <CurrencyExchangeOutlined />;
      break;
    default:
      markAsText = "Customer Type Invalid.";
      break;
  }

  return (
    <>
      <div className="flex justify-between bg-beige-0 p-4 rounded-3xl mb-4">
        {/* Left Side */}
        <div className="flex flex-col justify-between w-full mr-4">
          {/* Top Details */}
          <div className="flex justify-between">
            <VStack align="start" spacing={1}>
              <HStack spacing={8}>
                <h3 className="text-thorn-0">{interest.title}</h3>
                {agency ? (
                  <img src={logoMap[agency.logoColour]} alt="estate logo" className="w-16" />
                ) : (
                  <div>Loading</div>
                )}
              </HStack>
              <p className="font-bold">{`${interest.numBed} Bedroom ${interest.style} Mansion in ${interest.suburb}`}</p>
              <p>{`${interest.street}, ${interest.suburb}, ${interest.city}, ${interest.zip}`}</p>
              {interest.availabilityStatus === "available" ? (
                <p>Available Now</p>
              ) : (
                <p>Not Available</p>
              )}
            </VStack>
            <div className="flex flex-col items-center justify-center bg-beige-M1 px-8 rounded-2xl h-full">
              <p className="text-xl font-bold">{formatPrice(interest.price)}</p>
              <p className={type === "tenant" ? "block" : "hidden"}>monthly</p>
            </div>
          </div>
          {/* Bottom Contact Details */}
          <div className="flex items-center bg-beige-M1 p-4 rounded-2xl mt-4 w-full divide-x-2 divide-beige-M3">
            <h3 className="pe-6">{`${interest.firstName} ${interest.lastName}`}</h3>
            <HStack px={6}>
              <PhoneOutlined />
              <p>{interest.phone}</p>
            </HStack>
            <HStack px={6}>
              <EmailOutlined />
              <p>{interest.email}</p>
            </HStack>
          </div>
        </div>
        {/* Right Side (Buttons) */}
        <VStack minWidth="20%" justify="space-between">
          <Button
            as="a"
            href={`mailto:${interest.email}`}
            w="full"
            h={20}
            leftIcon={<EmailOutlined />}
          >
            Email {interest.firstName}
          </Button>
          <Button w="full" h={14} leftIcon={markAsIcon} variant="thornOutline" onClick={onOpen}>
            {markAsText}
          </Button>
          <Button
            w="full"
            h={14}
            leftIcon={<CloseOutlined />}
            variant="roseOutline"
            onClick={() => {
              onDismiss(interest.userId, interest.houseId);
            }}
          >
            Dismiss
          </Button>
        </VStack>
      </div>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {markAsText}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you would like to mark the {interest.title} property as{" "}
              {interest.sellType === "sell" ? "sold" : "rented"}? This will remove{" "}
              <span className="font-bold">
                {numInterestInHouse === 1 ? (
                  <>1 potential {interest.sellType === "sell" ? "buyer" : "tenant"}</>
                ) : (
                  <>
                    {numInterestInHouse} potential{" "}
                    {interest.sellType === "sell" ? "buyers" : "tenants"}
                  </>
                )}
              </span>{" "}
              from the list.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} variant="thornOutline">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  onMark(interest);
                  onClose();
                }}
                ml={3}
                variant="roseFilled"
              >
                {markAsText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default CustomerCard;
