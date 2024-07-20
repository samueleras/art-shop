import {
  AspectRatio,
  Card,
  CardBody,
  Image,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const CarCardSekelton = () => {
  return (
    <Card maxW="100%" overflow={"hidden"}>
      <CardBody>
        <SkeletonText noOfLines={1} skeletonHeight="8" />
        <SkeletonText mt="3" noOfLines={1} skeletonHeight="3" />
        <Skeleton mt="2">
          {/*         <img src="" alt="" width="1000px" height={"400px"} /> */}
          <AspectRatio w="100%" ratio={1}>
            <Image width="100%" src="" alt="" />
          </AspectRatio>
        </Skeleton>
        <Skeleton height="6" mt="3" />
        <SkeletonText mt="2" noOfLines={2} spacing="3" skeletonHeight="4" />
        <Skeleton height="6" mt="3" />
        <Skeleton height="10" mt="3" width="9rem" borderRadius=".4rem" />
      </CardBody>
    </Card>
  );
};

export default CarCardSekelton;
