// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect } from "react";

// Services
import { getSavedHouseIdsByUserId, removeAllSavedBySessionUserId } from "../services/savedService";
import { getSubmissionHouseListBySessionUserId } from "../services/submissionService";
import { getHouseById, deleteHouseById } from "../services/houseService";
import { updateUser } from "../services/userService";

// Utility Functions
// -

// Third-Party Components
import {
  VStack,
  HStack,
  Button,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import {
  PersonOutlined,
  AccountCircleOutlined,
  HouseOutlined,
  EditOutlined,
  DeleteOutline,
  FavoriteBorderOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

// Internal Components
import Navbar from "../components/navigation/Navbar";
import MyHouseCard from "../components/house/MyHouseCard";
import IconTextBlock from "../components/buildingblocks/IconTextBlock";
import SavedHouseCard from "../components/house/SavedHouseCard";
import Footer from "../components/navigation/Footer";

// Imagery
// -
// -----------------------------------------------------------

function ProfilePage() {
  // Logged in User
  const [user, setUser] = useState("");

  // Submitted Houses ("My Properties")
  const [subHousesArr, setSubHousesArr] = useState([]);

  // Saved Houses ("Saved Properties")
  const [savedHouseIdsArr, setSavedHouseIdsArr] = useState([]);
  const [savedHousesArr, setSavedHousesArr] = useState([]);

  // Edit User Details
  const [isEditingDetails, setIsEditingDetails] = useState(false);

  // useEffect(() => {
  //   console.log("subHousesArr:");
  //   console.log(subHousesArr);
  // }, [subHousesArr]);

  // On page mount
  useEffect(() => {
    // TODO Get Session through the front-end service
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

    // Fetch House Submissions ("My Properties")
    const fetchSubHouseList = async () => {
      try {
        const submArr = await getSubmissionHouseListBySessionUserId();
        setSubHousesArr(submArr);
      } catch (error) {
        console.log("Error fetching the house submissions:", error);
      }
    };

    fetchSubHouseList();
    fetchSavedHouseIds();
  }, []);

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
    // console.log("handleRemoveHouse");
    setSavedHouseIdsArr((prevIds) => prevIds.filter((id) => id !== houseId));
    setSavedHousesArr((prevHouses) => prevHouses.filter((house) => house.houseId !== houseId));
  };

  const handleClearAllSaved = () => {
    removeAllSavedBySessionUserId();
    setSavedHouseIdsArr([]);
    setSavedHousesArr([]);
  };

  // Handle editing personal details toggle
  const handleEditClick = () => {
    setIsEditingDetails((prevState) => !prevState);
    console.log(user);
    if (isEditingDetails) {
      updateUser({
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
      });
    }
  };

  // Handle Deletion of My Property
  const handleDeleteClick = (receivedHouseId) => {
    console.log("You clicked delete");
    console.log(receivedHouseId);
    deleteHouseById(receivedHouseId);
    setSubHousesArr((prevData) => prevData.filter((house) => house.houseId !== receivedHouseId));
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
                      <Editable
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onSubmit={(value) => {
                          const [firstName, ...rest] = value.split(" ");
                          const lastName = rest.join(" ");
                          setUser((prevUser) => ({ ...prevUser, firstName, lastName }));
                        }}
                      >
                        {/* TODO Style these elements to look give a more 'editing state' appearance */}
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
                  {isEditingDetails ? (
                    <>
                      <Editable
                        defaultValue={user.phone}
                        onSubmit={(value) => setUser((prevUser) => ({ ...prevUser, phone: value }))}
                      >
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </>
                  ) : (
                    <>
                      <p>{user.phone}</p>
                    </>
                  )}
                </HStack>
                <HStack w="full">
                  <div className="w-[50%]">
                    <IconTextBlock type="email" fontWeight={"bold"} />
                  </div>
                  {isEditingDetails ? (
                    <>
                      <Editable
                        defaultValue={user.email}
                        onSubmit={(value) => setUser((prevUser) => ({ ...prevUser, email: value }))}
                      >
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </>
                  ) : (
                    <>
                      <p>{user.email}</p>
                    </>
                  )}
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
                {subHousesArr.length > 0 ? (
                  <>
                    {subHousesArr.map((house) => (
                      <MyHouseCard
                        key={house.houseId}
                        house={house}
                        onDeleteClick={(e) => {
                          e.stopPropagation();
                          handleDeleteClick(house.houseId);
                        }}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <div className="flex flex-col w-fit text-center mx-16 my-16">
                      <h3>No Homes Listed By {user.firstName}</h3>
                      <p>
                        If you'd like to sell/rent your house, click on the create listing button in
                        the top right.
                      </p>
                    </div>
                  </>
                )}
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
              <Button
                leftIcon={<DeleteOutline />}
                variant="thornOutline"
                onClick={handleClearAllSaved}
              >
                Clear All
              </Button>
            </HStack>
            <VStack spacing={4} align="stretch" mt={4}>
              {savedHousesArr.length > 0 ? (
                <>
                  {savedHousesArr.map((savedHouse) => (
                    <SavedHouseCard
                      key={savedHouse.houseId}
                      house={savedHouse}
                      onRemove={handleRemoveHouse}
                    />
                  ))}
                </>
              ) : (
                <>
                  <div className="flex flex-col w-fit text-center mx-16 mt-16">
                    <h3>Nothing Saved</h3>
                    <p>
                      Save a house by clicking the heart button when hovering over its image or the
                      save button in the detailed property view.
                    </p>
                  </div>
                </>
              )}
            </VStack>
          </div>
        </HStack>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
