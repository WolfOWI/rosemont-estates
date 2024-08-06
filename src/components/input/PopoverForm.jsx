import React from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  IconButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import { FocusLock } from "@chakra-ui/react";

// Reusable PopoverForm component
const PopoverForm = ({ label, icon, children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <Box display="inline-block" mr={3}>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button leftIcon={icon}>{label}</Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <VStack align="stretch">{children}</VStack>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default PopoverForm;
