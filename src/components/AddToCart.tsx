import { Button, Icon } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

const AddToCart = () => {
  return (
    <Button variant="solid" gap={3}>
      <Icon as={FaCartShopping} color={"gray.700"} />
      Add to cart
    </Button>
  );
};

export default AddToCart;
