import {
  AspectRatio,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Car from "../entities/Car";
import getImageUrl from "../services/image-url";

interface Props {
  car: Car;
  imageUrl: string;
}

const CarCard = ({ car, imageUrl }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading size="md" mb="6">
          {car.title}
        </Heading>
        <AspectRatio w="100%" ratio={1}>
          <Image
            objectFit="cover"
            width="100%"
            src={getImageUrl(imageUrl, car.image_id)}
            alt={car.title + "_image"}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = getImageUrl(undefined, undefined);
            }}
          />
        </AspectRatio>
        <Stack mt="6" spacing="1">
          <Text>
            {car.title} By {car.artist_title}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
