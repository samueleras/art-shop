import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import ferrarisf90 from "../assets/ferrarisf90.avif";

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
          <Heading size="lg">Todays feature</Heading>
          <Box marginBlock={3}>
            <Image
              width="80vw"
              src={ferrarisf90}
              alt="Ferrari SF90"
              aspectRatio="16:9"
              objectFit="cover"
              maxH="60vh"
              objectPosition="0 0"
            />
          </Box>
          <Text fontSize="2rem">Ferrari SF90 XX Spider</Text>
          <Text fontSize="1.2rem">A Celebration of Excellence</Text>
        </Box>
      </VStack>
    </>
  );
};

export default HomePage;
