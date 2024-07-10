import {
  AspectRatio,
  Card,
  CardBody,
  Link as ChakraLink,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import imgage_placeholder from "../assets/no-image-placeholder.webp";
import Car from "../entities/Car";
import useCarQueryStore from "../stores/carqueryStore";
import AddToCart from "./AddToCart";
import CarPropertyIconBar from "./CarPropertyIconBar";

interface Props {
  car: Car;
}

const CarCard = ({ car }: Props) => {
  const {
    carQuery: { buyOrLease },
  } = useCarQueryStore();

  return (
    <Card>
      <CardBody>
        <ChakraLink as={Link} to="/shop/item/1">
          <Heading size="lg">
            {car.brand} {car.model}
          </Heading>
        </ChakraLink>
        <Text mb="1" fontSize="rem">
          {car.type}
        </Text>
        <ChakraLink as={Link} to="/shop/item/1">
          <AspectRatio w="100%" ratio={1}>
            <Image
              objectFit="cover"
              width="100%"
              src={car.png}
              alt={car.model + "_image"}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = imgage_placeholder;
              }}
            />
          </AspectRatio>
        </ChakraLink>
        <Stack mt="3" spacing="1">
          <CarPropertyIconBar car={car} />
          <Text>{car.shortDescription}</Text>
          <Text>{car.horsepower} HP</Text>
          <Text fontSize="2xl" mb="3">
            {buyOrLease === "buy"
              ? `$${car.price}`
              : `$${car.leasing} leasing rate`}
          </Text>
        </Stack>
        <AddToCart car={car} />
      </CardBody>
    </Card>
  );
};

export default CarCard;
