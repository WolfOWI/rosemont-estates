import { Box, useRadio, Flex } from "@chakra-ui/react";
import { SellOutlined, CurrencyExchangeOutlined } from "@mui/icons-material";

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  const icons = {
    "For Sale": <SellOutlined />,
    "To Rent": <CurrencyExchangeOutlined />,
  };

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth="2px"
        borderRadius="xl"
        borderColor="thorn.0"
        color="thorn.0"
        _checked={{
          bg: "thorn.0",
          color: "beige.0",
          borderColor: "thorn.0",
        }}
        _focus={{
          boxShadow: "none",
        }}
        py={3}
        px={6}
        display="flex"
        alignItems="center"
        onClick={() => props.onChange(props.value)}
      >
        {icons[props.children]}
        <Box ml={2}>{props.children}</Box>
      </Flex>
    </Box>
  );
}

export default RadioCard;
