import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Icon,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Text,
} from "@chakra-ui/react";
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
          <Text>Type</Text>
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
            defaultValue={query.carQuery.vehicleType}
          >
            <option value={undefined}>Any</option>
            <option value="coupe">Coupe</option>
            <option value="convertible">Convertible</option>
            <option value="suv">SUV</option>
          </Select>
        </Flex>
        <Flex gap={3} alignItems={"center"}>
          <Icon as={BiDollarCircle} color={"gray.700"} />
          <Text>
            {(query.carQuery.minPrice && query.carQuery.minPrice / 1000) || "0"}
            k$
          </Text>
          <RangeSlider
            aria-label={["min", "max"]}
            min={0}
            max={500000}
            defaultValue={[
              query.carQuery.minPrice || 0,
              query.carQuery.maxPrice || 500000,
            ]}
            step={5000}
            onChangeEnd={(value) => {
              query.setMinPrice(value[0]);
              value[1] === 500000
                ? query.setMaxPrice(undefined)
                : query.setMaxPrice(value[1]);
            }}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} boxSize="4" boxShadow="0 0 3px black" />
            <RangeSliderThumb index={1} boxSize="4" boxShadow="0 0 3px black" />
          </RangeSlider>
          <Text whiteSpace="nowrap">
            {!query.carQuery.maxPrice
              ? "no limit"
              : query.carQuery.maxPrice / 1000 + "k$"}
          </Text>
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
