import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import ferrarif8 from "../assets/Ferrari F8.avif";

const HomePage = () => {
  /*   const { data, error, isFetching } = useCar("14598");

  if (error) throw new Error();

  if (isFetching) return <Spinner />; */

  return (
    <>
      <VStack>
        <Box marginTop={8}>
          <Heading size="2xl">Welcome to DreamCars</Heading>
        </Box>

        <Box p={3} borderRadius={5}>
          <Heading>Todays feature</Heading>
          <Box marginBlock={3}>
            <Image width="100%" src={ferrarif8} alt="Ferrari F8" />
          </Box>
          <Text fontSize="2rem">Ferrari F8</Text>
          <Text fontSize="1.2rem">A Celebration of Excellence</Text>
        </Box>
      </VStack>
    </>
  );
};

export default HomePage;
