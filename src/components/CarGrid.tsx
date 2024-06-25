import { Grid } from "@chakra-ui/react";
import CarCard from "./CarCard";
import Car from "../entities/Car";
import ferrarif8 from "../assets/Ferrari F8.avif";

const CarGrid = () => {
  //const { data, error, isFetching } = useCars();

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
    description: "A Celebration of Excellence",
    thumbnail: ferrarif8,
  };

  //if (error) throw new Error();

  //if (isFetching) return <Spinner />;
  return (
    <Grid
      gap={3}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: " 1fr 1fr 1fr" }}
    >
      {/* {data?.data.map((car) => (
        <CarCard car={car} key={car.id} />
      ))} */}
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
      <CarCard car={car} />
    </Grid>
  );
};

export default CarGrid;
