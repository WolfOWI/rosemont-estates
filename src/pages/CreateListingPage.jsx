// IMPORT
// -----------------------------------------------------------
// React & Hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Services
import { createHouse } from "../services/houseService";

// Utility Functions
import { dateNow } from "../utils/getDateNow";

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

function CreateListingPage() {
  const navigate = useNavigate();

  // SellType
  // ------------------------------------------------
  const [selectedOption, setSelectedOption] = useState("For Sale");
  // ------------------------------------------------

  // Address Modal
  // ------------------------------------------------
  const { isOpen, onOpen, onClose } = useDisclosure();

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
  // ------------------------------------------------

  // DATA FOR CREATION
  // ------------------------------------------------
  // House Form Data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    street: "",
    suburb: "",
    city: "",
    province: "",
    zip: "",
    style: "",
    availabilityStatus: "available",
    availableDate: "",
    realEstateId: "",
    sellType: "sell",
    price: 0,
    numFloors: 0,
    floorSize: 0,
    numBed: 0,
    numBath: 0,
    numKitchen: 0,
    numDining: 0,
    numGym: 0,
    numBilliard: 0,
    numBasement: 0,
    numGarage: 0,
    lotSize: 0,
    numPool: 0,
    numCourt: 0,
    numDeck: 0,
    numFlowerGard: 0,
    numVegGard: 0,
    numOrchard: 0,
    internet: false,
    airCon: false,
    heating: false,
    secSys: false,
    solar: false,
    gardServ: false,
    irrigation: false,
    outdoorLight: false,
    boma: false,
    gatedCommunity: false,
    submitStatus: "pending",
    submitDate: dateNow(),
    decisionDate: "pending",
  });

  // // Submission Data
  // const [submissionData, setSubmissionData] = useState({
  //   houseId: 7,
  //   submitStatus: "pending",
  //   submitDate: dateNow(),
  //   decisionDate: "pending",
  // });
  // ------------------------------------------------

  // useEffect(() => {
  //   console.log(submissionData);
  // }, [submissionData]);

  // Input Handlers
  // ------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) });
  };

  const handleCheckboxChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.checked);
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked ? 1 : 0 }));
    // console.log(formData);
  };

  const handleRadioChange = (value) => {
    setFormData({ ...formData, sellType: value });
    setSelectedOption(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createHouse(formData, selectedFiles);
      alert(response.message);

      navigate(`/profile`);
    } catch (error) {
      alert("Failed to create house listing. Please try again.");
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setFormData({
      title: "",
      description: "",
      street: "",
      suburb: "",
      city: "",
      province: "",
      zip: "",
      style: "",
      availabilityStatus: "available",
      availableDate: "",
      realEstateId: "",
      sellType: "sell",
      price: 0,
      numFloors: 0,
      floorSize: 0,
      numBed: 0,
      numBath: 0,
      numKitchen: 0,
      numDining: 0,
      numGym: 0,
      numBilliard: 0,
      numBasement: 0,
      numGarage: 0,
      lotSize: 0,
      numPool: 0,
      numCourt: 0,
      numDeck: 0,
      numFlowerGard: 0,
      numVegGard: 0,
      numOrchard: 0,
      internet: false,
      airCon: false,
      heating: false,
      secSys: false,
      solar: false,
      gardServ: false,
      irrigation: false,
      outdoorLight: false,
      boma: false,
      gatedCommunity: false,
    });
  };

  // ------------------------------------------------

  // Image Upload
  // ------------------------------------------------
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (files) => {
    setSelectedFiles(files);
  };
  // ------------------------------------------------

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-8">
        <div className="w-[90%] flex flex-col">
          <Box as="form" w="full" onSubmit={handleSubmit}>
            {/* Top Section */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <AddHomeOutlined sx={{ fontSize: 80, color: "#C3BDAE" }} />
                <h2 className="mt-2 ml-4">New Property</h2>
              </div>
              <HStack>
                <Button
                  variant="thornOutline"
                  size="lg"
                  mt={4}
                  leftIcon={<DeleteForeverOutlined />}
                  onClick={handleClear}
                >
                  Clear
                </Button>
                <Button size="lg" mt={4} rightIcon={<CheckCircleOutlineOutlined />} type="submit">
                  Submit
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
                    <FormControl isRequired>
                      <FormLabel>Images</FormLabel>
                      <ImageUpload onFileChange={handleFileChange} />
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
                        {selectedOption === "rent" && <p className="text-sm">per month</p>}
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

export default CreateListingPage;
