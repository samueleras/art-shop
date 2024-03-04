import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import useArtPieces from "../hooks/useArtPieces";
import getImageUrl from "../services/image-url";

const ShopPage = () => {
  const { data, error, isFetching } = useArtPieces();

  if (error) throw new Error();

  if (isFetching) return <Spinner />;

  return (
    <SimpleGrid gap={3}>
      {data?.data.map((artwork) => (
        /*           <Box
            key={artwork.id}
            backgroundColor={"gray.700"}
            p={3}
            borderRadius={5}
          > */
        /*             <Box boxSize="sm">
              <Image
                src={getImageUrl(data.config.iiif_url, artwork.image_id)}
                alt={artwork.title + "_image"}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = getImageUrl(undefined, undefined);
                }}
              />
            </Box>
            <Text>Id: {artwork.id}</Text>
            <Text>Title: {artwork.title}</Text>
            <Text>Artist: {artwork.artist_title}</Text>
          </Box> */
        <Card
          key={artwork.id}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            width={{ base: "100%", sm: "200px" }}
            height={{ base: "100%", sm: "200px" }}
            src={getImageUrl(data.config.iiif_url, artwork.image_id)}
            alt={artwork.title + "_image"}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = getImageUrl(undefined, undefined);
            }}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{artwork.title}</Heading>

              <Text py="2">By {artwork.artist_title}</Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Add to Cart
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default ShopPage;
