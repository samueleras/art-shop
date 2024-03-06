import {
  Box,
  Link as ChakraLink,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";

const NavigationBar = () => {
  const bgcolor = useColorModeValue("gray.700", "white");
  const color = useColorModeValue("white", "gray.700");
  const logobg = useColorModeValue("black", "white");
  let activeLink = "red.700";

  return (
    <Flex
      color={color}
      backgroundColor={bgcolor}
      alignItems="center"
      justifyContent="space-between"
      height="4rem"
    >
      <Flex alignItems="center" gap={1}>
        <ChakraLink as={NavLink} to="/">
          <Box
            w="5rem"
            flexShrink={0}
            marginLeft={3}
            marginRight={5}
            position="relative"
          >
            <Text
              opacity="1"
              position="absolute"
              left="65%"
              top="0"
              transform="translateY(-18%)"
              fontWeight="bold"
              fontFamily="fantasy"
              fontSize="2rem"
              textShadow={`${logobg} 1px 0 3px`}
            >
              DC
            </Text>
            <Image
              borderRadius="0.7rem"
              objectFit="cover"
              src={logo}
              alt="Logo"
            />
          </Box>
        </ChakraLink>
        <Flex backgroundColor={"gray.400"} borderRadius="1rem">
          <ChakraLink
            as={NavLink}
            to="/"
            color="gray.700"
            _activeLink={{ backgroundColor: activeLink, color: "white" }}
            p={2.5}
            paddingInline={5}
            textAlign="center"
            borderLeftRadius="1rem"
            width="6rem"
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={NavLink}
            to="/shop"
            color="gray.700"
            _activeLink={{ backgroundColor: activeLink, color: "white" }}
            p={2.5}
            textAlign="center"
            borderRightRadius="1rem"
            width="6rem"
          >
            Shop
          </ChakraLink>
        </Flex>
      </Flex>
      <DarkModeSwitch />
    </Flex>
  );
};

export default NavigationBar;
