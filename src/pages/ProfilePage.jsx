import Navbar from "../components/navigation/Navbar";

import { VStack, HStack, Button } from "@chakra-ui/react";

import {
  PersonOutlined,
  AccountCircleOutlined,
  HouseOutlined,
  ImageOutlined,
  UploadFileOutlined,
  PaymentsOutlined,
  MeetingRoomOutlined,
  ParkOutlined,
  OtherHousesOutlined,
  DeleteForeverOutlined,
  EditOutlined,
  FavoriteOutlined,
  DeleteOutline,
  FavoriteBorderOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

import IconTextBlock from "../components/buildingblocks/IconTextBlock";

function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="mt-4 mb-24 mx-2 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
        {/* Header */}
        <HStack align="center" mb={4}>
          <PersonOutlined sx={{ fontSize: 96, color: "#C3BDAE" }} />
          <h2>Jane's Profile</h2>
        </HStack>
        {/* Content */}
        <HStack w="full" align="stretch" justify="space-between" spacing={4}>
          <VStack spacing={4} w="40%">
            {/* Person Details */}
            <div className="flex flex-col bg-beige-0 p-8 pt-6 rounded-2xl w-full">
              <HStack justify="space-between">
                <HStack spacing={2} align="center" mb={2}>
                  <AccountCircleOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                  <h3>Details</h3>
                </HStack>
                <Button leftIcon={<EditOutlined />} variant="thornOutline">
                  Edit
                </Button>
              </HStack>
              <VStack mt={8} spacing={6} align="stretch">
                <HStack w="full">
                  <div className="w-[50%]">
                    <IconTextBlock type="name" fontWeight={"bold"} />
                  </div>
                  <p>Jane Doe</p>
                </HStack>
                <HStack w="full">
                  <div className="w-[50%]">
                    <IconTextBlock type="phone" fontWeight={"bold"} />
                  </div>
                  <p>0924341202</p>
                </HStack>
                <HStack w="full">
                  <div className="w-[50%]">
                    <IconTextBlock type="email" fontWeight={"bold"} />
                  </div>
                  <p>jane@gmail.com</p>
                </HStack>
                <Button leftIcon={<LogoutOutlined />}>Log Out</Button>
              </VStack>
            </div>
            {/* Submitted Properties  */}
            <div className="flex flex-col bg-beige-0 p-8 pt-6 rounded-2xl w-full">
              <HStack justify="space-between">
                <HStack spacing={2} align="center" mb={2}>
                  <HouseOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                  <h3>My Properties</h3>
                </HStack>
              </HStack>
              <VStack spacing={4} align="stretch"></VStack>
            </div>
          </VStack>
          {/* Saved Properties */}
          <div className="flex flex-col bg-beige-0 p-8 pt-6 rounded-2xl w-[60%]">
            <HStack justify="space-between">
              <HStack spacing={2} align="center" mb={2}>
                <FavoriteBorderOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                <h3>Saved Properties</h3>
              </HStack>
              <Button leftIcon={<DeleteOutline />} variant="thornOutline">
                Clear All
              </Button>
            </HStack>
            <VStack spacing={4} align="stretch"></VStack>
          </div>
        </HStack>
      </div>
    </>
  );
}

export default ProfilePage;
