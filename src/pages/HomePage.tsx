import {
  Box,
  Heading,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import video from "../assets/home_video.webm";
import FeatureOfTheDay from "../components/FeatureOfTheDay";
import styles from "../css/HomePage.module.css";

const HomePage = () => {
  const bgcolor = useColorModeValue("gray.700", "gray.100");
  const color = useColorModeValue("gray.100", "black");

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
          fontSize={{ base: "2.4rem", sm: "clamp(1.7rem, 5vw, 3.6rem)" }}
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
            fontFamily="MyCustomFont"
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
          height={{ base: "calc(100vh - 11rem)", sm: "calc(100vh - 7rem)" }}
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
      <ChakraLink
        as={Link}
        to={`/shop/item/67042423abe4626aea4d1c43`}
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
      >
        <FeatureOfTheDay />
      </ChakraLink>
    </>
  );
};

export default HomePage;
