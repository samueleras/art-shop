import { Box, Text } from "@chakra-ui/react";
import Car from "../entities/Car";
import priceTagFormatter from "../services/priceTagFormatter";
import { ShoppingCartItem } from "../stores/shoppingCartStore";

interface Props {
  car: Car;
  item: ShoppingCartItem;
}

const CartPriceTag = ({ car, item: { buyOrLease, count } }: Props) => {
  return (
    <Text
      fontSize="lg"
      mb="3"
      fontWeight="bold"
      textAlign="center"
      padding=".5rem"
    >
      $
      {buyOrLease === "buy" ? (
        `${priceTagFormatter(car.price * count)}`
      ) : (
        <>
          {priceTagFormatter(car.leasing * count)}
          {" / month"}
          <br />
          <Box as="span" whiteSpace="nowrap" fontSize={"sm"} color="gray.600">
            2 year agreement
          </Box>
        </>
      )}
    </Text>
  );
};

export default CartPriceTag;
