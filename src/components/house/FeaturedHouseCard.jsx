// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Services
import { getPrimaryImageByHouseId } from "../../services/houseService";

// Utility Functions
import { houseCatchphrase } from "../../utils/houseCatchphrase";
import { formatPrice } from "../../utils/formatPrice";

// Third-Party Components
import { HStack } from "@chakra-ui/react";

// Internal Components
// -

// Imagery
import missingImg from "../../assets/images/missingImg.png";

// -----------------------------------------------------------

function FeaturedHouseCard({ house }) {
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

  const handleClick = () => {
    navigate(`/listing/${house.houseId}`);
  };

  // console.log(house);
  return (
    <div className="cursor-pointer hover:bg-beige-M1 w-full p-4 rounded-3xl" onClick={handleClick}>
      <div className="flex">
        <img
          src={priImage ? priImage : missingImg}
          alt={JSON.stringify(priImage)}
          className="object-cover rounded-xl w-48 h-32"
        />
        <div className="flex flex-col justify-between min-h-full py-1 ml-4">
          <div>
            <h3>{house.title}</h3>
            <p>{houseCatchphrase(house)}</p>
          </div>
          {/* Pricing */}
          {house.sellType === "sell" ? (
            <h2 className="text-thorn-0 font-bold font-alt">{formatPrice(house.price)}</h2>
          ) : (
            <h2 className="text-thorn-0 font-bold font-alt">
              {formatPrice(house.price)} <span className="text-base">/ month</span>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedHouseCard;
