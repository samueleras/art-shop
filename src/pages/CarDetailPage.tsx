import {
  Box,
  Card,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import CarPropertyIconBar from "../components/CarPropertyIconBar";
import ImageGallery from "../components/ImageGallery";
import ShopPriceTag from "../components/ShopPriceTag";
import ToggleBuyLeasing from "../components/ToggleBuyLeasing";
import styles from "../css/CarDetailPage.module.css";
import useCar from "../hooks/useCar";

const CarDetailPage = () => {
  const params = useParams();
  if (!params.id) {
    throw new Error("ID is undefined");
  }
  const { data: car, error, isFetching } = useCar(params.id);

  const imgUrl = import.meta.env.VITE_API_URL + "/car_images/";

  if (isFetching) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) throw error;
  if (!car) throw new Error("Car is undefined");

  return (
    <>
      <Box className={styles.gradientImage} position="relative">
        <Image
          src={imgUrl + car.thumbnail}
          alt={`${car.brand}${car.model}image`}
          className={styles.imageGradientBottom}
        />
        <Box textAlign="center" position="absolute" bottom={"5%"} width="100%">
          <Heading>{`${car.brand} ${car.model}`}</Heading>
          <Text color="darkslategray">{car.shortDescription}</Text>
        </Box>
      </Box>
      <Text textAlign="center" p="2rem">
        {car.description}
      </Text>
      <Box width="fit-content" margin="auto" marginBottom="1rem">
        <ToggleBuyLeasing />
      </Box>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        margin="auto"
        width="70%"
        maxW="40rem"
      >
        <Box>
          <Image
            objectFit="contain"
            maxW={{ base: "100%", sm: "150px", md: "250px" }}
            src={imgUrl + car.png}
            alt={`${car.brand}${car.model}image`}
            height="100%"
          />
        </Box>
        <Stack padding="1rem">
          <Heading size="md">{`${car.brand} ${car.model}`}</Heading>
          <CarPropertyIconBar car={car} />
          <Text>{car.horsepower} HP</Text>
          <ShopPriceTag car={car} />
          <AddToCart car={car} />
        </Stack>
      </Card>
      <Text p="2rem">
        {"Fuel consumption (combined): " + car.fuelConsumption}
        <br />
        {"CO2 emissions (combined): " + car.emissions}
        <br />
        {"CO2 class (combined): " + car.emissionClass}
      </Text>
      <ImageGallery car={car} />
    </>
  );
};

export default CarDetailPage;
