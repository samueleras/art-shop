import { Card, Divider, VStack } from "@chakra-ui/react";
import CarFilter from "./CarFilter";
import ToggleBuyLeasing from "./ToggleBuyLeasing";

const ShopControls = () => {
  return (
    <Card>
      <VStack align="start" padding={3}>
        <ToggleBuyLeasing />
        <Divider />
        <CarFilter />
      </VStack>
    </Card>
  );
};

export default ShopControls;
