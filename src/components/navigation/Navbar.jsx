// IMPORT
// ---------------------------
import React from "react";
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
  Spacer,
  HStack,
} from "@chakra-ui/react";
import {
  AddHomeOutlined,
  ArrowDropDown,
  AccountCircleOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import NavLogo from "./NavLogo";
// ---------------------------

function Navbar() {
  return (
    <Box px={4} bg="thorn.M1" h={16}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link to="/home">
          <NavLogo />
        </Link>

        {/* TODO Delete Later */}
        <Flex>
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

        <HStack spacing={2}>
          <IconButton as={Link} to="/add" variant="lightFilled" icon={<AddHomeOutlined />} />
          <Menu>
            <MenuButton as={Button} variant="lightOutline" rightIcon={<ArrowDropDown />}>
              Jane Doe
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/profile" icon={<AccountCircleOutlined />}>
                Profile
              </MenuItem>
              <MenuItem icon={<LogoutOutlined />}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
