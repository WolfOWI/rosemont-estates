import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, VStack, Button } from "@chakra-ui/react";
import axios from "axios";

// TODO Delete Later (Temporary)
import Navbar from "../components/navigation/Navbar";
import plantWallImg from "../assets/images/plant-wall-1.jpg";
import rosemontEmblemLogo from "../assets/logos/rosemont_emblem.svg";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the PHP script using Axios
    axios
      .post("http://localhost/rosemont/backend/api/login.php", { email, password })
      .then((response) => {
        // Handle the response from PHP
        alert(response.data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {/* TODO Delete Navbar Later */}
      <Navbar />
      <div className="flex flex-col lg:flex-row-reverse justify-start w-full h-full bg-beige-0">
        {/* Rosemont Emblem Picture */}
        <div className="hidden sm:flex justify-center items-center h-52 lg:h-screen w-full lg:w-[45%] relative bg-thorn-M1 overflow-hidden">
          <img
            src={rosemontEmblemLogo}
            alt=""
            className="absolute w-[20%] lg:w-[60%] z-10 lg:translate-y-[-50px]"
          />
          <img src={plantWallImg} alt="" className="object-cover h-full w-full blur-sm z-0" />
        </div>
        {/* Login Form */}
        <div className="flex flex-col lg:justify-center lg:items-end lg:w-[50%] 2xl:w-[38%] h-screen px-4 sm:px-16 py-8 2xl:pr-24">
          <h1>Welcome Back</h1>
          <p className="mb-8">Please enter your details below</p>
          <Box as="form" w="full" onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button size="lg" mt={4} type="submit">
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
