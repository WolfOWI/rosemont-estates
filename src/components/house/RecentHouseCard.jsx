import { HStack, VStack } from "@chakra-ui/react";
import tempImg from "../../assets/images/familyAtHome.jpg";

function RecentHouseCard({ property }) {
  return (
    <>
      {/* Basic Home Info */}
      <HStack spacing={4} align="center" h={32}>
        <img src={tempImg} alt="home" className="object-cover rounded-xl w-48 h-32" />
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3>{property.title}</h3>
            <p>6 Bedroom Italian-Style Mansion in Riversands</p>
          </div>
          <h3 className="text-warmgray-600 font-normal">{property.price}</h3>
        </div>
      </HStack>
    </>
  );
}

export default RecentHouseCard;
