import {
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

const ToggleBuyLeasing = () => {
  return (
    <HStack w="12rem" gap={5}>
      <Text>Buy</Text>
      <Slider
        defaultValue={0}
        min={0}
        max={1}
        step={1}
        onChange={(value) => {}}
      >
        <SliderTrack bg="tomato">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Text>Lease</Text>
    </HStack>
  );
};

export default ToggleBuyLeasing;
