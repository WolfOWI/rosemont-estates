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
  PopoverHeader,
  PopoverBody,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FocusLock } from "@chakra-ui/react";

// Reusable PopoverForm component
const PopoverForm = ({ label, icon, title, children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <div className="w-full">
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button leftIcon={icon} w="full" h={12} variant="colorOutline">
            {label}
          </Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>{title}</PopoverHeader>
            <PopoverBody>
              <VStack align="stretch">{children}</VStack>
              <HStack w="full" justify="end" mt={2}>
                <Button variant="colorOutline" onClick={onClose}>
                  Reset
                </Button>
                <Button onClick={onClose}>Apply</Button>
              </HStack>
            </PopoverBody>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverForm;
