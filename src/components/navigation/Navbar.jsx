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
        <Link to="/">
          <NavLogo />
        </Link>

        <Flex>
          <IconButton variant="lightFilled" icon={<AddHomeOutlined />} />
          <div className="w-2">{/* Spacer */}</div>
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
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
