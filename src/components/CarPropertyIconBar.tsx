import { Flex } from "@chakra-ui/react";

import { GiCarDoor } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { MdElectricCar } from "react-icons/md";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import CarPropertyIcon from "./CarPropertyIcon";

interface Props {
  car: {
    doors?: number;
    passengers?: number;
    transmission?: string;
    isElectric?: boolean;
  };
}

const CarPropertyIconBar = ({ car }: Props) => {
  return (
    <>
      <Flex gap={2}>
        {car.passengers && car.passengers !== 0 && (
          <CarPropertyIcon icon={IoMdPerson} property={car.passengers} />
        )}
        <CarPropertyIcon icon={GiCarDoor} property={car.doors} />
        {car.transmission === "manual" ? (
          <CarPropertyIcon icon={TbManualGearbox} property={car.transmission} />
        ) : (
          <CarPropertyIcon
            icon={TbAutomaticGearbox}
            property={car.transmission}
          />
        )}
        {car.isElectric === true && <CarPropertyIcon icon={MdElectricCar} />}
      </Flex>
    </>
  );
};

export default CarPropertyIconBar;
