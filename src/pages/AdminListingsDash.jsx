// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useEffect, useState } from "react";

// Services
import { fetchAllSubmissions } from "../services/submissionService";
import { getHouseById } from "../services/houseService";

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
  const [pendingSubs, setPendingSubs] = useState([]); // Pending Submissions
  const [subHouses, setSubHouses] = useState([]); // House Object (Submissions)

  // On page mount, get submissions with status of 'pending'
  useEffect(() => {
    const getPendingSubmissions = async () => {
      const allSubmissions = await fetchAllSubmissions();
      const filteredSubs = allSubmissions.filter((subm) => subm.submitStatus === "pending");
      setPendingSubs(filteredSubs);
    };
    getPendingSubmissions();
  }, []);

  // When pending submissions state changes, get house details
  useEffect(() => {
    if (pendingSubs.length > 0) {
      const getHouseDetails = async () => {
        try {
          const pendingHousePromises = pendingSubs.map((subm) => getHouseById(subm.houseId));
          const allHouseDetails = await Promise.all(pendingHousePromises);
          setSubHouses(allHouseDetails);
        } catch (error) {
          console.log("Error fetching the house's details of pending houses:", error);
        }
      };
      getHouseDetails();
    }
  }, [pendingSubs]);

  const handleDecision = (houseId) => {
    // console.log("HandleDecision of houseId:");
    // console.log(houseId);
    setPendingSubs((prevSubs) => prevSubs.filter((sub) => sub.houseId !== JSON.stringify(houseId))); // Remove the approved/denied submission
    setSubHouses((prevHouses) => prevHouses.filter((house) => house.houseId !== houseId));
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1 className="mb-2">New Homes</h1>
          <div className=" w-full h-screen">
            {subHouses.map((house) => (
              <PropertyAccordion key={house.houseId} house={house} onDecision={handleDecision} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminListingsDash;
