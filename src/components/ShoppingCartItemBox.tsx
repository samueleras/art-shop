import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import useShoppingCartStore, {
  ShoppingCartItem,
} from "../stores/shoppingCartStore";
import CarPropertyIconBar from "./CarPropertyIconBar";
import CartPriceTag from "./CartPriceTag";

interface Props {
  item: ShoppingCartItem;
}

const ShoppingCartItemBox = ({
  item: { buyOrLease, count, car },
  item,
}: Props) => {
  const { decrementCount, incrementCount } = useShoppingCartStore();

  const imgUrl = import.meta.env.VITE_API_URL + "/car_images/";

  return (
    <Grid
      gap={3}
      gridTemplateColumns={{ base: "1fr", md: "50% 20% 30%" }}
      alignItems="center"
      justifyItems="center"
    >
      <Box overflow="hidden" justifySelf="start">
        <HStack gap="0">
          <Box>
            <Image
              objectFit="contain"
              maxW={{ base: "120px", sm: "150px" }}
              src={imgUrl + car.png}
              alt={`${car.brand}${car.model}image`}
              height="100%"
            />
          </Box>
          <Stack padding="1rem">
            <Heading size="md">{`${car.brand} ${car.model}`}</Heading>
            <CarPropertyIconBar car={car} />
            <Text>{car.horsepower} HP</Text>
          </Stack>
        </HStack>
      </Box>
      <HStack>
        <button>
          <CiSquareMinus
            size="1.5rem"
            cursor="pointer"
            onClick={() => decrementCount(car._id, buyOrLease)}
          />
        </button>
        <Text size="md">{count}</Text>
        <button>
          <CiSquarePlus
            size="1.5rem"
            onClick={() => incrementCount(car._id, buyOrLease)}
            cursor="pointer"
          />
        </button>
      </HStack>
      <CartPriceTag car={car} item={item} />
    </Grid>
  );
};

export default ShoppingCartItemBox;
