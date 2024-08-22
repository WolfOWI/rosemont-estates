import Navbar from "../components/navigation/Navbar";
import { getSavedHouseIdsByUserId } from "../services/savedService";
import { getSubmissionBySessionUserId } from "../services/submissionService";
import { getHouseById } from "../services/houseService";
import {
  VStack,
  HStack,
  Button,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  useDisclosure,
} from "@chakra-ui/react";
import MyHouseCard from "../components/house/MyHouseCard";

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
import { useState, useEffect } from "react";
import SavedHouseCard from "../components/house/SavedHouseCard";

function ProfilePage() {
  // Logged in User
  const [user, setUser] = useState("");

  // Submitted Houses ("My Properties")
  const [submissionsArr, setSubmissionsArr] = useState([]);
  const [submittedHousesArr, setSubmittedHousesArr] = useState([]);
  const [completeSubmitArr, setCompleteSubmitArr] = useState([]); // Combo of both submissionsArr & submittedHousesArr

  // Saved Houses ("Saved Properties")
  const [savedHouseIdsArr, setSavedHouseIdsArr] = useState([]);
  const [savedHousesArr, setSavedHousesArr] = useState([]);

  // Edit User Details
  const [isEditingDetails, setIsEditingDetails] = useState(false);

  // On page mount
  useEffect(() => {
    // Fetch session info from the server
    fetch("http://localhost/rosemont/backend/api/auth/getSession.php", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sessionExists) {
          setUser(data.sessionData);
        }
      });

    // Fetch Saved House Ids
    const fetchSavedHouseIds = async () => {
      try {
        const idsArr = await getSavedHouseIdsByUserId();
        setSavedHouseIdsArr(idsArr);
      } catch (error) {
        console.log("Error fetching the saved house ids:", error);
      }
    };

    // Fetch Submission Entities (My Properties)
    const fetchHouseSubmissions = async () => {
      try {
        const submArr = await getSubmissionBySessionUserId();
        setSubmissionsArr(submArr);
      } catch (error) {
        console.log("Error fetching the house submissions:", error);
      }
    };

    fetchHouseSubmissions();
    fetchSavedHouseIds();
  }, []);

  // When submissionsArr changes, get details of each house
  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const houseInfoPromises = submissionsArr.map((house) => getHouseById(house.houseId));
        const allHouseDetails = await Promise.all(houseInfoPromises);
        setSubmittedHousesArr(allHouseDetails);
      } catch (error) {
        console.log("Error fetching the house's details of submitted houses:", error);
      }
    };

    fetchHouseDetails();
  }, [submissionsArr]);

  // Combine submissionsArr & submittedHousesArr into "completeSubmitArr"
  useEffect(() => {
    if (submissionsArr.length > 0 && submittedHousesArr.length > 0) {
      const combinedData = submissionsArr.map((submission, index) => {
        const houseDetails = submittedHousesArr.find(
          (house) => house.houseId === submission.houseId
        );
        return {
          ...submission,
          ...houseDetails,
        };
      });
      setCompleteSubmitArr(combinedData);
    }
  }, [submissionsArr, submittedHousesArr]);

  // useEffect(() => {
  //   console.log("completeSubmitArr is:");
  //   console.log(completeSubmitArr);
  // }, [completeSubmitArr]);

  // When savedHouseIdsArr changes, get details of each house
  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const houseInfoPromises = savedHouseIdsArr.map((houseId) => getHouseById(houseId));
        const allHouseDetails = await Promise.all(houseInfoPromises);

        setSavedHousesArr(allHouseDetails);
      } catch (error) {
        console.log("Error fetching the house's details of saved houses:", error);
      }
    };

    fetchHouseDetails();
  }, [savedHouseIdsArr]);

  // Handle removing a house from the saved list
  const handleRemoveHouse = (houseId) => {
    console.log("handleRemoveHouse");
    setSavedHouseIdsArr((prevIds) => prevIds.filter((id) => id !== houseId));
    setSavedHousesArr((prevHouses) => prevHouses.filter((house) => house.houseId !== houseId));
  };

  const handleEditClick = () => {
    setIsEditingDetails((prevState) => !prevState);
  };

  // Log out function
  const handleLogout = () => {
    fetch("http://localhost/rosemont/backend/api/auth/logout.php", {
      method: "POST",
      credentials: "include", // Include cookies in the request
    }).then(() => {
      setUser(null); // Clear the user state
      window.location.href = "/"; // Redirect to login page
    });
  };

  return (
    <>
      <Navbar />
      <div className="mt-4 mb-24 mx-2 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
        {/* Header */}
        <HStack align="center" mb={4}>
          <PersonOutlined sx={{ fontSize: 96, color: "#C3BDAE" }} />
          <h2>{user.firstName}'s Profile</h2>
        </HStack>
        {/* Content */}
        <HStack w="full" align="stretch" justify="space-between" spacing={4}>
          <VStack spacing={4} w="45%">
            {/* Person Details */}
            <div className="flex flex-col bg-beige-0 p-8 pt-6 rounded-2xl w-full">
              <HStack justify="space-between">
                <HStack spacing={2} align="center" mb={2}>
                  <AccountCircleOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                  <h3>Details</h3>
                </HStack>
                {isEditingDetails ? (
                  <Button onClick={handleEditClick}>Done</Button>
                ) : (
                  <Button
                    leftIcon={<EditOutlined />}
                    variant="thornOutline"
                    onClick={handleEditClick}
                  >
                    Edit
                  </Button>
                )}
              </HStack>
              <VStack mt={8} spacing={6} align="stretch">
                <HStack w="full">
                  <div className="w-[50%]">
                    <IconTextBlock type="name" fontWeight={"bold"} />
                  </div>
                  {isEditingDetails ? (
                    <>
                      <Editable defaultValue={`${user.firstName} ${user.lastName}`}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </>
                  ) : (
                    <>
                      <p>{`${user.firstName} ${user.lastName}`}</p>
                    </>
                  )}
                </HStack>
                <HStack w="full">
                  <div className="w-[50%]">
                    <IconTextBlock type="phone" fontWeight={"bold"} />
                  </div>
                  <p>{user.phone}</p>
                </HStack>
                <HStack w="full">
                  <div className="w-[50%]">
                    <IconTextBlock type="email" fontWeight={"bold"} />
                  </div>
                  <p>{user.email}</p>
                </HStack>
                <Button leftIcon={<LogoutOutlined />} onClick={handleLogout}>
                  Log Out
                </Button>
              </VStack>
            </div>
            {/* My Properties (Submitted by User)*/}
            <div className="flex flex-col bg-beige-0 p-8 pt-6 rounded-2xl w-full">
              <HStack justify="space-between">
                <HStack spacing={2} align="center" mb={2}>
                  <HouseOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                  <h3>My Properties</h3>
                </HStack>
              </HStack>
              <VStack spacing={4} align="stretch">
                {completeSubmitArr.map((house) => (
                  <MyHouseCard key={house.houseId} house={house} />
                ))}
              </VStack>
            </div>
          </VStack>
          {/* Saved Properties */}
          <div className="flex flex-col bg-beige-0 p-8 pt-6 rounded-2xl w-[55%]">
            <HStack justify="space-between">
              <HStack spacing={2} align="center" mb={2}>
                <FavoriteBorderOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                <h3>Saved Properties</h3>
              </HStack>
              <Button leftIcon={<DeleteOutline />} variant="thornOutline">
                Clear All
              </Button>
            </HStack>
            <VStack spacing={4} align="stretch" mt={4}>
              {savedHousesArr.map((savedHouse) => (
                <SavedHouseCard
                  key={savedHouse.houseId}
                  house={savedHouse}
                  onRemove={handleRemoveHouse}
                />
              ))}
            </VStack>
          </div>
        </HStack>
      </div>
    </>
  );
}

export default ProfilePage;
