import { Box, Heading, Spinner, Text, Image, VStack } from "@chakra-ui/react";
import useArtPiece from "../hooks/useArtPiece";
import getImageUrl from "../services/image-url";

const HomePage = () => {
  const { data, error, isFetching } = useArtPiece("14598");

  if (error) throw new Error();

  if (isFetching) return <Spinner />;

  return (
    <>
      <VStack>
        <Box marginBlock={10}>
          <Heading size="2xl" marginBottom={2}>
            Welcome to the Gallery
          </Heading>
          <Heading size="md" textAlign="center">
            Don't forget to check out our Shop
          </Heading>
        </Box>

        <Box backgroundColor={"gray.700"} p={3} borderRadius={5}>
          <Heading>Todays feature</Heading>
          <Box marginBlock={3}>
            <Image
              width="100%"
              src={getImageUrl(data?.config.iiif_url, data?.data.image_id)}
              alt={data?.data.title + "_image"}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = getImageUrl(undefined, undefined);
              }}
            />
          </Box>
          <Text fontSize="2rem">{data?.data.title}</Text>
          <Text fontSize="1.2rem">By {data?.data.artist_title}</Text>
        </Box>
      </VStack>
    </>
  );
};

export default HomePage;
