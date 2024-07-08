import {
  Box,
  Card,
  Divider,
  Flex,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { TbFilterSearch } from "react-icons/tb";
import CarFilter from "./CarFilter";
import CarFilterModal from "./CarFilterModal";
import ToggleBuyLeasing from "./ToggleBuyLeasing";

const ShopControls = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card>
      <VStack align="start" padding={3}>
        <Flex justifyContent="space-between" width="100%" alignItems="center">
          <ToggleBuyLeasing />
          <Box
            background="none"
            cursor="pointer"
            onClick={onOpen}
            display={{ sm: "block", lg: "none" }}
          >
            <TbFilterSearch size="1.5rem" />
          </Box>
        </Flex>

        <Box display={{ base: "none", lg: "block" }} width="100%">
          <Divider />
          <CarFilter />
        </Box>
        <CarFilterModal isOpen={isOpen} onClose={onClose} />
      </VStack>
    </Card>
  );
};

export default ShopControls;
