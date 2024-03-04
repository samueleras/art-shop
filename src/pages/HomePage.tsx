import {
  Box,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  Image,
} from "@chakra-ui/react";
import useArtPieces from "../hooks/useArtPieces";
import getImageUrl from "../services/image-url";

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
            <Box boxSize="sm">
              <Image
                src={getImageUrl(data.config.iiif_url, artwork.image_id)}
                alt={artwork.title + "_image"}
              />
            </Box>
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
