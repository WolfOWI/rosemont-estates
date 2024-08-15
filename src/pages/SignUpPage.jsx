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
  IconButton,
} from "@chakra-ui/react";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import Navbar from "../components/navigation/Navbar";
import plantWallImg from "../assets/images/plant-wall-1.jpg";
import rosemontEmblemLogo from "../assets/logos/rosemont_emblem.svg";

function SignUpPage() {
  // Form Variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  // Password Visibility
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/rosemont/backend/api/auth/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
          password: password,
          userType: userType,
        }),
        credentials: "include", // Ensures cookies are included in the request
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        alert(`Sign Up Error: ${data.message}`);
      }
    } catch (error) {
      console.log("Sign Up Error: ", error);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-start w-full h-full bg-beige-0">
        {/* Rosemont Emblem Picture */}
        <div className="hidden sm:flex justify-center items-center h-52 lg:h-screen w-full lg:w-[45%] relative bg-thorn-M1 overflow-hidden">
          <img
            src={rosemontEmblemLogo}
            alt=""
            className="absolute w-[20%] lg:w-[60%] z-10 lg:translate-y-[-50px]"
          />
          <img src={plantWallImg} alt="" className="object-cover h-full w-full blur-sm z-0" />
        </div>
        {/* Sign Up Form */}
        <div className="flex flex-col lg:justify-center lg:items-start lg:w-[50%] xl:w-[70%] 2xl:w-[50%] h-screen px-4 sm:px-8 md:px-8 py-8 2xl:pr-24">
          <h1>Your Gateway to Luxury</h1>
          <p className="mb-8">
            Join our exclusive community to gain access to unparalleled luxury homes, crafted for
            the sophisticated homeowner.
          </p>
          <Box as="form" w="full" onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <Flex>
                <FormControl id="firstName" isRequired mr={2}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="lastName" isRequired ml={2}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl id="phone" isRequired mr={2}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl id="email" isRequired ml={2}>
                  <FormLabel>Email Address</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
              </Flex>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
                <RadioGroup value={userType} onChange={setUserType}>
                  <Stack spacing={4} direction="row">
                    <Radio value="user">buy, rent or sell a home</Radio>
                    <Radio value="agent">join my real estate agency group.</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <Button size="lg" mt={4} type="submit">
                Sign Up
              </Button>
              <p>
                Already have an account? <a href="/">Log In</a>
              </p>
            </VStack>
          </Box>
        </div>
      </div>
      {/* TODO Delete Navbar Later */}
      <Navbar />
    </>
  );
}

export default SignUpPage;
