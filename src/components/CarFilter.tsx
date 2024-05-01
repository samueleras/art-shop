import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  useColorModeValue,
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
  const color = useColorModeValue("gray.700", "gray.100");

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
          <Icon as={FaCar} color={color} />
          <Text fontSize="lg">Type</Text>
          <Select
            onChange={(event) => {
              query.setVehicleType(
                event.target.value == "any"
                  ? undefined
                  : (event.target.value as
                      | undefined
                      | "coupe"
                      | "convertible"
                      | "suv")
              );
            }}
            defaultValue={query.carQuery.vehicleType}
          >
            <option value="any">Any</option>
            <option value="coupe">Coupe</option>
            <option value="convertible">Convertible</option>
            <option value="suv">SUV</option>
          </Select>
        </Flex>

        <Flex gap={3} alignItems={"center"}>
          <Icon as={BiDollarCircle} color={color} />
          <Text minWidth="2.7rem" textAlign="right">
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
            onChange={(value) => {
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
          <Text whiteSpace="nowrap" minWidth="3.5rem">
            {!query.carQuery.maxPrice
              ? "no limit"
              : query.carQuery.maxPrice / 1000 + "k$"}
          </Text>
        </Flex>

        <Flex gap={3} alignItems={"center"}>
          <Icon as={IoMdPerson} color={color} />
          <Text fontSize="lg">Seats</Text>
          <RadioGroup
            value={query.carQuery.passengerCount?.toString() || "any"}
            onChange={(value) => {
              query.setPassengerCount(parseInt(value) || undefined);
            }}
          >
            <Flex gap={2}>
              <Radio value="2">2</Radio>
              <Radio value="4">4</Radio>
              <Radio value="any">Any</Radio>
            </Flex>
          </RadioGroup>
        </Flex>

        <Flex gap={3} alignItems={"center"}>
          <Icon as={GiCarDoor} color={color} />
          <Text fontSize="lg">Doors</Text>
          <RadioGroup
            value={query.carQuery.doorCount?.toString() || "any"}
            onChange={(value) => {
              query.setDoorCount(parseInt(value) || undefined);
            }}
          >
            <Flex gap={2}>
              <Radio value="2">2</Radio>
              <Radio value="4">4</Radio>
              <Radio value="any">Any</Radio>
            </Flex>
          </RadioGroup>
        </Flex>

        <Flex gap={3} alignItems={"center"}>
          <Icon as={TbManualGearbox} color={color} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            color={
              query.carQuery.gearboxType == "automatic" ? "gray.500" : color
            }
            fontWeight="normal"
            onClick={() => query.setGearboxType("manual")}
          >
            {"Manual"}
          </Button>
          {query.carQuery.gearboxType == "manual" && (
            <CloseIcon
              boxSize={3.5}
              cursor="pointer"
              onClick={() => query.setGearboxType(undefined)}
            />
          )}
        </Flex>

        <Flex gap={3} alignItems={"center"}>
          <Icon as={TbAutomaticGearbox} color={color} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            color={query.carQuery.gearboxType == "manual" ? "gray.500" : color}
            fontWeight="normal"
            onClick={() => query.setGearboxType("automatic")}
          >
            {"Automatic"}
          </Button>
          {query.carQuery.gearboxType == "automatic" && (
            <CloseIcon
              boxSize={3.5}
              cursor="pointer"
              onClick={() => query.setGearboxType(undefined)}
            />
          )}
        </Flex>

        <Flex gap={3} alignItems={"center"}>
          <Icon as={GiHorseHead} color={color} />
          <Text
            fontSize="lg"
            color={query.carQuery.minHorsePower ? color : "gray.500"}
          >
            Horsepower
          </Text>
          <Slider
            value={
              query.carQuery.minHorsePower
                ? query.carQuery.minHorsePower / 20
                : 0
            }
            onChange={(val) =>
              query.setMinHorsePower(val > 0 ? val * 20 : undefined)
            }
          >
            <SliderMark
              value={
                query.carQuery.minHorsePower
                  ? query.carQuery.minHorsePower / 20
                  : 1
              }
              textAlign="center"
              mt="-8"
              ml="-50"
              w="24"
              visibility={
                query.carQuery.minHorsePower && query.carQuery.minHorsePower > 1
                  ? "visible"
                  : "hidden"
              }
            >
              {query.carQuery.minHorsePower}+HP
            </SliderMark>

            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>

        <Flex gap={3} alignItems={"center"}>
          <Icon as={MdElectricCar} color={color} />
          <Button
            fontSize="lg"
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            color={query.carQuery.onlyElectric ? color : "gray.500"}
            fontWeight="normal"
            onClick={() => query.setOnlyElectric(true)}
          >
            {"Electric Cars Only"}
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
