// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Third-Party Components
import { HStack, VStack, Button } from "@chakra-ui/react";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";

// Internal Components

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

  // Render of house submission status (pending / approved / rejected)
  const renderStatus = () => {
    switch (true) {
      case house.submitStatus === "pending":
        return (
          <>
            <div className="w-3 h-3 bg-amber-400 rounded-full">{/* Circle */}</div>
            <p>Pending Review</p>
          </>
        );
      case house.submitStatus === "approved":
        return (
          <>
            <div className="w-3 h-3 bg-thorn-P2 rounded-full">{/* Circle */}</div>
            <p>Submission Approved</p>
          </>
        );
      case house.submitStatus === "rejected":
        return (
          <>
            <div className="w-3 h-3 bg-rosered-0 rounded-full">{/* Circle */}</div>
            <p>Submission Rejected</p>
          </>
        );

      default:
        return (
          <>
            <div className="w-3 h-3 bg-amber-400 rounded-full">{/* Circle */}</div>
            <p>Status Not Found</p>
          </>
        );
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate(`/edit/${house.houseId}`);
  };

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
                <p className="text-sm">Submitted on {house.submitDate}</p>
                <HStack pt={2}>{renderStatus()}</HStack>
              </div>
              <HStack>
                <Button leftIcon={<EditOutlined />} onClick={handleEditClick}>
                  Edit
                </Button>
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
