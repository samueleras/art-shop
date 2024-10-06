import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import Car from "../entities/Car";

interface Props {
  car: Car;
}

const ImageGallery = ({ car }: Props) => {
  const [currentImg, setCurrentImg] = useState(0);

  const imgUrl = import.meta.env.VITE_API_URL + "/car_images/";

  return (
    <AspectRatio
      ratio={16 / 9}
      margin="auto"
      width={{ base: "100%", sm: "80%" }}
      position="relative"
      marginBottom="6rem"
      display={car.images || "none"}
    >
      <Box>
        <Image
          objectFit="cover"
          width="100%"
          src={car.images ? imgUrl + car.images[currentImg] : car.thumbnail}
          alt={`${car.brand}${car.model}image`}
        />
        <Box
          position="absolute"
          left="1rem"
          top="50%"
          transform="translateY(-50%)"
          display={currentImg == 0 ? "none" : "block"}
          onClick={() => {
            if (car.images && currentImg > 0) setCurrentImg(currentImg - 1);
          }}
        >
          <IoChevronBackCircle size="3rem" />
        </Box>
        <Box
          position="absolute"
          right="1rem"
          top="50%"
          transform="translateY(-50%)"
          display={
            car.images && currentImg == car.images?.length - 1
              ? "none"
              : "block"
          }
          onClick={() => {
            if (car.images && currentImg < car.images?.length - 1)
              setCurrentImg(currentImg + 1);
          }}
        >
          <IoChevronForwardCircle size="3rem" />
        </Box>
      </Box>
    </AspectRatio>
  );
};

export default ImageGallery;
