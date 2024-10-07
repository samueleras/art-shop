import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Link as ChakraLink,
  Flex,
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
  const imgUrl = import.meta.env.VITE_API_URL + "/car_images/";

  return (
    <Card>
      <CardBody>
        <Flex
          justifyContent="space-between"
          flexDirection={"column"}
          height="100%"
        >
          <Box>
            <Box height={{ base: "fit-content", md: "3rem", lg: "8rem" }}>
              <ChakraLink as={Link} to={`/shop/item/${car._id}`}>
                <Heading size="lg">
                  {car.brand} {car.model}
                </Heading>
              </ChakraLink>
              <Text mb="1" fontSize="rem">
                {car.type}
              </Text>
            </Box>
            <ChakraLink as={Link} to={`/shop/item/${car._id}`}>
              <AspectRatio w="100%" ratio={1.4}>
                <Image
                  objectFit="cover"
                  width="100%"
                  src={imgUrl + car.png}
                  alt={car.model + "_image"}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = imgage_placeholder;
                  }}
                />
              </AspectRatio>
            </ChakraLink>
            <Stack mt="1" spacing="2">
              <CarPropertyIconBar car={car} />
              <Text>{car.shortDescription}</Text>
              <Text>{car.horsepower} HP</Text>
            </Stack>
          </Box>
          <Box>
            <Stack mt="3" spacing="2">
              <ShopPriceTag car={car} />
            </Stack>
            <AddToCart car={car} />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CarCard;
