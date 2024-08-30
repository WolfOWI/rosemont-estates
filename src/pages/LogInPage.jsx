// IMPORT
// -----------------------------------------------------------
// React & Hooks
import React, { useState } from "react";

// Services
// -

// Utility Functions
// -

// Third-Party Components
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  RadioGroup,
  Radio,
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

// Internal Components
// -

// Imagery
import plantWallImg from "../assets/images/plant-wall-1.jpg";
import rosemontEmblemLogo from "../assets/logos/rosemont_emblem.svg";

// -----------------------------------------------------------

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  // Alert Dialog
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [redirectUrl, setRedirectUrl] = useState(null); // Store the redirect URL
  const cancelRef = React.useRef();

  // Handle Log in (submit) button
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/rosemont/backend/api/auth/login.php", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        userType: userType,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAlertMessage(data.message);
        setAlertIsOpen(true);
        if (data.redirect) {
          setRedirectUrl(data.redirect); // Store the redirect URL
        }
      })
      .catch((error) => {
        setAlertMessage("An error occurred during login. Please try again. Error: " + error);
        setAlertIsOpen(true);
      });
  };

  const onClose = () => {
    setAlertIsOpen(false);
    if (redirectUrl) {
      window.location.href = redirectUrl; // Redirect after closing the alert
    }
  };

  return (
    <>
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
              <FormControl as="fieldset">
                <RadioGroup value={userType} onChange={setUserType}>
                  <HStack align="center" spacing={6}>
                    <p>I am a</p>
                    <Radio value="user">customer/seller</Radio>
                    <Radio value="agent">real estate agent.</Radio>
                  </HStack>
                </RadioGroup>
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
      {/* Log in Alert Box */}
      <AlertDialog isOpen={alertIsOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Login Message
            </AlertDialogHeader>

            <AlertDialogBody>{alertMessage}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Ok
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default LogInPage;
