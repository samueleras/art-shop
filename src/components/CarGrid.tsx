import { Grid } from "@chakra-ui/react";
import useCars from "../hooks/useCars";
import CarCard from "./CarCard";
import CarCardSekelton from "./CarCardSkeleton";

const CarGrid = () => {
  const { data, error, isFetching } = useCars();
  const skeletons = Array.from(Array(20).keys());

  if (error) throw error;

  return (
    <Grid
      gap={3}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: " 1fr 1fr 1fr" }}
    >
      {isFetching && skeletons.map((key) => <CarCardSekelton key={key} />)}
      {data?.map((car) => (
        <CarCard car={car} key={car._id + ""} />
      ))}
    </Grid>
  );
};

export default CarGrid;
