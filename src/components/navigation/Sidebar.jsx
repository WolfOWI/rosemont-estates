// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Services
import { getAgencyById } from "../../services/agencyService";
import { getSession } from "../../services/authService";
import { updateAgent } from "../../services/agentService";

// Utility Functions
import logoMap from "../../utils/logoMap";

// Third-Party Components
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

// Internal Components
// -

// Imagery
import rm_emblem from "../../assets/logos/rosemont_emblem.svg";
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
// -----------------------------------------------------------

function Sidebar({ realEstateChange }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Logged in user
  const [user, setUser] = useState(null);
  // User's Agency
  const [agency, setAgency] = useState("");

  // ON PAGE LOAD
  // -------------------------------------------
  // Fetch logged in user (on page load)
  useEffect(() => {
    async function fetchSessionData() {
      try {
        const data = await getSession();
        if (data.sessionExists) {
          setUser(data.sessionData);
        }
      } catch (error) {
        console.error("Failed to fetch session data:", error);
      }
    }
    fetchSessionData();
  }, []);

  useEffect(() => {
    async function fetchAgency() {
      try {
        if (user && user.realEstateId) {
          const agencyData = await getAgencyById(user.realEstateId);
          setAgency(agencyData);
        }
      } catch (error) {
        console.error("Failed to fetch agency:", error);
      }
    }

    fetchAgency();
  }, [user]);

  // -------------------------------------------

  // HANDLERS
  // -------------------------------------------
  const handleLogout = () => {
    fetch("http://localhost/rosemont/backend/api/auth/logout.php", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      setUser(null);
      window.location.href = "/";
    });
  };

  // Changing Real Estate Agency of Agent
  const handleUpdateRealEstate = async (updatedDetails) => {
    try {
      const response = await updateAgent(updatedDetails);
      setUser(response.sessionData);
      realEstateChange();
    } catch (error) {
      console.log("Failed to update real estate agency: ", error);
    }
    onClose(); // Close Modal
  };
  // -------------------------------------------

  return (
    <>
      {user ? (
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
            <Button
              as={Link}
              to="/admin-buyers"
              variant="tertiaryBeige"
              leftIcon={<SellOutlined />}
            >
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
            <p className="text-beige-0 mb-2">{`${user.firstName} ${user.lastName}`}</p>

            {user.realEstateId === null ? (
              <Button w="full" py={8} leftIcon={<WarningRounded />} onClick={onOpen}>
                No Agency
              </Button>
            ) : (
              <Button w="full" h="fit-content" py={4} onClick={onOpen}>
                <img src={logoMap[agency.logoBeige]} alt={agency.logoBeige} className="w-[80%]" />
              </Button>
            )}

            <Button
              w="full"
              variant="lightOutline"
              leftIcon={<LogoutOutlined />}
              mt={4}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
      {/* Real Estate Selection Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Real Estate Agency </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <HStack>
                <Button
                  h="fit-content"
                  py={4}
                  variant="lightFilled"
                  onClick={() => {
                    handleUpdateRealEstate({ realEstateId: 2 });
                  }}
                >
                  <img src={aidaLogoColour} alt="aida" className="w-[80%]" />
                </Button>
                <Button
                  h="fit-content"
                  py={4}
                  variant="lightFilled"
                  onClick={() => {
                    handleUpdateRealEstate({ realEstateId: 3 });
                  }}
                >
                  <img src={engelLogoColour} alt="engel & volkers" className="w-[80%]" />
                </Button>
                <Button
                  h="fit-content"
                  py={4}
                  variant="lightFilled"
                  onClick={() => {
                    handleUpdateRealEstate({ realEstateId: 4 });
                  }}
                >
                  <img src={pamLogoColour} alt="pam golding" className="w-[80%]" />
                </Button>
              </HStack>
              <HStack>
                <Button
                  h="fit-content"
                  py={4}
                  variant="lightFilled"
                  onClick={() => {
                    handleUpdateRealEstate({ realEstateId: 5 });
                  }}
                >
                  <img src={rawsonLogoColour} alt="rawson" className="w-[80%]" />
                </Button>
                <Button
                  h="fit-content"
                  py={4}
                  variant="lightFilled"
                  onClick={() => {
                    handleUpdateRealEstate({ realEstateId: 6 });
                  }}
                >
                  <img src={realnetLogoColour} alt="realnet" className="w-[80%]" />
                </Button>
                <Button
                  h="fit-content"
                  py={4}
                  variant="lightFilled"
                  onClick={() => {
                    handleUpdateRealEstate({ realEstateId: 7 });
                  }}
                >
                  <img src={remaxLogoColour} alt="remax" className="w-[80%]" />
                </Button>
              </HStack>
              <HStack>
                <Button
                  h="fit-content"
                  py={4}
                  variant="lightFilled"
                  onClick={() => {
                    handleUpdateRealEstate({ realEstateId: 8 });
                  }}
                >
                  <img src={seeffLogoColour} alt="seeff" className="w-[80%]" />
                </Button>
                <Button
                  h="fit-content"
                  py={4}
                  variant="lightFilled"
                  onClick={() => {
                    handleUpdateRealEstate({ realEstateId: 9 });
                  }}
                >
                  <img src={tsungaiLogoColour} alt="tsungai united" className="w-[80%]" />
                </Button>
                <Button
                  h="fit-content"
                  py={4}
                  variant="lightFilled"
                  onClick={() => {
                    handleUpdateRealEstate({ realEstateId: 1 });
                  }}
                >
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
