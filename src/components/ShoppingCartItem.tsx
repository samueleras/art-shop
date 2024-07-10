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
import Car from "../entities/Car";
import useShoppingCartStore from "../stores/shoppingCartStore";
import CarPropertyIconBar from "./CarPropertyIconBar";

interface Props {
  car: Car;
  buyOrLease: "buy" | "lease";
}

const ShoppingCartItem = ({ car, buyOrLease }: Props) => {
  const { getItemCount, decrementCount, incrementCount } =
    useShoppingCartStore();

  return (
    <Grid
      gap={3}
      gridTemplateColumns={{ base: "1fr", md: "50% 25% 25%" }}
      alignItems="center"
      justifyItems="center"
    >
      <Box overflow="hidden" justifySelf="start">
        <HStack gap="0">
          <Box>
            <Image
              objectFit="contain"
              maxW="150px"
              src={car.png}
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
            onClick={() => decrementCount(car.id, buyOrLease)}
          />
        </button>
        <Text size="md">{getItemCount(car.id, buyOrLease)}</Text>
        <button>
          <CiSquarePlus
            size="1.5rem"
            onClick={() => incrementCount(car.id, buyOrLease)}
            cursor="pointer"
          />
        </button>
      </HStack>
      <Heading size="md">
        ${buyOrLease === "buy" ? car.price : car.leasing + " / month"}
      </Heading>
    </Grid>
  );
};

export default ShoppingCartItem;
