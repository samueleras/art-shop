import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgcolor = useColorModeValue("gray.700", "gray.100");
  const color = useColorModeValue("gray.100", "black");

  return (
    <Flex
      color={color}
      padding={5}
      backgroundColor={bgcolor}
      justifyContent="space-around"
      position="fixed"
      bottom="0"
      width="100%"
    >
      <Text>Help</Text>
      <Text>Impressum</Text>
      <Text>Terms & Conditions</Text>
    </Flex>
  );
};

export default Footer;
