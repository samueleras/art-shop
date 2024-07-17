import { Box, Text } from "@chakra-ui/react";
import Car from "../entities/Car";
import useCarQueryStore from "../stores/carqueryStore";

interface Props {
  car: Car;
}

const ShopPriceTag = ({ car }: Props) => {
  const {
    carQuery: { buyOrLease },
  } = useCarQueryStore();

  return (
    <Text fontSize="2xl" mb="3">
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

export default ShopPriceTag;
