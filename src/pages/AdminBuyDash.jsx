// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect } from "react";

// Services
import {
  fetchFullInterestList,
  deleteInterestedByUserIdHouseId,
  deleteInterestedByHouseId,
} from "../services/interestedService";
import { getSession } from "../services/authService";
import { getAgencyById } from "../services/agencyService";
import { updateHouseStringsByHouseId } from "../services/houseService";

// Utility Functions
// -

// Third-Party Components
// -

// Internal Components
import CustomerCard from "../components/admin/CustomerCard";
import Sidebar from "../components/navigation/Sidebar";

// Imagery
// -

// -----------------------------------------------------------

function AdminBuyDash() {
  const [sessionUser, setSessionUser] = useState(null); // Logged in user details
  const [sessionUserAgency, setSessionUserAgency] = useState(null); // Logged in user's real estate
  const [allInterestedArr, setAllInterestedArr] = useState([]); // All (unfiltered) Interested buyers & for-sale house combo
  const [filtInterestArr, setFiltInterestArr] = useState([]); // Filtered Interested buyers & for-sale house combo

  // On page mount, get + set sessionUser & get full interested list
  useEffect(() => {
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };

    fetchSessionUser();

    const getAllInterested = async () => {
      const allInterested = await fetchFullInterestList();
      const interestedBuyersForSale = allInterested.filter(
        (interest) => interest.sellType === "sell"
      );
      setAllInterestedArr(interestedBuyersForSale);
    };

    getAllInterested();
  }, []);

  // When sessionUser is retrieved/changed, get agency details by id
  useEffect(() => {
    if (sessionUser) {
      const getLoggedInUserAgency = async () => {
        const agencyData = await getAgencyById(sessionUser.realEstateId);
        setSessionUserAgency(agencyData);
      };
      getLoggedInUserAgency();
    }
  }, [sessionUser]);

  // Filter buyers based on logged-in user real estate id
  useEffect(() => {
    // If sessionUser & interestedArr exists
    if (sessionUser && allInterestedArr.length > 0) {
      let filteredInterestArr = allInterestedArr;

      // If user is NOT admin, filter by realestate id
      if (sessionUser.realEstateId !== 1) {
        filteredInterestArr = allInterestedArr.filter(
          (intst) => parseInt(intst.realEstateId) === parseInt(sessionUser.realEstateId)
        );
      }

      setFiltInterestArr(filteredInterestArr);
    }
  }, [sessionUser, allInterestedArr]);

  // useEffect(() => {
  //   console.log("sessionUser");
  //   console.log(sessionUser);
  // }, [sessionUser]);

  // useEffect(() => {
  //   console.log("All Interested:");
  //   console.log(allInterestedArr);
  // }, [allInterestedArr]);

  // useEffect(() => {
  //   console.log(sessionUserAgency);
  // }, [sessionUserAgency]);

  // Handle real estate change (in sidebar)
  const handleRealEstateChange = () => {
    // console.log("realEstate change");
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };
    fetchSessionUser();
  };

  // Handle Mark-as-Sold Click (customer card)
  const handleMarked = async (interest) => {
    console.log("Mark-as-Sold clicked");
    console.log(interest);

    try {
      await updateHouseStringsByHouseId(interest.houseId, {
        availabilityStatus: "sold",
      });
    } catch (error) {
      console.log("Failed to update the house status to sold: ", error);
    }

    try {
      await deleteInterestedByHouseId(interest.houseId);
      setAllInterestedArr((prevInterests) =>
        prevInterests.filter((intr) => intr.houseId !== interest.houseId)
      );
      setFiltInterestArr((prevInterests) =>
        prevInterests.filter((intr) => intr.houseId !== interest.houseId)
      );
    } catch (error) {
      console.log("Failed to delete interested entities by houseId : ", error);
    }
  };

  // Handle dismiss click (customer card)
  const handleDismiss = async (userId, houseId) => {
    try {
      await deleteInterestedByUserIdHouseId(userId, houseId);

      // Filter out the dismissed interest from allInterestedArr
      let allInterestMinusOne = allInterestedArr.filter(
        (intr) => intr.houseId !== houseId || intr.userId !== userId
      );
      setAllInterestedArr(allInterestMinusOne);

      // Filter out the dismissed interest from filtInterestArr
      let allFiltInterMinusOne = filtInterestArr.filter(
        (intr) => intr.houseId !== houseId || intr.userId !== userId
      );
      setFiltInterestArr(allFiltInterMinusOne);
    } catch (error) {
      console.error("Failed to dismiss interest:", error);
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar realEstateChange={handleRealEstateChange} />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1 className="mb-2">
            {filtInterestArr.length} Potential Buyer{filtInterestArr.length === 1 ? "" : "s"}
          </h1>
          <h3 className="text-beige-M3 mt-[-8px] mb-4">
            {sessionUserAgency && sessionUserAgency.realEstateId !== 1
              ? `For ${sessionUserAgency.name} Agency`
              : ""}
          </h3>
          {/* <h3>{sessionUserAgency ? }</h3> */}
          {filtInterestArr.map((interest) => (
            <CustomerCard
              type="buyer"
              key={interest.interestedId}
              interest={interest}
              onDismiss={handleDismiss}
              onMark={handleMarked}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminBuyDash;
