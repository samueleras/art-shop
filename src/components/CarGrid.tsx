import { Grid, Spinner } from "@chakra-ui/react";
import useCars from "../hooks/useCars";
import CarCard from "./CarCard";

const CarGrid = () => {
  const { data, error, isFetching } = useCars();

  if (error) throw new Error();

  if (isFetching) return <Spinner />;
  return (
    <Grid
      gap={3}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: " 1fr 1fr 1fr" }}
    >
      {data?.data.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </Grid>
  );
};

export default CarGrid;
