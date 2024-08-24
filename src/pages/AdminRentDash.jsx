// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useState, useEffect } from "react";

// Services
import { fetchFullInterestList } from "../services/interestedService";

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
  const [interestedArr, setInterestedArr] = useState([]); // Interested renters & to-rent house combo

  // On page mount, get & set interestedArr
  useEffect(() => {
    const getAllInterested = async () => {
      const allInterested = await fetchFullInterestList();
      const interestedTenantsToRent = allInterested.filter(
        (interest) => interest.sellType === "rent"
      );
      setInterestedArr(interestedTenantsToRent);
    };

    getAllInterested();
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1 className="mb-2">
            {interestedArr.length} Potential Tenant{interestedArr.length === 1 ? "" : "s"}
          </h1>
          {interestedArr.map((interest) => (
            <CustomerCard type="tenant" key={interest.interestedId} interest={interest} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminRentDash;
