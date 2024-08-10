import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  GiteOutlined,
  SellOutlined,
  CurrencyExchangeOutlined,
  LogoutOutlined,
  ShieldOutlined,
  WarningRounded,
} from "@mui/icons-material";
import rm_emblem from "../../assets/logos/rosemont_emblem.svg";

// Real Estate Beige Logos
import aidaLogoBeige from "../../assets/logos/agencyLogos/aidaLogoBeige.png";
import engelLogoBeige from "../../assets/logos/agencyLogos/engelLogoBeige.png";
import pamLogoBeige from "../../assets/logos/agencyLogos/pamLogoBeige.png";
import rawsonLogoBeige from "../../assets/logos/agencyLogos/rawsonLogoBeige.png";
import realnetLogoBeige from "../../assets/logos/agencyLogos/realnetLogoBeige.png";
import remaxLogoBeige from "../../assets/logos/agencyLogos/remaxLogoBeige.png";
import seeffLogoBeige from "../../assets/logos/agencyLogos/seeffLogoBeige.png";
import tsungaiLogoBeige from "../../assets/logos/agencyLogos/tsungaiLogoBeige.png";

// Real Estate Colour Logos
import aidaLogoColour from "../../assets/logos/agencyLogos/aidaLogoColour.png";
import engelLogoColour from "../../assets/logos/agencyLogos/engelLogoColour.png";
import pamLogoColour from "../../assets/logos/agencyLogos/pamLogoColour.png";
import rawsonLogoColour from "../../assets/logos/agencyLogos/rawsonLogoColour.png";
import realnetLogoColour from "../../assets/logos/agencyLogos/realnetLogoColour.png";
import remaxLogoColour from "../../assets/logos/agencyLogos/remaxLogoColour.png";
import seeffLogoColour from "../../assets/logos/agencyLogos/seeffLogoColour.png";
import tsungaiLogoColour from "../../assets/logos/agencyLogos/tsungaiLogoColour.png";
import adminLogoColour from "../../assets/logos/agencyLogos/adminLogoColour.png";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="fixed flex flex-col items-center justify-between bg-thorn-M1 w-64 px-4 pt-4 pb-8 h-full">
        <img src={rm_emblem} alt="rosemont emblem" className="w-[85%]" />
        <div className="flex flex-col items-start w-full mb-16">
          <Button
            as={Link}
            to="/admin-listings"
            variant="tertiaryBeige"
            leftIcon={<GiteOutlined />}
          >
            New Homes
          </Button>
          <Button as={Link} to="/admin-buyers" variant="tertiaryBeige" leftIcon={<SellOutlined />}>
            Buyers
          </Button>
          <Button
            as={Link}
            to="/admin-tenants"
            variant="tertiaryBeige"
            leftIcon={<CurrencyExchangeOutlined />}
          >
            Tenants
          </Button>
        </div>
        <div className="flex flex-col items-center w-full">
          {/* TODO Populate name based on logged in session */}
          <p className="text-beige-0 mb-2">Alex Anderson</p>
          {/* TODO Change agency based on logged in agent */}
          {/* <Button w="full" py={8} leftIcon={<ShieldOutlined />}>
            Admin
          </Button> */}
          {/* <Button w="full" py={8} leftIcon={<WarningRounded />}>
            No Agency
          </Button> */}
          <Button w="full" h="fit-content" py={4} onClick={onOpen}>
            <img src={rawsonLogoBeige} alt="estate agency logo" className="w-[80%]" />
          </Button>
          <Button w="full" variant="lightOutline" leftIcon={<LogoutOutlined />} mt={4}>
            Log Out
          </Button>
        </div>
      </div>
      {/* Real Estate Agency Picker Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Real Estate Agency </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <HStack>
                <Button h="fit-content" py={4} variant="lightFilled">
                  <img src={aidaLogoColour} alt="aida" className="w-[80%]" />
                </Button>
                <Button h="fit-content" py={4} variant="lightFilled">
                  <img src={engelLogoColour} alt="engel & volkers" className="w-[80%]" />
                </Button>
                <Button h="fit-content" py={4} variant="lightFilled">
                  <img src={pamLogoColour} alt="pam golding" className="w-[80%]" />
                </Button>
              </HStack>
              <HStack>
                <Button h="fit-content" py={4} variant="lightFilled">
                  <img src={rawsonLogoColour} alt="rawson" className="w-[80%]" />
                </Button>
                <Button h="fit-content" py={4} variant="lightFilled">
                  <img src={realnetLogoColour} alt="realnet" className="w-[80%]" />
                </Button>
                <Button h="fit-content" py={4} variant="lightFilled">
                  <img src={remaxLogoColour} alt="remax" className="w-[80%]" />
                </Button>
              </HStack>
              <HStack>
                <Button h="fit-content" py={4} variant="lightFilled">
                  <img src={seeffLogoColour} alt="seeff" className="w-[80%]" />
                </Button>
                <Button h="fit-content" py={4} variant="lightFilled">
                  <img src={tsungaiLogoColour} alt="tsungai united" className="w-[80%]" />
                </Button>
                <Button h="fit-content" py={4} variant="lightFilled">
                  <img src={adminLogoColour} alt="admin" className="w-[80%]" />
                </Button>
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Sidebar;
