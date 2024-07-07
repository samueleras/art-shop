import { Button } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

const ShoppingCart = () => {
  return (
    <Button background="none">
      <FaCartShopping size="1.3rem" />
    </Button>
  );
};

export default ShoppingCart;
