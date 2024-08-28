// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useEffect, useState, useCallback, useRef } from "react";

// Services
import { fetchAllSubmissions } from "../services/submissionService";
import { getHouseById } from "../services/houseService";
import { getSession } from "../services/authService";

// Utility Functions
// -

// Third-Party Components
// -

// Internal Components
import Sidebar from "../components/navigation/Sidebar";
import PropertyAccordion from "../components/admin/PropertyAccordion";

// Imagery
// -

// -----------------------------------------------------------

function AdminListingsDash() {
  const [sessionUser, setSessionUser] = useState(null); // Logged in user details
  const [pendingSubs, setPendingSubs] = useState([]); // Submissions entities (pending)
  const [allHouseSubs, setAllHouseSubs] = useState([]); // All house entities (pending)
  const [filteredHouseSubs, setFilteredHouseSubs] = useState([]); // Filtered real estate House Entities (pending)

  // Fetch logged-in user data on mount, and store in sessionUser
  useEffect(() => {
    // console.log("Fetching session user");
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };

    fetchSessionUser();
  }, []);

  // useEffect(() => {
  //   console.log("sessionUser");
  //   console.log(sessionUser);
  // }, [sessionUser]);

  // Fetch all submission entities & filter by pending
  const fetchPendingSubmissions = useCallback(async () => {
    const allSubmissions = await fetchAllSubmissions();
    const filteredSubs = allSubmissions.filter((subm) => subm.submitStatus === "pending");
    setPendingSubs(filteredSubs);
  }, []);

  useEffect(() => {
    fetchPendingSubmissions();
  }, [fetchPendingSubmissions]);

  // Fetch house detail when pending submissions is received/changes, set to allHouseSubs
  const fetchHouseDetails = useCallback(async () => {
    if (pendingSubs.length > 0) {
      const pendingHousePromises = pendingSubs.map((subm) => getHouseById(subm.houseId));
      const allHouseDetails = await Promise.all(pendingHousePromises);
      setAllHouseSubs(allHouseDetails);
    }
  }, [pendingSubs]);

  // Filter house submissions based on logged in user, set to filteredHouseSubs
  const filterHouseSubmissions = useCallback(() => {
    if (sessionUser && allHouseSubs.length > 0) {
      if (sessionUser.realEstateId === 1) {
        setFilteredHouseSubs(allHouseSubs);
      } else {
        const filteredHouseArr = allHouseSubs.filter(
          (house) => parseInt(house.realEstateId) === parseInt(sessionUser.realEstateId)
        );
        setFilteredHouseSubs(filteredHouseArr);
      }
    }
  }, [sessionUser, allHouseSubs]);

  useEffect(() => {
    fetchHouseDetails();
  }, [pendingSubs, fetchHouseDetails]);

  useEffect(() => {
    filterHouseSubmissions();
  }, [sessionUser, allHouseSubs, filterHouseSubmissions]);

  // Handle approve / reject click
  const handleDecision = (houseId) => {
    setPendingSubs((prevSubs) => prevSubs.filter((sub) => sub.houseId !== JSON.stringify(houseId)));
    setFilteredHouseSubs((prevHouses) =>
      prevHouses.filter((house) => house.houseId !== JSON.stringify(houseId))
    );
  };

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
        <h1 className="mb-2">New Homes</h1>
        <div className=" w-full h-screen">
          {/* TODO Rerender after decision not working */}
          {filteredHouseSubs.map((house) => (
            <PropertyAccordion key={house.houseId} house={house} onDecision={handleDecision} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminListingsDash;
