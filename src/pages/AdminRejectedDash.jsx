// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useEffect, useState, useCallback } from "react";

// Services
import { updateHouseStringsByHouseId, fetchAllRejectedHouses } from "../services/houseService";
import { getSession } from "../services/authService";
import { updateSubmissionByHouseId } from "../services/submissionService";

// Utility Functions
// -

// Third-Party Components
import { Wrap, WrapItem } from "@chakra-ui/react";

// Internal Components
import Sidebar from "../components/navigation/Sidebar";
import RejectedHouseCard from "../components/admin/RejectedHouseCard";

// Imagery
// -

// -----------------------------------------------------------

function AdminRejectedDash() {
  const [sessionUser, setSessionUser] = useState(null); // Logged in user details
  const [rejectedSubs, setRejectedSubs] = useState([]); // Rejected submissions
  const [filteredRejects, setFilteredRejects] = useState([]); // Filtered rejects (by logged in user real estate)

  // Fetch logged-in user data on mount, and store in sessionUser
  useEffect(() => {
    // console.log("Fetching session user");
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };

    fetchSessionUser();
  }, []);

  // Fetch all rejected submissions
  const fetchRejectedSubmissions = useCallback(async () => {
    const rejectedHouseSubmissions = await fetchAllRejectedHouses();
    setRejectedSubs(rejectedHouseSubmissions);
  }, []);

  useEffect(() => {
    fetchRejectedSubmissions();
  }, [fetchRejectedSubmissions]);

  // Filter house submissions based on logged in user, set to filteredHouseSubs
  const filterHouseSubmissions = useCallback(() => {
    if (sessionUser && rejectedSubs.length > 0) {
      if (sessionUser.realEstateId === 1) {
        setFilteredRejects(rejectedSubs);
      } else {
        const filteredHouseArr = rejectedSubs.filter(
          (house) => parseInt(house.realEstateId) === parseInt(sessionUser.realEstateId)
        );
        setFilteredRejects(filteredHouseArr);
      }
    }
  }, [sessionUser, rejectedSubs]);

  useEffect(() => {
    filterHouseSubmissions();
  }, [sessionUser, rejectedSubs, filterHouseSubmissions]);

  // Handle real estate change (in sidebar)
  const handleRealEstateChange = () => {
    const fetchSessionUser = async () => {
      const sessionDetails = await getSession();
      setSessionUser(sessionDetails.sessionData);
    };
    fetchSessionUser();
  };

  // Handle Reevaluate Click
  const handleReevClick = async (submission) => {
    console.log("Reevaluate clicked");
    // console.log(submission);

    // Change the submission status to "pending" (moves to "New Homes" on Admin Dash)
    try {
      await updateSubmissionByHouseId(submission.houseId, {
        submitStatus: "pending",
        decisionDate: "pending",
      });
      // Refresh the displayed items
      setRejectedSubs((prevSubs) => prevSubs.filter((sub) => sub.houseId !== submission.houseId));
      setFilteredRejects((prevSubs) =>
        prevSubs.filter((sub) => sub.houseId !== submission.houseId)
      );
    } catch (error) {
      console.log("Failed to update the submission status to pending: ", error);
    }

    // Set House Availability Status (as in, not sold/rented) to "available" (just in case)
    try {
      await updateHouseStringsByHouseId(submission.houseId, {
        availabilityStatus: "available",
      });
    } catch (error) {
      console.log("Failed to update the house status: ", error);
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar realEstateChange={handleRealEstateChange} />
        <div className="flex flex-col mx-8 mt-8 ml-[18rem] w-full">
          <h1 className="mb-2">{filteredRejects.length} Rejected Homes</h1>
          <Wrap spacing={4}>
            {filteredRejects.map((submission) => (
              <WrapItem key={submission.houseId}>
                <RejectedHouseCard submission={submission} onReev={handleReevClick} />
              </WrapItem>
            ))}
          </Wrap>
        </div>
      </div>
    </>
  );
}

export default AdminRejectedDash;
