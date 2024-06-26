import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  Link as ChakraLink,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import imgage_placeholder from "../assets/no-image-placeholder.webp";
import useCarQueryStore from "../carquery/store";
import Car from "../entities/Car";
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
              src={car.thumbnail}
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
        <Button variant="solid" gap={3}>
          <Icon as={FaCartShopping} color={"gray.700"} />
          Add to cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default CarCard;
