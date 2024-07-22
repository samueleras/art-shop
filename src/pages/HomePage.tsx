import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import video from "../assets/home_video.mp4";
import FeatureOfTheDay from "../components/FeatureOfTheDay";
import styles from "../css/HomePage.module.css";

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
          className={styles.heading}
          position="absolute"
          left="50%"
          color={{ base: "white", sm: color }}
          transform="translate(-50%, 0)"
          top={{ sm: "-2", lg: "-8" }}
          bottom={{ base: "5rem" }}
          fontFamily="monospace"
          fontSize={{ base: "2.8rem", sm: "clamp(2.4rem, 6vw, 4rem)" }}
          zIndex="99999"
        >
          DreamCars
        </Heading>
        <Box display={{ base: "none", sm: "block" }}>
          <Box
            backgroundColor={bgcolor}
            width="7rem"
            height="clamp(3rem, 6vw, 5rem)"
            position="absolute"
            top="-1"
            left="15%"
            clipPath="polygon(0 0, 100% 0, 100% 100%, 0 0%)"
          ></Box>
          <Box
            backgroundColor={bgcolor}
            width="7rem"
            height="clamp(3rem, 6vw, 5rem)"
            position="absolute"
            top="-1"
            right="15%"
            clipPath="polygon(0 0, 100% 0, 0 100%, 0 0%)"
          ></Box>
          <Box
            backgroundColor={bgcolor}
            height="clamp(3rem, 6vw, 5rem)"
            position="absolute"
            top="-1"
            left="calc(15% + 7rem - 1px)"
            right="calc(15% + 7rem - 1px)"
          ></Box>
        </Box>
        <Box
          height={{ base: "calc(100vh - 12rem)", sm: "calc(100vh - 8rem)" }}
          overflow="hidden"
        >
          <video
            src={video}
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
      <FeatureOfTheDay />
    </>
  );
};

export default HomePage;
