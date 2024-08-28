// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useEffect, useState, useCallback } from "react";

// Services
import { fetchAllSubmissions } from "../services/submissionService";
import { getHouseById, fetchAllApprovedSoldRentedHouses } from "../services/houseService";
import { getSession } from "../services/authService";

// Utility Functions
// -

// Third-Party Components
import { Wrap, WrapItem } from "@chakra-ui/react";

// Internal Components
import Sidebar from "../components/navigation/Sidebar";
import ClosedHouseCard from "../components/admin/ClosedHouseCard";

// Imagery
// -

// -----------------------------------------------------------

function AdminClosedDealsDash() {
  const [sessionUser, setSessionUser] = useState(null); // Logged in user details
  const [closedSubs, setClosedSubs] = useState([]); // Closed submissions (sold/rented houses)
  const [filteredHouseSubs, setFilteredHouseSubs] = useState([]); // Filtered real estate House Entities (sold/rented houses)

  // Fetch logged-in user data on mount, and store in sessionUser
  useEffect(() => {
    // console.log("Fetching session user");
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };

    fetchSessionUser();
  }, []);

  // Fetch all submission entities & filter by pending
  const fetchPendingSubmissions = useCallback(async () => {
    const allSubmissions = await fetchAllApprovedSoldRentedHouses();
    // const filteredSubs = allSubmissions.filter((subm) => subm.submitStatus === "pending");
    setClosedSubs(allSubmissions);
  }, []);

  useEffect(() => {
    fetchPendingSubmissions();
  }, [fetchPendingSubmissions]);

  useEffect(() => {
    console.log(closedSubs);
  }, [closedSubs]);

  // Filter house submissions based on logged in user, set to filteredHouseSubs
  const filterHouseSubmissions = useCallback(() => {
    if (sessionUser && closedSubs.length > 0) {
      if (sessionUser.realEstateId === 1) {
        setFilteredHouseSubs(closedSubs);
      } else {
        const filteredHouseArr = closedSubs.filter(
          (house) => parseInt(house.realEstateId) === parseInt(sessionUser.realEstateId)
        );
        setFilteredHouseSubs(filteredHouseArr);
      }
    }
  }, [sessionUser, closedSubs]);

  useEffect(() => {
    filterHouseSubmissions();
  }, [sessionUser, closedSubs, filterHouseSubmissions]);

  // Handle real estate change (in sidebar)
  const handleRealEstateChange = () => {
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };
    fetchSessionUser();
  };

  return (
    <div className="flex">
      <Sidebar realEstateChange={handleRealEstateChange} />
      <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
        <h1 className="mb-2">{filteredHouseSubs.length} Closed Deals</h1>
        <Wrap spacing={4}>
          {filteredHouseSubs.map((house) => (
            <WrapItem key={house.houseId}>
              <ClosedHouseCard house={house} onRelist={""} />
            </WrapItem>
          ))}
        </Wrap>
      </div>
    </div>
  );
}

export default AdminClosedDealsDash;
