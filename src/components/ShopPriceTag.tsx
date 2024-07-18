import { Box, Text } from "@chakra-ui/react";
import Car from "../entities/Car";
import useCarQueryStore from "../stores/carqueryStore";
import priceTagFormatter from "../services/priceTagFormatter";

interface Props {
  car: Car;
}

const ShopPriceTag = ({ car }: Props) => {
  const {
    carQuery: { buyOrLease },
  } = useCarQueryStore();

  return (
    <Text fontSize="2xl" mb="3" lineHeight="1.7rem">
      $
      {buyOrLease === "buy" ? (
        `${priceTagFormatter(car.price)}`
      ) : (
        <>
          {priceTagFormatter(car.leasing)}
          {" / month"}
          <br />
          <Box as="span" whiteSpace="nowrap" fontSize={"xl"} color="gray.600">
            2 year agreement
          </Box>
        </>
      )}
    </Text>
  );
};

export default ShopPriceTag;
