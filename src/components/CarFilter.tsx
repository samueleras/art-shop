import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
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
import { BiDollarCircle } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { GiCarDoor, GiHorseHead } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { MdElectricCar } from "react-icons/md";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import useCarQueryStore from "../stores/carqueryStore";
import FilterContainer from "./FilterContainer";

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
        padding="0.5rem"
      >
        <FilterContainer icon={FaCar} color={color}>
          <Text>Type</Text>
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
            value={query.carQuery.vehicleType || "any"}
          >
            <option value="any">Any</option>
            <option value="coupe">Coupe</option>
            <option value="convertible">Convertible</option>
            <option value="suv">SUV</option>
          </Select>
        </FilterContainer>

        <FilterContainer icon={BiDollarCircle} color={color}>
          <Text minWidth="2.7rem" textAlign="right">
            {(query.carQuery.minPrice && query.carQuery.minPrice / 1000) || "0"}
            k$
          </Text>
          <RangeSlider
            aria-label={["min", "max"]}
            min={0}
            max={500000}
            value={[
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
          <Text whiteSpace="nowrap" minWidth="5rem">
            {!query.carQuery.maxPrice
              ? "no limit"
              : query.carQuery.maxPrice / 1000 + "k$"}
          </Text>
        </FilterContainer>

        <FilterContainer icon={IoMdPerson} color={color}>
          <Text>Seats</Text>
          <RadioGroup
            value={query.carQuery.passengerCount?.toString() || "any"}
            onChange={(value) => {
              query.setPassengerCount(parseInt(value) || undefined);
            }}
          >
            <Flex gap={2}>
              <Radio value="2">
                <Text fontSize="0.9rem">2</Text>
              </Radio>
              <Radio value="4">
                <Text fontSize="0.9rem">4</Text>
              </Radio>
              <Radio value="any">
                <Text fontSize="0.9rem">Any</Text>
              </Radio>
            </Flex>
          </RadioGroup>
        </FilterContainer>

        <FilterContainer icon={GiCarDoor} color={color}>
          <Text>Doors</Text>
          <RadioGroup
            value={query.carQuery.doorCount?.toString() || "any"}
            onChange={(value) => {
              query.setDoorCount(parseInt(value) || undefined);
            }}
          >
            <Flex gap={2}>
              <Radio value="2">
                <Text fontSize="0.9rem">2</Text>
              </Radio>
              <Radio value="4">
                <Text fontSize="0.9rem">4</Text>
              </Radio>
              <Radio value="any">
                <Text fontSize="0.9rem">Any</Text>
              </Radio>
            </Flex>
          </RadioGroup>
        </FilterContainer>

        <FilterContainer icon={TbManualGearbox} color={color}>
          <Button
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
        </FilterContainer>

        <FilterContainer icon={TbAutomaticGearbox} color={color}>
          <Button
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
        </FilterContainer>

        <FilterContainer icon={GiHorseHead} color={color}>
          <Text color={query.carQuery.minHorsePower ? color : "gray.500"}>
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
              fontSize="0.8rem"
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
        </FilterContainer>

        <FilterContainer icon={MdElectricCar} color={color}>
          <Button
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
        </FilterContainer>
      </Flex>
      <Button
        colorScheme="red"
        mt={5}
        onClick={() => {
          query.setVehicleType(undefined);
          query.setMinPrice(0);
          query.setMaxPrice(undefined);
          query.setPassengerCount(undefined);
          query.setDoorCount(undefined);
          query.setGearboxType(undefined);
          query.setMinHorsePower(0);
          query.setOnlyElectric(undefined);
        }}
      >
        Reset
      </Button>
    </>
  );
};

export default CarFilter;
