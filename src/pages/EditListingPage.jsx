// IMPORT
// -----------------------------------------------------------
// React & Hooks
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// Services
import { getHouseById, updateHouse, getImagesByHouseId } from "../services/houseService";

// Utility Functions
// -

// Third-Party Components
import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  CheckboxGroup,
  Checkbox,
  Box,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import {
  AddHomeOutlined,
  CheckCircleOutlineOutlined,
  HouseOutlined,
  ImageOutlined,
  UploadFileOutlined,
  PaymentsOutlined,
  MeetingRoomOutlined,
  ParkOutlined,
  OtherHousesOutlined,
  DeleteForeverOutlined,
  EditOutlined,
  ArrowBack,
} from "@mui/icons-material";

// Internal Components
import Navbar from "../components/navigation/Navbar";
import AddressModal from "../components/overlays/AddressModal";
import ImageUpload from "../components/input/ImageUpload";
import RadioCard from "../components/input/RadioCard";
import IconTextBlock from "../components/buildingblocks/IconTextBlock";
import Footer from "../components/navigation/Footer";

// Imagery
// -

// -----------------------------------------------------------

function EditListingPage() {
  const { houseId } = useParams();
  const [formData, setFormData] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const houseData = await getHouseById(houseId);
        setFormData(houseData);
        // console.log("The houseData:");
        // console.log(houseData);
      } catch (error) {
        console.log("Error fetching the house's details:", error);
      }
    };

    const fetchHouseImages = async () => {
      try {
        // console.log("Fetching house images (fetchHouseImages)");
        const images = await getImagesByHouseId(houseId);
        setSelectedFiles(images); // Preload existing images into the state
      } catch (error) {
        console.log("Error fetching the house images:", error);
      }
    };
    fetchHouseDetails();
    fetchHouseImages();
  }, [houseId]);

  const handleAddressDone = (address) => {
    setFormData((prevData) => ({
      ...prevData,
      street: address.street,
      suburb: address.suburb,
      city: address.city,
      province: address.province,
      zip: address.zip,
    }));
    onClose();
  };

  // Input Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: parseInt(value) }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked ? 1 : 0 }));
  };

  const handleRadioChange = (value) => {
    setFormData((prevData) => ({ ...prevData, sellType: value }));
  };

  const handleFileChange = (files) => {
    setSelectedFiles(files);
    // console.log(
    //   "EditListingPage: My function, handleFileChange, has been activated. Setting selectedFiles to:"
    // );
    // console.log(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("EditListingPage: 'I'm handling the submit now.'");
      // console.log("Editlistingpage: 'The formData is:'");
      // console.log(formData);
      // console.log("Editlistingpage: 'The selectedFiles are:'");
      // console.log(selectedFiles);
      const response = await updateHouse(houseId, formData, selectedFiles);
      alert(response.message);
      navigate(`/listing/${houseId}`); // Navigate back to listing page
    } catch (error) {
      alert("Failed to update house listing. Please try again.");
    }
  };

  if (!formData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-8">
        <div className="w-[90%] flex flex-col">
          <Box as="form" w="full" onSubmit={handleSubmit}>
            {/* Top Section */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <IconButton
                  as={Link}
                  to={`/listing/${formData.houseId}`}
                  icon={<ArrowBack />}
                  minW={12}
                />
                <h2 className="mt-2 ml-4">Editing {formData.title}</h2>
              </div>
              <HStack>
                <Button
                  variant="roseOutlineDarker"
                  size="lg"
                  mt={4}
                  leftIcon={<DeleteForeverOutlined />}
                  // TODO  onClick={handleClear}
                >
                  Delete
                </Button>
                <Button size="lg" mt={4} leftIcon={<EditOutlined />} type="submit">
                  Save Changes
                </Button>
              </HStack>
            </div>
            {/* Content */}
            <div className="flex justify-between mb-16">
              {/* Left */}
              <div className="flex flex-col w-[32%]">
                {/* Property Details */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <HouseOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Property Details</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                      <FormLabel>Title</FormLabel>
                      <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Address</FormLabel>
                      <Input
                        value={`${formData.street}, ${formData.suburb}, ${formData.city}, ${formData.province}, ${formData.zip}`}
                        onClick={onOpen}
                        readOnly
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>House Style</FormLabel>
                      <Select
                        placeholder="Select Style"
                        name="style"
                        value={formData.style}
                        onChange={handleChange}
                      >
                        <option value="American Colonial">American Colonial</option>
                        <option value="French Chateau">French Château</option>
                        <option value="Gothic">Gothic</option>
                        <option value="Italian Villa">Italian Villa</option>
                        <option value="Modern">Modern</option>
                        <option value="Neoclassical">Neoclassical</option>
                        <option value="Timber-Framed">Timber-Framed</option>
                        <option value="Victorian">Victorian</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Available From</FormLabel>
                      <Input
                        type="date"
                        name="availableDate"
                        value={formData.availableDate}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Real Estate Agent</FormLabel>
                      <Select
                        placeholder="Select Agency"
                        name="realEstateId"
                        value={formData.realEstateId}
                        onChange={handleChange}
                      >
                        <option value="2">AIDA</option>
                        <option value="3">Engel and Völkers</option>
                        <option value="4">Pam Golding Properties</option>
                        <option value="5">Rawson</option>
                        <option value="6">RealNet</option>
                        <option value="7">RE/MAX South Africa</option>
                        <option value="8">Seeff</option>
                        <option value="9">Tsungai Holdings</option>
                      </Select>
                    </FormControl>
                  </VStack>
                </div>
                {/* Imagery */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl">
                  <HStack spacing={2} align="center" mb={2}>
                    <ImageOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Imagery</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl isRequired={!selectedFiles.length}>
                      <FormLabel>Images</FormLabel>
                      <ImageUpload onFileChange={handleFileChange} addedFiles={selectedFiles} />
                    </FormControl>
                  </VStack>
                </div>
              </div>
              {/* Middle */}
              <div className="flex flex-col w-[32%]">
                {/* Pricing */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <PaymentsOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Pricing</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <HStack spacing={4} width="100%">
                      <RadioCard
                        key={"sell"}
                        value={"sell"}
                        isChecked={formData.sellType === "sell"}
                        onChange={() => handleRadioChange("sell")}
                      >
                        For Sale
                      </RadioCard>
                      <RadioCard
                        key={"rent"}
                        value={"rent"}
                        isChecked={formData.sellType === "rent"}
                        onChange={() => handleRadioChange("rent")}
                      >
                        To Rent
                      </RadioCard>
                    </HStack>
                    <FormControl isRequired>
                      <HStack spacing={4}>
                        <Input
                          type="number"
                          flex="1"
                          placeholder="ZAR"
                          name={"price"}
                          value={formData.price}
                          onChange={handleNumberChange}
                        />
                        {formData.sellType === "rent" && <p className="text-sm">per month</p>}
                      </HStack>
                    </FormControl>
                  </VStack>
                </div>
                {/* Interior */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <MeetingRoomOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Interior</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                      <FormLabel>Total Floors</FormLabel>
                      <HStack spacing={4}>
                        <Input
                          type="number"
                          flex="1"
                          name="numFloors"
                          value={formData.numFloors}
                          onChange={handleNumberChange}
                        />
                        <p className="text-sm">floor(s)</p>
                      </HStack>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Floor Size</FormLabel>
                      <HStack spacing={4}>
                        <Input
                          type="number"
                          flex="1"
                          name="floorSize"
                          value={formData.floorSize}
                          onChange={handleNumberChange}
                        />
                        <p className="text-sm">square meters</p>
                      </HStack>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Rooms</FormLabel>
                      <VStack align="start">
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numBed"
                            value={formData.numBed}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="bed" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numBath"
                            value={formData.numBath}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="bath" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numKitchen"
                            value={formData.numKitchen}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="kitchen" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numDining"
                            value={formData.numDining}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="dining" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numGym"
                            value={formData.numGym}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="gym" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numBilliard"
                            value={formData.numBilliard}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="billiard" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numBasement"
                            value={formData.numBasement}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="basement" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numGarage"
                            value={formData.numGarage}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="garage" />
                        </HStack>
                      </VStack>
                    </FormControl>
                  </VStack>
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-col w-[32%]">
                {/* Exterior */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <ParkOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Exterior</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                      <FormLabel>Lot Size</FormLabel>
                      <HStack spacing={4}>
                        <Input
                          type="number"
                          flex="1"
                          name="lotSize"
                          value={formData.lotSize}
                          onChange={handleNumberChange}
                        />
                        <p className="text-sm">square meters</p>
                      </HStack>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Exterior Spaces</FormLabel>
                      <VStack align="start">
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numPool"
                            value={formData.numPool}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="pool" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numCourt"
                            value={formData.numCourt}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="court" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numDeck"
                            value={formData.numDeck}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="deck" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numFlowerGard"
                            value={formData.numFlowerGard}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="flowerGard" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numVegGard"
                            value={formData.numVegGard}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="vegGard" />
                        </HStack>
                        <HStack>
                          <Input
                            type="number"
                            w={10}
                            p={0}
                            textAlign="center"
                            name="numOrchard"
                            value={formData.numOrchard}
                            onChange={handleNumberChange}
                          />
                          <IconTextBlock type="orchard" />
                        </HStack>
                      </VStack>
                    </FormControl>
                  </VStack>
                </div>
                {/* Features */}
                <div className="flex flex-col bg-beige-0 px-8 pb-8 pt-7 rounded-3xl mb-5">
                  <HStack spacing={2} align="center" mb={2}>
                    <OtherHousesOutlined sx={{ fontSize: 40, color: "#D27A7A" }} />
                    <h3>Features</h3>
                  </HStack>
                  <VStack spacing={4} align="stretch">
                    <FormControl>
                      <FormLabel>Interior</FormLabel>
                      <VStack align="start">
                        <CheckboxGroup>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="internet" />
                            <Checkbox
                              name="internet"
                              isChecked={formData.internet === 1}
                              onChange={handleCheckboxChange}
                            ></Checkbox>
                          </div>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="airCon" />
                            <Checkbox
                              name="airCon"
                              isChecked={formData.airCon === 1}
                              onChange={handleCheckboxChange}
                            />
                          </div>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="heating" />
                            <Checkbox
                              name="heating"
                              isChecked={formData.heating === 1}
                              onChange={handleCheckboxChange}
                            />
                          </div>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="secSys" />
                            <Checkbox
                              name="secSys"
                              isChecked={formData.secSys === 1}
                              onChange={handleCheckboxChange}
                            />
                          </div>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="solar" />
                            <Checkbox
                              name="solar"
                              isChecked={formData.solar === 1}
                              onChange={handleCheckboxChange}
                            />
                          </div>
                        </CheckboxGroup>
                      </VStack>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Exterior</FormLabel>
                      <VStack align="start">
                        <CheckboxGroup>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="gardServ" />
                            <Checkbox
                              name="gardServ"
                              isChecked={formData.gardServ === 1}
                              onChange={handleCheckboxChange}
                            ></Checkbox>
                          </div>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="irrigation" />
                            <Checkbox
                              name="irrigation"
                              isChecked={formData.irrigation === 1}
                              onChange={handleCheckboxChange}
                            ></Checkbox>
                          </div>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="outdoorLight" />
                            <Checkbox
                              name="outdoorLight"
                              isChecked={formData.outdoorLight === 1}
                              onChange={handleCheckboxChange}
                            ></Checkbox>
                          </div>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="boma" />
                            <Checkbox
                              name="boma"
                              isChecked={formData.boma === 1}
                              onChange={handleCheckboxChange}
                            ></Checkbox>
                          </div>
                          <div className="w-full flex flex-row justify-between">
                            <IconTextBlock type="gatedCommunity" />
                            <Checkbox
                              name="gatedCommunity"
                              isChecked={formData.gatedCommunity === 1}
                              onChange={handleCheckboxChange}
                            ></Checkbox>
                          </div>
                        </CheckboxGroup>
                      </VStack>
                    </FormControl>
                  </VStack>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <AddressModal isOpen={isOpen} onClose={onClose} handleAddressDone={handleAddressDone} />
      <Footer />
    </>
  );
}

export default EditListingPage;
