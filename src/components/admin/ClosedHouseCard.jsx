// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect } from "react";

// Services
import { getAgencyById } from "../../services/agencyService";
import { getPrimaryImageByHouseId } from "../../services/houseService";

// Utility Functions
import { houseCatchphrase } from "../../utils/houseCatchphrase";
import { formatPrice } from "../../utils/formatPrice";
import logoMap from "../../utils/logoMap";

// Third-Party Components
import { HStack, VStack, Button } from "@chakra-ui/react";
import { ReplayOutlined } from "@mui/icons-material";

// Internal Components
// -

// Imagery
import missingImg from "../../assets/images/missingImg.png";

// -----------------------------------------------------------

function ClosedHouseCard({ house }) {
  const [agency, setAgency] = useState(null);
  const [priImage, setPriImage] = useState(null);

  // When card mounts, fetch respective agency, image, and saved status
  useEffect(() => {
    async function fetchAgency() {
      try {
        const agencyData = await getAgencyById(house.realEstateId);
        setAgency(agencyData);
      } catch (error) {
        console.error("Failed to fetch agency:", error);
      }
    }

    async function fetchPrimaryImage() {
      try {
        const imagePath = await getPrimaryImageByHouseId(house.houseId);
        setPriImage(imagePath.imagePath);
      } catch (error) {
        console.error("Error fetching primary house image:", error);
      }
    }

    fetchAgency();
    fetchPrimaryImage();
  }, [house.houseId, house.realEstateId]);

  // useEffect(() => {
  //   console.log("userSavedHouses are:");
  //   console.log(userSavedHouses);
  // }, [userSavedHouses]);

  // useEffect(() => {
  //   console.log(`The house with id: ${house.houseId} is ${isSaved}`);
  // }, [isSaved]);

  return (
    <>
      <div className="flex h-56 p-4 rounded-3xl bg-beige-0 w-[700px]">
        {/* Image (left) */}
        <img
          src={priImage ? priImage : missingImg}
          alt={JSON.stringify(priImage)}
          className="object-cover rounded-xl h-48 w-48 mr-4 relative"
        />

        <div className="flex flex-col justify-between h-full w-full">
          {/* Title, Catchphrase & Estate Group */}
          <div className="w-full">
            <HStack spacing={4}>
              <h3>{house.title}</h3>
              {agency ? (
                <img src={logoMap[agency.logoColour]} alt="estate logo" className="w-10 mr-2" />
              ) : (
                <div>Loading</div>
              )}
            </HStack>
            <p className="mb-2">{houseCatchphrase(house)}</p>
          </div>
          {/* Pricing */}
          <div className="w-full flex justify-between items-end">
            {house.sellType === "sell" ? (
              <VStack align="start" spacing={0}>
                <p className="text-sm font-bold text-thorn-0">Sold for</p>
                <h3 className="text-thorn-0 font-bold font-alt">{formatPrice(house.price)}</h3>
              </VStack>
            ) : (
              <VStack align="start" spacing={0}>
                <p className="text-sm font-bold text-thorn-0">Renting for</p>
                <h3 className="text-thorn-0 font-bold font-alt">{formatPrice(house.price)} /m</h3>
              </VStack>
            )}
            <Button py={4} px={8} leftIcon={<ReplayOutlined />}>
              Relist Property
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClosedHouseCard;
