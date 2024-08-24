// Customer Card (Potential Buyers & Tenants) - Admin Dashboard

// IMPORT
// -----------------------------------------------------------
// React & Hooks
// -

// Services
// -

// Utility Functions
// -

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

function CustomerCard({ type }) {
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
              <h3 className="text-thorn-0">Elegant French Chateux</h3>
              <p className="font-bold">7 Bedroom French Classic Mansion in Silver Lakes</p>
              <p>15 Alexson Street, Silver Lakes, Pretoria, 0543</p>
              <p>Available Now</p>
            </VStack>
            <div className="flex flex-col items-center justify-center bg-beige-M1 px-8 rounded-2xl h-full">
              <p className="text-xl font-bold">R4,500,000</p>
              <p className={type === "tenant" ? "block" : "hidden"}>monthly</p>
            </div>
          </div>
          {/* Bottom Contact Details */}
          <div className="flex items-center bg-beige-M1 p-4 rounded-2xl mt-4 w-full divide-x-2 divide-beige-M3">
            <h3 className="pe-6">Carl Matthews</h3>
            <HStack px={6}>
              <PhoneOutlined />
              <p>012 345 6789</p>
            </HStack>
            <HStack px={6}>
              <EmailOutlined />
              <p>carlmath@gmail.com</p>
            </HStack>
          </div>
        </div>
        {/* Right Side (Buttons) */}
        <VStack minWidth="20%" justify="space-between">
          <Button w="full" h={20} leftIcon={<EmailOutlined />}>
            Email Customer
          </Button>
          <Button w="full" h={14} leftIcon={markAsIcon} variant="thornOutline">
            {markAsText}
          </Button>
          <Button w="full" h={14} leftIcon={<CloseOutlined />} variant="thornOutline">
            Dismiss
          </Button>
        </VStack>
      </div>
    </>
  );
}

export default CustomerCard;
