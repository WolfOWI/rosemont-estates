// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// Services
import { getSession } from "../../services/authService";
import { getHouseById } from "../../services/houseService";

// Utility Functions
// -

// Third-Party Components
// -

// Internal Components
// -

// Imagery
// -

// -----------------------------------------------------------

const PrivateRoute = ({
  children,
  allowedUserTypes,
  userIdRequired = false,
  houseOwnerCheck = false,
  houseId = null,
}) => {
  const [isAllowed, setIsAllowed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const sessionResponse = await getSession();
        setSessionData(sessionResponse.sessionData);

        if (!sessionResponse.sessionExists) {
          // If no session exists, redirect to login
          setIsAllowed(false);
        } else if (allowedUserTypes.includes(sessionResponse.sessionData.userType)) {
          if (userIdRequired && houseOwnerCheck && houseId) {
            // Additional check if the user needs to be the owner of the house
            const house = await getHouseById(houseId); // Assuming you have this function
            if (house.userId === sessionResponse.sessionData.userId) {
              setIsAllowed(true);
            } else {
              setIsAllowed(false);
            }
          } else {
            setIsAllowed(true);
          }
        } else {
          setIsAllowed(false);
        }
      } catch (error) {
        console.error("Error checking session:", error);
        setIsAllowed(false);
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [allowedUserTypes, userIdRequired, houseOwnerCheck, houseId]);

  if (loading) {
    return <div>Loading...</div>; // or any loading spinner
  }

  if (!isAllowed) {
    // Redirect based on user type
    if (!sessionData) {
      return <Navigate to="/" />;
    } else if (sessionData.userType === "user") {
      return <Navigate to="/home" />;
    } else if (sessionData.userType === "agent") {
      return <Navigate to="/admin-listings" />;
    }
  }

  return children;
};

export default PrivateRoute;
