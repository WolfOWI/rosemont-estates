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
  const [pendingSubs, setPendingSubs] = useState([]); // Submissions entities (pending)
  const [allHouseSubs, setAllHouseSubs] = useState([]); // All house entities (pending)
  const [filteredHouseSubs, setFilteredHouseSubs] = useState([]); // Filtered real estate House Entities (pending)
  const [sessionUser, setSessionUser] = useState(null); // Logged in user details

  // Fetch session user details & pending submissions on mount
  useEffect(() => {
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };
    const getPendingSubmissions = async () => {
      const allSubmissions = await fetchAllSubmissions();
      const filteredSubs = allSubmissions.filter((subm) => subm.submitStatus === "pending");
      setPendingSubs(filteredSubs);
    };
    getPendingSubmissions();
    fetchSessionUser();
  }, []);

  // Fetch house details when pending submissions change
  useEffect(() => {
    if (pendingSubs.length > 0) {
      const fetchHouseDetails = async () => {
        const pendingHousePromises = pendingSubs.map((subm) => getHouseById(subm.houseId));
        const allHouseDetails = await Promise.all(pendingHousePromises);
        setAllHouseSubs(allHouseDetails);
      };

      fetchHouseDetails();
    }
  }, [pendingSubs]);

  // Filter the house submissions (depending on logged in user)
  useEffect(() => {
    if (sessionUser && allHouseSubs.length > 0) {
      const filterHouseSubmissions = () => {
        if (sessionUser.realEstateId === 1) {
          setFilteredHouseSubs(allHouseSubs);
        } else {
          const filteredHouseArr = allHouseSubs.filter(
            (house) => parseInt(house.realEstateId) === parseInt(sessionUser.realEstateId)
          );
          setFilteredHouseSubs(filteredHouseArr);
        }
      };

      filterHouseSubmissions();
    }
  }, [sessionUser, allHouseSubs]);

  // Handle decision and update the lists
  const handleDecision = useCallback((houseId) => {
    setPendingSubs((prevSubs) => prevSubs.filter((sub) => sub.houseId !== houseId));
    setFilteredHouseSubs((prevHouses) => prevHouses.filter((house) => house.houseId !== houseId));
  }, []);

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
          {filteredHouseSubs.map((house) => (
            <PropertyAccordion key={house.houseId} house={house} onDecision={handleDecision} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminListingsDash;
