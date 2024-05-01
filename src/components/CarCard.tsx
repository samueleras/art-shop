import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import ferrarif8 from "../assets/Ferrari F8.avif";
import imgage_placeholder from "../assets/no-image-placeholder.webp";
import Car from "../entities/Car";
import CarPropertyIconBar from "./CarPropertyIconBar";
import { FaCartShopping } from "react-icons/fa6";
import useCarQueryStore from "../carquery/store";

interface Props {
  car: Car;
}

const CarCard = ({ car }: Props) => {
  const {
    carQuery: { buyOrLease },
  } = useCarQueryStore();

  const carProperties = {
    doors: 5,
    passengers: undefined,
    transmission: "manual",
    isElectric: true,
  };

  return (
    <Card>
      <CardBody>
        <Heading size="lg">Ferrari F8</Heading>
        <Text mb="1" fontSize="rem">
          Coupe
        </Text>
        <AspectRatio w="100%" ratio={1}>
          <Image
            objectFit="cover"
            width="100%"
            src={ferrarif8}
            alt={car.title + "_image"}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = imgage_placeholder;
            }}
          />
        </AspectRatio>
        <Stack mt="3" spacing="1">
          <CarPropertyIconBar car={carProperties} />
          <Text>{"A Celebration of Excellence"}</Text>
          <Text>{"720 HP"}</Text>
          <Text fontSize="2xl" mb="3">
            {buyOrLease === "buy" ? "$266,661" : "$1200 leasing rate"}
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
