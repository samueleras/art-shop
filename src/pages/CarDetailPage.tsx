import {
  AspectRatio,
  Box,
  Card,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { useParams } from "react-router-dom";
import ferrarif8png from "../assets/f8png.avif";
import ferrarisf8 from "../assets/ferrarif8.jpg";
import ferrarisf90 from "../assets/ferrarisf90.avif";
import useCarQueryStore from "../carquery/store";
import AddToCart from "../components/AddToCart";
import CarPropertyIconBar from "../components/CarPropertyIconBar";
import styles from "../css/CarDetailPage.module.css";
import Car from "../entities/Car";

const CarDetailPage = () => {
  let car: Car = {
    id: 1,
    brand: "Ferrari",
    model: "F8",
    type: "coupe",
    price: 266661,
    leasing: 1200,
    passengerCount: 2,
    doorCount: 2,
    gearbox: "automatic",
    horsepower: 720,
    electric: false,
    shortDescription: "A Celebration of Excellence",
    fuelConsumption: "7,3 l/100 km",
    emissions: "167 g/km",
    emissionClass: "G",
    description:
      "Vor etwa 20 Jahren begann Ferrari mit der Produktion von Sondermodellen, die die Performance der Serienbaureihen in eine noch höhere Dimension befördern. Viele Sondermodelle, wie der 488 Pista und der 812 Competizione, wurden Teil der Legende der Marke aus Maranello. Gleichzeitig startete das Cavallino Rampante das XX-Programm, das einer ausgewählten Gruppe erfahrener Piloten aus dem Kundenkreis die Möglichkeit bietet, sich auf der Rennstrecke als echte Testfahrer am Steuer von Modellen wie dem FXX-K EVO zu bewähren, die nicht für den Straßenverkehr zugelassen sind. Jetzt wurden die Programme zum ersten Mal zusammengeführt: im SF90 XX Spider, dem ersten Ferrari Sondermodell, das auf dem Konzept des XX-Programms basiert und daraus praktisch einen XX mit Straßenzulassung macht. Während der SF90 XX Spider das versenkbare Hardtop des SF90 Spider beibehält, auf dem er basiert, entfesselt er 30 zusätzliche PS und besitzt eine spezifische Softwarelogik und radikal neue Aero-Lösungen, wie einen festen Heckflügel.",
    thumbnail: ferrarisf8,
    images: [ferrarisf8, ferrarif8png, ferrarisf90],
  };

  const params = useParams();

  const {
    carQuery: { buyOrLease },
  } = useCarQueryStore();

  const [currentImg, setCurrentImg] = useState(0);

  //const { data, error, isFetching } = useCar(params.id);

  return (
    <>
      <Box className={styles.gradientImage} position="relative">
        <Image
          src={car.thumbnail}
          alt={`${car.brand}${car.model}image`}
          className={styles.imageGradientBottom}
        />
        <Box textAlign="center" position="absolute" bottom={"5%"} width="100%">
          <Heading>{`${car.brand} ${car.model}`}</Heading>
          <Text fontSize="md" color="darkslategray">
            {car.shortDescription}
          </Text>
        </Box>
      </Box>
      <Text textAlign="center" fontSize="lg" p="2rem">
        {car.description}
      </Text>
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
            src={ferrarif8png}
            alt={`${car.brand}${car.model}image`}
            height="100%"
          />
        </Box>
        <Stack padding="1rem">
          <Heading size="md">{`${car.brand} ${car.model}`}</Heading>
          <CarPropertyIconBar car={car} />
          <Text>{car.horsepower} HP</Text>
          <Text fontSize="2xl" mb="3">
            {buyOrLease === "buy"
              ? `$${car.price}`
              : `$${car.leasing} leasing rate`}
          </Text>
          <AddToCart />
        </Stack>
      </Card>
      <Text fontSize="lg" p="2rem">
        {"Kraftstoffverbrauch (gewichtet kombiniert): " + car.fuelConsumption}
        <br />
        {"CO2-Emissionen (gewichtet kombiniert): " + car.emissions}
        <br />
        {"CO2-Klasse (gewichtet kombiniert): " + car.emissionClass}
      </Text>
      <AspectRatio
        ratio={16 / 9}
        margin="auto"
        width={{ base: "100%", sm: "80%" }}
        position="relative"
        marginBottom="6rem"
        display={car.images || "none"}
      >
        <Box>
          <Image
            objectFit="cover"
            width="100%"
            src={car.images ? car.images[currentImg] : car.thumbnail}
            alt={`${car.brand}${car.model}image`}
          />
          <Box
            position="absolute"
            left="1rem"
            top="50%"
            transform="translateY(-50%)"
            display={currentImg == 0 ? "none" : "block"}
            onClick={() => {
              if (car.images && currentImg > 0) setCurrentImg(currentImg - 1);
            }}
          >
            <IoChevronBackCircle size="3rem" />
          </Box>
          <Box
            position="absolute"
            right="1rem"
            top="50%"
            transform="translateY(-50%)"
            display={
              car.images && currentImg == car.images?.length - 1
                ? "none"
                : "block"
            }
            onClick={() => {
              if (car.images && currentImg < car.images?.length - 1)
                setCurrentImg(currentImg + 1);
            }}
          >
            <IoChevronForwardCircle size="3rem" />
          </Box>
        </Box>
      </AspectRatio>
    </>
  );
};

export default CarDetailPage;
