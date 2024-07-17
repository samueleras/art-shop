import {
  Box,
  Link as ChakraLink,
  Flex,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import ShoppingCart from "./ShoppingCartButton";
import ShoppingCartButton from "./ShoppingCartButton";

const NavigationBar = () => {
  const bgcolor = useColorModeValue("gray.700", "gray.100");
  const color = useColorModeValue("gray.100", "black");
  const logobg = useColorModeValue("black", "white");
  let activeLink = "red.600";
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        color={color}
        backgroundColor={bgcolor}
        alignItems="center"
        justifyContent="space-between"
        height={{ base: "auto", sm: "4rem" }}
        flexDirection={{ base: "column", sm: "row" }}
        padding={{ base: "1rem", sm: "0" }}
        gap={{ base: "1rem", sm: "0" }}
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
              width={{ md: "6rem" }}
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
        <Flex
          color={color}
          backgroundColor={bgcolor}
          alignItems="center"
          justifyContent="space-between"
          gap={{ md: "1rem" }}
          paddingRight="1rem"
        >
          <SearchButton
            onClick={() => {
              isOpen || onToggle();
            }}
          />
          <DarkModeSwitch />
          <ShoppingCartButton />
        </Flex>
      </Flex>
      <SearchBar isOpen={isOpen} onClick={onToggle} />
    </>
  );
};

export default NavigationBar;
