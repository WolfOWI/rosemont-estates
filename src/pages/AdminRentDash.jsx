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
import Sidebar from "../components/navigation/Sidebar";
import CustomerCard from "../components/admin/CustomerCard";

// Imagery
// -

// -----------------------------------------------------------

function AdminRentDash() {
  const [sessionUser, setSessionUser] = useState(null); // Logged in user details
  const [sessionUserAgency, setSessionUserAgency] = useState(null); // Logged in user's real estate
  const [allInterestedArr, setAllInterestedArr] = useState([]); // All (unfiltered) Interested tenants & to-rent house combo
  const [filtInterestArr, setFiltInterestArr] = useState([]); // Filtered Interested tenants & to-rent house combo

  // On page mount, get + set sessionUser & get full interested list
  useEffect(() => {
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };

    const getAllInterested = async () => {
      const allInterested = await fetchFullInterestList();
      const interestedTenantsToRent = allInterested.filter(
        (interest) => interest.sellType === "rent"
      );
      setAllInterestedArr(interestedTenantsToRent);
    };

    getAllInterested();
    fetchSessionUser();
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

  // Filter tenants based on logged-in user real estate id
  useEffect(() => {
    // If sessionUser & interestedArr exists
    if (sessionUser && allInterestedArr.length > 0) {
      let filteredInterestArr = allInterestedArr;

      // If user is NOT admin, filter by real estate id
      if (sessionUser.realEstateId !== 1) {
        filteredInterestArr = allInterestedArr.filter(
          (intst) => parseInt(intst.realEstateId) === parseInt(sessionUser.realEstateId)
        );
      }

      setFiltInterestArr(filteredInterestArr);
    }
  }, [sessionUser, allInterestedArr]);

  // Handle real estate change (in sidebar)
  const handleRealEstateChange = () => {
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };
    fetchSessionUser();
  };

  // Handle Mark-as-Rented Click (customer card)
  const handleMarked = async (interest) => {
    console.log("Mark-as-Rented clicked");
    console.log(interest);

    try {
      await updateHouseStringsByHouseId(interest.houseId, {
        availabilityStatus: "rented",
      });
    } catch (error) {
      console.log("Failed to update the house status to rented: ", error);
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
            {filtInterestArr.length} Potential Tenant{filtInterestArr.length === 1 ? "" : "s"}
          </h1>
          <h3 className="text-beige-M3 mt-[-8px] mb-4">
            {sessionUserAgency && sessionUserAgency.realEstateId !== 1
              ? `For ${sessionUserAgency.name} Agency`
              : ""}
          </h3>
          {filtInterestArr.map((interest) => (
            <CustomerCard
              type="tenant"
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

export default AdminRentDash;
