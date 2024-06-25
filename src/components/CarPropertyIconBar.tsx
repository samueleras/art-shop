import { Flex } from "@chakra-ui/react";

import { GiCarDoor } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { MdElectricCar } from "react-icons/md";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import CarPropertyIcon from "./CarPropertyIcon";
import Car from "../entities/Car";

interface Props {
  car: Car;
}

const CarPropertyIconBar = ({ car }: Props) => {
  return (
    <>
      <Flex gap={2} flexWrap="wrap">
        {car.passengerCount && car.passengerCount !== 0 && (
          <CarPropertyIcon icon={IoMdPerson} property={car.passengerCount} />
        )}
        <CarPropertyIcon icon={GiCarDoor} property={car.doorCount} />
        {car.gearbox === "manual" ? (
          <CarPropertyIcon icon={TbManualGearbox} property={car.gearbox} />
        ) : (
          <CarPropertyIcon icon={TbAutomaticGearbox} property={car.gearbox} />
        )}
        {car.electric === true && <CarPropertyIcon icon={MdElectricCar} />}
      </Flex>
    </>
  );
};

export default CarPropertyIconBar;
