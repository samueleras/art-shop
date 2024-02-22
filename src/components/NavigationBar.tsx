import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, HStack } from "@chakra-ui/react";

const NavigationBar = () => {
  return (
    <HStack padding={3} backgroundColor={"gray.600"}>
      <ChakraLink as={ReactRouterLink} to="/">
        HomePage
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/shop">
        Shop
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/shop/item/1234">
        ArtDetailPage
      </ChakraLink>
    </HStack>
  );
};

export default NavigationBar;
