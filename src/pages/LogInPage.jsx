import React from "react";
import { Box, Flex, FormControl, FormLabel, Input, VStack, Button, Text } from "@chakra-ui/react";

// TODO Delete Later (Temporary)
import Navbar from "../components/navigation/Navbar";
import plantWallImg from "../assets/images/plant-wall-1.jpg";
import rosemontEmblemLogo from "../assets/logos/rosemont_emblem.svg";

function LogInPage() {
  return (
    <>
      {/* TODO Delete Navbar */}
      <Navbar />
      <div className="flex justify-end w-full h-full bg-beige-0">
        <div className="flex flex-col justify-center items-end w-[30%] h-screen pr-24">
          <h1>Welcome Back</h1>
          <p className="mb-8">Please enter your details below</p>
          <Box as="form" w="full">
            <VStack spacing={4} align="stretch">
              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button size="lg" mt={4}>
                Log In
              </Button>
              <p>
                Don't have an account? <a href="/signup">Sign up</a>
              </p>
            </VStack>
          </Box>
        </div>
        <div className="flex justify-center items-center h-screen w-[45%] relative bg-thorn-M1 overflow-hidden">
          <img
            src={rosemontEmblemLogo}
            alt=""
            className="absolute w-[60%] z-10 translate-y-[-50px]"
          />
          <img src={plantWallImg} alt="" className="object-cover h-full w-full blur-sm z-0" />
        </div>
      </div>
    </>
  );
}

export default LogInPage;
