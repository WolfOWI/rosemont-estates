import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import NavLogo from "./NavLogo";

function Navbar({ transparent }) {
  // Logged in user
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch session info from the server
    fetch("http://localhost/rosemont/backend/api/getSession.php", {
      method: "GET",
      credentials: "include", // Include cookies in the request
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sessionExists) {
          setUser(data.sessionData);
        }
      });
  }, []);

  const handleLogout = () => {
    fetch("http://localhost/rosemont/backend/api/logout.php", {
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
        <Link to="/home">
          <NavLogo />
        </Link>

        {/* TODO Delete Later */}
        <Flex>
          <p className="text-white">Delete Later</p>
          <Button as={Link} to="/">
            Log In
          </Button>
          <Button as={Link} to="/signup">
            Sign Up
          </Button>
          <Button as={Link} to="/listings">
            Listings
          </Button>
          <Button as={Link} to="/detail">
            Detail
          </Button>
          <Button as={Link} to="/admin-listings">
            Admin
          </Button>
        </Flex>

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
                  Profile
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
