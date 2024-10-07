import { Heading, Select, Stack } from "@chakra-ui/react";
import useShoppingCartStore from "../stores/shoppingCartStore";

const CartShipping = () => {
  const { selectedShippingCost, setSelectedShippingCost } =
    useShoppingCartStore();
  return (
    <Stack gap="1rem">
      <Heading size="md">Shipping</Heading>
      <Select
        size={{ base: "md", lg: "xs" }}
        value={selectedShippingCost}
        onChange={(event) =>
          setSelectedShippingCost(Number(event.target.value))
        }
      >
        <option value={209.99}>Standard $209.99 / Car</option>
        <option value={419.99}>Express $419.99 / Car</option>
      </Select>
    </Stack>
  );
};

export default CartShipping;
