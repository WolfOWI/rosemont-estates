import React, { useState } from "react";
import { Box, Image, IconButton, VStack, Input } from "@chakra-ui/react";
import { CloseOutlined } from "@mui/icons-material";

const ImageUpload = ({ onFileChange }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }
    setSelectedFiles(files);
    onFileChange(files); // Pass the files back to the parent component
  };

  const handleRemoveImage = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFileChange(newFiles);
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
      <Input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        variant="fileUploadStyle"
      />
    </VStack>
  );
};

export default ImageUpload;
