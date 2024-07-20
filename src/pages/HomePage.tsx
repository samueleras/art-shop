import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import video from "../assets/home_video.mp4";

const HomePage = () => {
  /*   const { data, error, isFetching } = useCar("14598");*/
  const bgcolor = useColorModeValue("gray.700", "gray.100");
  const color = useColorModeValue("gray.100", "black");

  /*if (error) throw new Error();

  if (isFetching) return <Spinner />; */

  return (
    <>
      <Box position="relative">
        <Heading
          position="absolute"
          left="50%"
          color={{ base: "white", sm: color }}
          transform="translate(-50%, 0)"
          top={{ base: "-2", lg: "-10" }}
          fontFamily="monospace"
          textShadow={{ base: "black 1px 0 10px", sm: "none" }}
          fontSize="clamp(2.4rem, 6vw, 5rem)"
          zIndex="1000"
        >
          DreamCars
        </Heading>
        <Box display={{ base: "none", sm: "block" }}>
          <Box
            backgroundColor={bgcolor}
            width="7rem"
            height="clamp(3rem, 6vw, 5rem)"
            position="absolute"
            top="0"
            left="15%"
            clipPath="polygon(0 0, 100% 0, 100% 100%, 0 0%)"
          ></Box>
          <Box
            backgroundColor={bgcolor}
            width="7rem"
            height="clamp(3rem, 6vw, 5rem)"
            position="absolute"
            top="0"
            right="15%"
            clipPath="polygon(0 0, 100% 0, 0 100%, 0 0%)"
          ></Box>
          <Box
            backgroundColor={bgcolor}
            height="clamp(3rem, 6vw, 5rem)"
            position="absolute"
            top="0"
            left="calc(15% + 7rem - 1px)"
            right="calc(15% + 7rem - 1px)"
          ></Box>
        </Box>
        <Box maxHeight="calc(100vh - 8rem)" overflow="hidden">
          <video src={video} autoPlay muted loop />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
