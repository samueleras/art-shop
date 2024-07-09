import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <ChakraLink as={Link} to="/shoppingcart">
      <Button background="none">
        <FaCartShopping size="1.3rem" />
      </Button>
    </ChakraLink>
  );
};

export default ShoppingCart;
