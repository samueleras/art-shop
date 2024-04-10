import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Icon, Select } from "@chakra-ui/react";
import useCarQueryStore from "../carquery/store";
import { GiCarDoor } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { MdElectricCar } from "react-icons/md";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import { BiDollarCircle } from "react-icons/bi";
import { GiHorseHead } from "react-icons/gi";
import { FaCar } from "react-icons/fa";

const CarFilter = () => {
  //get List of Filters including icons
  // const { data, error, isFetching } = useFilters();
  const query = useCarQueryStore();

  //if (error) throw error;

  return (
    <>
      <Heading as="h2" size="lg" marginTop={3}>
        Filter
      </Heading>
      <Flex
        marginTop={3}
        gap={3}
        justifyContent="space-between"
        flexDir={"column"}
      >
        <Flex gap={3} alignItems={"center"}>
          <Icon as={FaCar} color={"gray.700"} />
          Type
          <Select
            onChange={(event) =>
              query.setVehicleType(
                event.target.value as
                  | undefined
                  | "coupe"
                  | "convertible"
                  | "suv"
              )
            }
          >
            <option
              value={undefined}
              selected={query.carQuery.vehicleType === undefined}
            >
              Any
            </option>
            <option
              value="coupe"
              selected={query.carQuery.vehicleType === "coupe"}
            >
              Coupe
            </option>
            <option
              value="convertible"
              selected={query.carQuery.vehicleType === "convertible"}
            >
              Convertible
            </option>
            <option value="suv" selected={query.carQuery.vehicleType === "suv"}>
              SUV
            </option>
          </Select>
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Icon as={BiDollarCircle} color={"gray.700"} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            onClick={() => query.setOnlyElectric(true)}
          >
            {"Price"}
          </Button>
          {query.carQuery.onlyElectric && (
            <CloseIcon
              boxSize={3.5}
              cursor="pointer"
              onClick={() => query.setOnlyElectric(undefined)}
            />
          )}
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Icon as={IoMdPerson} color={"gray.700"} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            onClick={() => query.setOnlyElectric(true)}
          >
            {"Seats"}
          </Button>
          {query.carQuery.onlyElectric && (
            <CloseIcon
              boxSize={3.5}
              cursor="pointer"
              onClick={() => query.setOnlyElectric(undefined)}
            />
          )}
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Icon as={GiCarDoor} color={"gray.700"} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            onClick={() => query.setOnlyElectric(true)}
          >
            {"Doors"}
          </Button>
          {query.carQuery.onlyElectric && (
            <CloseIcon
              boxSize={3.5}
              cursor="pointer"
              onClick={() => query.setOnlyElectric(undefined)}
            />
          )}
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Icon as={TbManualGearbox} color={"gray.700"} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            onClick={() => query.setOnlyElectric(true)}
          >
            {"Manual"}
          </Button>
          {query.carQuery.onlyElectric && (
            <CloseIcon
              boxSize={3.5}
              cursor="pointer"
              onClick={() => query.setOnlyElectric(undefined)}
            />
          )}
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Icon as={TbAutomaticGearbox} color={"gray.700"} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            onClick={() => query.setOnlyElectric(true)}
          >
            {"Automatic"}
          </Button>
          {query.carQuery.onlyElectric && (
            <CloseIcon
              boxSize={3.5}
              cursor="pointer"
              onClick={() => query.setOnlyElectric(undefined)}
            />
          )}
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Icon as={GiHorseHead} color={"gray.700"} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            onClick={() => query.setOnlyElectric(true)}
          >
            {"Horsepower"}
          </Button>
          {query.carQuery.onlyElectric && (
            <CloseIcon
              boxSize={3.5}
              cursor="pointer"
              onClick={() => query.setOnlyElectric(undefined)}
            />
          )}
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Icon as={MdElectricCar} color={"gray.700"} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            onClick={() => query.setOnlyElectric(true)}
          >
            {"Electric"}
          </Button>
          {query.carQuery.onlyElectric && (
            <CloseIcon
              boxSize={3.5}
              cursor="pointer"
              onClick={() => query.setOnlyElectric(undefined)}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default CarFilter;
