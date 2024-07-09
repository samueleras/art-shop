import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import Car from "../entities/Car";
import CarPropertyIconBar from "./CarPropertyIconBar";

interface Props {
  car: Car;
}

const ShoppingCartItem = ({ car }: Props) => {
  const [quantity, setQuantity] = useState(1);

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
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
        </button>
        <Text size="md">{quantity}</Text>
        <button>
          <CiSquarePlus
            size="1.5rem"
            onClick={() => setQuantity(quantity + 1)}
            cursor="pointer"
          />
        </button>
      </HStack>
      <Heading size="md">${car.price}</Heading>
    </Grid>
  );
};

export default ShoppingCartItem;
