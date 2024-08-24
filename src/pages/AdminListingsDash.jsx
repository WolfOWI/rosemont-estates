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

  // TODO For Testing
  useEffect(() => {
    console.log("Pending Submissions");
    console.log(pendingSubs);
  }, [pendingSubs]);

  // TODO For Testing
  useEffect(() => {
    console.log("Houses Submissions");
    console.log(subHouses);
  }, [subHouses]);

  const property = {
    title: "Modern Riversands Villa",
    style: "Italian-Style",
    availableDate: "01/09/2024",
    address: "22 Century Boulevard, Riversands, Johannesburg, 1684",
    description:
      "Modern bedroom with en-suite bathroom available in two bedroom apartment. Are you looking for a vibrant living experience in the heart of River-sands, near the University of Johannesburg? Look no further than this fantastic opportunity at Urban Quarter!",
    bedrooms: 6,
    bathrooms: 5,
    kitchens: 2,
    swimmingPools: 1,
    sportsCourts: 1,
    rentPrice: "R64,500",
    perMonth: "per month",
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1 className="mb-2">New Homes</h1>
          <div className=" w-full h-screen">
            {subHouses.map((house) => (
              <PropertyAccordion key={house.houseId} house={house} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminListingsDash;
