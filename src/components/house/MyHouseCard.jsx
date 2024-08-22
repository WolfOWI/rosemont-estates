// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Third-Party Components
import { HStack, VStack, Button } from "@chakra-ui/react";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";

// Internal Components
import IconTextBlock from "../buildingblocks/IconTextBlock";

// Services
import { getPrimaryImageByHouseId } from "../../services/houseService";

// Utility Functions

// Imagery
import missingImg from "../../assets/images/missingImg.png";

// -----------------------------------------------------------

function MyHouseCard({ house }) {
  const [priImage, setPriImage] = useState(null);
  const navigate = useNavigate();

  // When card mounts, get primary Image
  useEffect(() => {
    async function fetchPrimaryImage() {
      try {
        const imagePath = await getPrimaryImageByHouseId(house.houseId);
        setPriImage(imagePath.imagePath);
      } catch (error) {
        console.error("Error fetching primary house image:", error);
      }
    }

    fetchPrimaryImage();
  }, [house.houseId]);

  return (
    <>
      <div
        className="flex min-w-full p-4 rounded-3xl hover:bg-beige-P1 hover:cursor-pointer transition-all duration-300"
        onClick={() => navigate(`/listing/${house.houseId}`)}
      >
        {/* Image (left) */}
        <div className="relative mr-4 group">
          <img
            src={priImage ? priImage : missingImg}
            alt={JSON.stringify(priImage)}
            className="object-cover rounded-xl h-40 min-w-40 w-40"
          />
        </div>

        {/* Content (right) */}
        <div className="flex flex-col justify-between">
          {/* Title, Submit date, status */}
          <VStack align="start">
            <VStack align="start" justify="space-between" h={40}>
              <div>
                <h3>{house.title}</h3>
                <p className="text-sm">{"Submitted 21 September 1998"}</p>
                <HStack pt={2}>
                  <div className="w-3 h-3 bg-rosered-0 rounded-full">{/* Circle */}</div>
                  <p>{"Pending Review"}</p>
                </HStack>
              </div>
              <HStack>
                <Button leftIcon={<EditOutlined />}>Edit</Button>
                <Button leftIcon={<DeleteOutline />} variant="roseOutline">
                  Delete
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </div>
      </div>
    </>
  );
}

export default MyHouseCard;
