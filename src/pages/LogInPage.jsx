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
      <div className="flex flex-col lg:flex-row-reverse justify-start w-full h-full bg-beige-0">
        <div className="hidden sm:flex justify-center items-center h-52 lg:h-screen w-full lg:w-[45%] relative bg-thorn-M1 overflow-hidden">
          <img
            src={rosemontEmblemLogo}
            alt=""
            className="absolute w-[20%] lg:w-[60%] z-10 lg:translate-y-[-50px]"
          />
          <img src={plantWallImg} alt="" className="object-cover h-full w-full blur-sm z-0" />
        </div>
        <div className="flex flex-col lg:justify-center lg:items-end lg:w-[50%] 2xl:w-[38%] h-screen px-4 sm:px-16 py-8 2xl:pr-24">
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
      </div>
    </>
  );
}

export default LogInPage;
