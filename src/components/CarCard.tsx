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
import AddToCart from "./AddToCart";
import CarPropertyIconBar from "./CarPropertyIconBar";
import ShopPriceTag from "./ShopPriceTag";

interface Props {
  car: Car;
}

const CarCard = ({ car }: Props) => {
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
          <ShopPriceTag car={car} />
        </Stack>
        <AddToCart car={car} />
      </CardBody>
    </Card>
  );
};

export default CarCard;
