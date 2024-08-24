// Customer Card (Potential Buyers & Tenants) - Admin Dashboard

// IMPORT
// -----------------------------------------------------------
// React & Hooks
// -

// Services
// -

// Utility Functions
import { formatPrice } from "../../utils/formatPrice";

// Third-Party Components
import { Button, VStack, HStack } from "@chakra-ui/react";
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

function CustomerCard({ type, interest }) {
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
              <h3 className="text-thorn-0">{interest.title}</h3>
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
          <Button w="full" h={20} leftIcon={<EmailOutlined />}>
            Email {interest.firstName}
          </Button>
          <Button w="full" h={14} leftIcon={markAsIcon} variant="thornOutline">
            {markAsText}
          </Button>
          <Button w="full" h={14} leftIcon={<CloseOutlined />} variant="roseOutline">
            Dismiss
          </Button>
        </VStack>
      </div>
    </>
  );
}

export default CustomerCard;
