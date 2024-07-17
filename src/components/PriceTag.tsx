import { Box, Text } from "@chakra-ui/react";
import Car from "../entities/Car";

interface Props {
  shoppingCart: boolean;
  car: Car;
  buyOrLease: "buy" | "lease";
}

const PriceTag = ({ shoppingCart, car, buyOrLease }: Props) => {
  return (
    <Text
      fontSize={shoppingCart ? "xl" : "2xl"}
      mb="3"
      fontWeight={shoppingCart ? "bold" : "normal"}
      textAlign={shoppingCart ? "center" : "left"}
    >
      $
      {buyOrLease === "buy" ? (
        `${car.price}`
      ) : (
        <>
          {car.leasing}
          {" / month - "}
          <Box as="span" whiteSpace="nowrap">
            2 years
          </Box>
        </>
      )}
    </Text>
  );
};

export default PriceTag;
