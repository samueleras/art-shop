import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import laFerrari from "../assets/la_ferrari.avif";

const FeatureOfTheDay = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      width={{ base: "80%", lg: "70%" }}
      margin="auto"
      height="auto"
      marginTop={{ base: "5rem", md: "10rem" }}
      marginBottom={{ base: "9rem", md: "14rem" }}
      gap="2rem"
    >
      <Flex justifyContent="center" height="100%" flexDirection="column">
        <Text color="gray.500">Feature of the day</Text>
        <Heading mb="1rem">La Ferrari</Heading>
        <Text>
          LaFerrari, project name F150, is a limited production mid-engine, mild
          hybrid sports car built by Italian automotive manufacturer Ferrari.
          LaFerrari means "The Ferrari" in Italian; this is intended to be the
          definitive Ferrari.
        </Text>
      </Flex>
      <Box
        gridColumn={{ base: 1, md: 2 }}
        gridRow={{ base: 1, md: 1 }}
        maxHeight={{ base: "15rem", sm: "30rem", md: "60vh" }}
      >
        <Image
          objectFit="cover"
          objectPosition="center 80%"
          width="100%"
          height="100%"
          src={laFerrari}
          alt={"la Ferrari"}
        />
      </Box>
    </Grid>
  );
};

export default FeatureOfTheDay;
