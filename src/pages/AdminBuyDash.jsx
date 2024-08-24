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
import CustomerCard from "../components/admin/CustomerCard";
import Sidebar from "../components/navigation/Sidebar";

// Imagery
// -

// -----------------------------------------------------------

function AdminBuyDash() {
  const [interestedArr, setInterestedArr] = useState([]); // All interested customer & house combo

  // On page mount, get full interested list
  useEffect(() => {
    const getAllInterested = async () => {
      const allInterested = await fetchFullInterestList();
      const interestedBuyersForSale = allInterested.filter(
        (interest) => interest.sellType === "sell"
      );
      setInterestedArr(interestedBuyersForSale);
    };

    getAllInterested();
  }, []);

  useEffect(() => {
    console.log("Full Interested:");
    console.log(interestedArr);
  }, [interestedArr]);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1 className="mb-2">{interestedArr.length} Potential Buyers</h1>
          {interestedArr.map((interest) => (
            <CustomerCard type="buyer" key={interest.interestedId} interest={interest} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminBuyDash;
