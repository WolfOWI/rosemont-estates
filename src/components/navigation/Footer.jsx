// IMPORT
// -----------------------------------------------------------
// React & Hooks
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Services
import { getSession } from "../../services/authService";

// Utility Functions
// -

// Third-Party Components
import { HStack } from "@chakra-ui/react";

// Internal Components
// -

// Imagery
// -

// -----------------------------------------------------------

function Footer() {
  // Logged in user
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      const session = await getSession();
      setUser(session.sessionData);
    };
    getLoggedInUser();
  }, []);

  const handleLogout = () => {
    fetch("http://localhost/rosemont/backend/api/auth/logout.php", {
      method: "POST",
      credentials: "include", // Include cookies in the request
    }).then(() => {
      setUser(null); // Clear the user state
      window.location.href = "/"; // Redirect to login page
    });
  };

  return (
    <div className="w-full h-fit bg-thorn-M2 flex flex-col justify-center items-center pt-8 pb-2">
      <HStack spacing={10}>
        <Link to="/home">
          <p className="text-beige-0 hover:text-thorn-P2">Home</p>
        </Link>
        <Link to="/listings">
          <p className="text-beige-0 hover:text-thorn-P2">Properties</p>
        </Link>
        <Link to="/add">
          <p className="text-beige-0 hover:text-thorn-P2">Create a Property</p>
        </Link>
        <Link to="/profile">
          <p className="text-beige-0 hover:text-thorn-P2">My Profile</p>
        </Link>
        <Link onClick={handleLogout}>
          <p className="text-beige-0 hover:text-thorn-P2">Log Out</p>
        </Link>
      </HStack>
      <div className="w-full flex flex-col items-center px-4 mt-8">
        <div className="w-full h-[1px] bg-thorn-M1"></div>
        <p className="text-sm text-thorn-P3 mt-2">
          Copyright &#169; Created By Wolf Botha 21100255
        </p>
      </div>
    </div>
  );
}

export default Footer;
