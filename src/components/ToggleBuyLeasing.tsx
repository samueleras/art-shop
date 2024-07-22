import {
  Box,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import useCarQueryStore from "../stores/carqueryStore";

const ToggleBuyLeasing = () => {
  const {
    carQuery: { buyOrLease },
    toggleBuyOrLease,
  } = useCarQueryStore();

  return (
    <HStack w="10.5rem" gap={5}>
      <Box
        onClick={() => buyOrLease === "lease" && toggleBuyOrLease()}
        color={buyOrLease === "buy" ? "red.600" : ""}
        cursor="pointer"
        fontWeight="bold"
      >
        Buy
      </Box>
      <Slider
        defaultValue={0}
        min={0}
        max={1}
        step={1}
        onChange={toggleBuyOrLease}
        value={buyOrLease === "buy" ? 0 : 1}
      >
        <SliderTrack bg="red.600">
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={4} boxShadow="0 0 3px black" />
      </Slider>
      <Box
        onClick={() => buyOrLease === "buy" && toggleBuyOrLease()}
        color={buyOrLease === "lease" ? "red.600" : ""}
        cursor="pointer"
        fontWeight="bold"
      >
        Lease
      </Box>
    </HStack>
  );
};

export default ToggleBuyLeasing;
