import { Link as ChakraLink, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

const NavigationBar = () => {
  return (
    <HStack backgroundColor={"gray.600"} gap={0}>
      <ChakraLink
        as={NavLink}
        to="/"
        _activeLink={{ backgroundColor: "darkgreen" }}
        p={3}
      >
        Home
      </ChakraLink>
      <ChakraLink
        as={NavLink}
        className=""
        to="/shop"
        _activeLink={{ backgroundColor: "darkgreen" }}
        p={3}
      >
        Shop
      </ChakraLink>
      <ChakraLink
        as={NavLink}
        to="/shop/item/1234"
        _activeLink={{ backgroundColor: "darkgreen" }}
        p={3}
      >
        CarDetailPage
      </ChakraLink>
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavigationBar;
