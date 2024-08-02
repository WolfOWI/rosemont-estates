import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";

// TODO Delete Later (Temporary)
import Navbar from "../components/navigation/Navbar";
import plantWallImg from "../assets/images/plant-wall-1.jpg";
import rosemontEmblemLogo from "../assets/logos/rosemont_emblem.svg";

function LogInPage() {
  return (
    <>
      {/* TODO Delete Navbar */}
      <Navbar />
      <div className="flex w-full h-full">
        <div className="flex justify-center items-center h-screen w-[40%] relative bg-thorn-M1 overflow-hidden">
          <img
            src={rosemontEmblemLogo}
            alt=""
            className="absolute w-[60%] z-10 translate-y-[-50px]"
          />
          <img src={plantWallImg} alt="" className="object-cover h-full w-full blur-sm z-0" />
        </div>
        <div className="flex flex-col justify-center w-[40%] h-screen pl-16">
          <h1 className="text-5xl font-bold text-warmgray-800 mb-4">Your Gateway to Luxury</h1>
          <p className="text-warmgray-600 mb-8">
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
                <Input type="password" />
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
                Submit
              </Button>
            </VStack>
          </Box>
        </div>
      </div>
    </>
  );
}

export default LogInPage;
