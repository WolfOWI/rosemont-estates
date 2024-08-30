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
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import {
  AddHomeOutlined,
  ArrowDropDown,
  AccountCircleOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

// Internal Components
import NavLogo from "./NavLogo";

// Imagery
// -

// -----------------------------------------------------------

function Navbar({ transparent }) {
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
    <Box px={4} bg={transparent ? "transparent" : "thorn.M2"} h={16}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={10}>
          <Link to="/home">
            <NavLogo />
          </Link>
          <Link to="/home">
            <p className="text-beige-0 hover:text-thorn-P2">Home</p>
          </Link>
          <Link to="/listings">
            <p className="text-beige-0 hover:text-thorn-P2">Properties</p>
          </Link>
          <Link to="/home">
            <p className="text-beige-0 hover:text-thorn-P2">About Us</p>
          </Link>
        </HStack>

        {/* TODO Delete Later */}
        {/* <Flex>
          <p className="text-white">Delete Later</p>
          <p>Link</p>
          <Button as={Link} to="/">
            Log In
          </Button>
          <Button as={Link} to="/signup">
            Sign Up
          </Button>
          <Button as={Link} to="/listings">
            Listings
          </Button>
          <Button as={Link} to="/admin-listings">
            Admin
          </Button>
        </Flex> */}

        {user ? (
          <HStack spacing={2}>
            <IconButton
              as={Link}
              to="/add"
              variant="lightFilled"
              icon={<AddHomeOutlined />}
              minW={12}
            />
            <Menu>
              <MenuButton as={Button} variant="lightOutline" rightIcon={<ArrowDropDown />}>
                {user.firstName} {user.lastName}
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/profile" icon={<AccountCircleOutlined />}>
                  <p className="font-normal">Profile</p>
                </MenuItem>
                <MenuItem icon={<LogoutOutlined />} onClick={handleLogout}>
                  Log Out
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        ) : (
          <HStack>
            <Button as={Link} to="/" variant="lightFilled">
              Log In
            </Button>
            <Button as={Link} to="/signup" variant="lightOutline">
              Sign Up
            </Button>
          </HStack>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
