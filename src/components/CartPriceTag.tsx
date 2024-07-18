import { Box, Text } from "@chakra-ui/react";
import Car from "../entities/Car";
import { ShoppingCartItem } from "../stores/shoppingCartStore";
import PriceTagFormatter from "../services/numberFormatter";

interface Props {
  car: Car;
  item: ShoppingCartItem;
}

const CartPriceTag = ({ car, item: { buyOrLease, count } }: Props) => {
  return (
    <Text
      fontSize="xl"
      mb="3"
      fontWeight="bold"
      textAlign="center"
      padding=".5rem"
    >
      $
      {buyOrLease === "buy" ? (
        `${PriceTagFormatter(car.price * count)}`
      ) : (
        <>
          {PriceTagFormatter(car.leasing * count)}
          {" / month "}
          <Box as="span" whiteSpace="nowrap">
            - 2 years
          </Box>
        </>
      )}
    </Text>
  );
};

export default CartPriceTag;
