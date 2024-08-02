import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  RadioGroup,
  Radio,
  Stack,
  VStack,
  Button,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

// TODO Delete Later (Temporary)
import Navbar from "../components/navigation/Navbar";
import plantWallImg from "../assets/images/plant-wall-1.jpg";
import rosemontEmblemLogo from "../assets/logos/rosemont_emblem.svg";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <>
      {/* TODO Delete Navbar */}
      <Navbar />
      <div className="flex w-full h-full">
        <div className="flex justify-center items-center h-screen w-[45%] relative bg-thorn-M1 overflow-hidden">
          <img
            src={rosemontEmblemLogo}
            alt=""
            className="absolute w-[60%] z-10 translate-y-[-50px]"
          />
          <img src={plantWallImg} alt="" className="object-cover h-full w-full blur-sm z-0" />
        </div>
        <div className="flex flex-col w-[40%] h-screen pl-24 pt-32">
          <h1 className="text-5xl font-bold mb-2">Your Gateway to Luxury</h1>
          <p className=" mb-8">
            Join our exclusive community to gain access to unparalleled luxury homes, crafted for
            the sophisticated homeowner.
          </p>
          <Box as="form" w="full">
            <VStack spacing={4} align="stretch">
              <Flex>
                <FormControl id="first-name" isRequired mr={2}>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="last-name" isRequired ml={2}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl id="phone" isRequired mr={2}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="tel" />
                </FormControl>
                <FormControl id="email" isRequired ml={2}>
                  <FormLabel>Email Address</FormLabel>
                  <Input type="email" />
                </FormControl>
              </Flex>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement>
                    <IconButton
                      icon={showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                      onClick={handlePasswordVisibility}
                      variant="tertiary"
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl as="fieldset">
                <FormLabel as="legend">I would like to</FormLabel>
                <RadioGroup defaultValue="buy">
                  <Stack spacing={4} direction="row">
                    <Radio value="customer">buy, rent or sell a home</Radio>
                    <Radio value="agent">join my real estate agency group.</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <Button size="lg" mt={4}>
                Sign Up
              </Button>
              <p>
                Already have an account? <a href="/">Log In</a>
              </p>
            </VStack>
          </Box>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
