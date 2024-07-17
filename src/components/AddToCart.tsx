import { Button, Icon } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import Car from "../entities/Car";
import useCarQueryStore from "../stores/carqueryStore";
import useShoppingCartStore from "../stores/shoppingCartStore";

interface Props {
  car: Car;
}

const AddToCart = ({ car }: Props) => {
  const { addItem } = useShoppingCartStore();
  const {
    carQuery: { buyOrLease },
  } = useCarQueryStore();
  return (
    <Button
      variant="solid"
      gap={3}
      width={"fit-content"}
      onClick={() => addItem(car.id, buyOrLease)}
    >
      <Icon as={FaCartShopping} color={"gray.700"} />
      Add to cart
    </Button>
  );
};

export default AddToCart;
