import React, { useState, useRef } from "react";
import { Box, Image, IconButton, VStack, Input, Button } from "@chakra-ui/react";
import { CloseOutlined, UploadFileOutlined } from "@mui/icons-material";

const ImageUpload = ({ onFileChange }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 5) {
      alert("You can only upload up to 5 images in total.");
      return;
    }
    const newFiles = selectedFiles.concat(files);
    setSelectedFiles(newFiles);
    onFileChange(newFiles);
  };

  const handleRemoveImage = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFileChange(newFiles);

    // Reset the file input value to allow re-selection of the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <VStack spacing={2} align="stretch">
      <Box display="flex" flexWrap="wrap" gap="10px">
        {selectedFiles.map((file, index) => (
          <Box key={index} position="relative" w="100px" h="100px">
            <Image
              src={URL.createObjectURL(file)}
              boxSize="100px"
              objectFit="cover"
              borderRadius="xl"
            />
            <IconButton
              aria-label="Remove image"
              icon={<CloseOutlined />}
              size="xs"
              position="absolute"
              top="1"
              right="1"
              h="fit"
              onClick={() => handleRemoveImage(index)}
            />
          </Box>
        ))}
      </Box>
      <Button onClick={handleButtonClick} leftIcon={<UploadFileOutlined />}>
        Upload Images
      </Button>
      <Input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        display="none" // Hide the actual input element
      />
    </VStack>
  );
};

export default ImageUpload;
