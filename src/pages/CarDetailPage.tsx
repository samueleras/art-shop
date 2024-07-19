import { Box, Card, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ferrarif8png from "../assets/f8png.avif";
import ferrarisf8 from "../assets/ferrarif8.jpg";
import ferrarisf90 from "../assets/ferrarisf90.avif";
import AddToCart from "../components/AddToCart";
import CarPropertyIconBar from "../components/CarPropertyIconBar";
import ImageGallery from "../components/ImageGallery";
import ShopPriceTag from "../components/ShopPriceTag";
import ToggleBuyLeasing from "../components/ToggleBuyLeasing";
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
    png: ferrarif8png,
    images: [ferrarisf8, ferrarif8png, ferrarisf90],
  };

  /*   const { updateItems } = useShoppingCartStore();

  const params = useParams(); */

  /*   const { data: carData, error, isFetching } = useCar(params.id); */

  //If car gets refetched because the data has changed, it will be updated in the Store, if it exists in the store
  /*   useEffect(() => {
    if (carData) {
      updateItems(carData.data);
    }
  }, [carData, updateItems]); */

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
            src={car.png}
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
      <Text fontSize="lg" p="2rem">
        {"Kraftstoffverbrauch (gewichtet kombiniert): " + car.fuelConsumption}
        <br />
        {"CO2-Emissionen (gewichtet kombiniert): " + car.emissions}
        <br />
        {"CO2-Klasse (gewichtet kombiniert): " + car.emissionClass}
      </Text>
      <ImageGallery car={car} />
    </>
  );
};

export default CarDetailPage;
