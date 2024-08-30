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
import { AutoAwesomeOutlined } from "@mui/icons-material";

// Internal Components
// -

// Imagery
import missingImg from "../../assets/images/missingImg.png";

// -----------------------------------------------------------

function RejectedHouseCard({ submission, onReev }) {
  const [agency, setAgency] = useState(null);
  const [priImage, setPriImage] = useState(null);

  // When card mounts, fetch respective agency, image, and saved status
  useEffect(() => {
    async function fetchAgency() {
      try {
        const agencyData = await getAgencyById(submission.realEstateId);
        setAgency(agencyData);
      } catch (error) {
        console.error("Failed to fetch agency:", error);
      }
    }

    async function fetchPrimaryImage() {
      try {
        const imagePath = await getPrimaryImageByHouseId(submission.houseId);
        setPriImage(imagePath.imagePath);
      } catch (error) {
        console.error("Error fetching primary house image:", error);
      }
    }

    fetchAgency();
    fetchPrimaryImage();
  }, [submission.houseId, submission.realEstateId]);

  return (
    <>
      <div className="flex h-48 p-4 rounded-3xl bg-beige-0 w-[700px]">
        {/* Image (left) */}
        <img
          src={priImage ? priImage : missingImg}
          alt={JSON.stringify(priImage)}
          className="object-cover rounded-xl h-40 w-40 mr-4 relative"
        />

        <div className="flex flex-col justify-between h-full w-full">
          {/* Title, Catchphrase & Estate Group */}
          <div className="w-full">
            <HStack spacing={4}>
              <h3>{submission.title}</h3>
              {agency ? (
                <img src={logoMap[agency.logoColour]} alt="estate logo" className="w-10 mr-2" />
              ) : (
                <div>Loading</div>
              )}
            </HStack>
            <p className="mb-2">{houseCatchphrase(submission)}</p>
          </div>
          {/* Pricing */}
          <div className="w-full flex justify-between items-end">
            {submission.sellType === "sell" ? (
              <VStack align="start" spacing={0}>
                <p className="text-sm font-bold text-thorn-0">Sold for</p>
                <h3 className="text-thorn-0 font-bold font-alt">{formatPrice(submission.price)}</h3>
              </VStack>
            ) : (
              <VStack align="start" spacing={0}>
                <p className="text-sm font-bold text-thorn-0">Renting for</p>
                <h3 className="text-thorn-0 font-bold font-alt">
                  {formatPrice(submission.price)} /m
                </h3>
              </VStack>
            )}
            <Button
              py={4}
              px={8}
              leftIcon={<AutoAwesomeOutlined />}
              onClick={() => {
                onReev(submission);
              }}
            >
              Reevaluate
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RejectedHouseCard;
