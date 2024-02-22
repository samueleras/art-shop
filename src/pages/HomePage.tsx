import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useArtPieces from "../hooks/useArtPieces";

const HomePage = () => {
  const { data, error, isFetching } = useArtPieces();

  if (error) throw new Error();

  if (isFetching) return <Spinner />;

  return (
    <>
      <Heading>HomePage</Heading>
      <SimpleGrid gap={3}>
        {data?.data.map((artwork) => (
          <Box
            key={artwork.id}
            backgroundColor={"gray.700"}
            p={3}
            borderRadius={5}
          >
            <Text>Id: {artwork.id}</Text>
            <Text>Title: {artwork.title}</Text>
            <Text>Artist: {artwork.artist_title}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default HomePage;
