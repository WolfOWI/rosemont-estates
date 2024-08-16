import React, { useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

function AddressModal({ isOpen, onClose, handleAddressDone }) {
  const [address, setAddress] = useState({
    street: "",
    suburb: "",
    city: "",
    province: "",
    zip: "",
  });

  // Handle the result from the search box
  const handleSearchResult = (result) => {
    console.log("Handling Search Result");
    console.log(result);
    if (result.features.length > 0) {
      const place = result.features[0].properties.context;

      // Different address parts (checks if it exists, and if not - empty string)
      const street = place.address?.name || "";
      const suburb = place.neighborhood?.name || "";
      const city = place.place?.name || "";
      const province = place.region?.name || "";
      const zip = place.postcode?.name || "";

      // Update the address
      setAddress({
        street: street,
        suburb: suburb,
        city: city,
        province: province,
        zip: zip,
      });
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  // Handle submit button
  const handleSubmit = () => {
    handleAddressDone(address); // Send data back to listing page
    onClose();
  };

  const theme = {
    variables: {
      unit: "14px",
      padding: "0.5em",
      borderRadius: "12px",
      boxShadow: "0 0 0 2px #dbd6cb",
    },
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Address</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <SearchBox
              accessToken="pk.eyJ1Ijoid29sZm93aSIsImEiOiJjbGsybHZqZW8wZW42M2ZveTJ5bmhrNXJhIn0.1RTIqCVcS_VdB3b7Dg9WXA"
              options={{
                language: "en",
                country: "ZA",
              }}
              onRetrieve={handleSearchResult}
              theme={theme}
            />
            <FormControl isRequired>
              <FormLabel>Street Address</FormLabel>
              <Input name="street" value={address.street} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Suburb</FormLabel>
              <Input name="suburb" value={address.suburb} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>City</FormLabel>
              <Input name="city" value={address.city} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Province</FormLabel>
              <Input name="province" value={address.province} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Zip Code</FormLabel>
              <Input name="zip" value={address.zip} onChange={handleChange} />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            isDisabled={
              !address.street ||
              !address.suburb ||
              !address.city ||
              !address.province ||
              !address.zip
            }
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddressModal;
