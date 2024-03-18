import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  property?: string | number;
}

const CarPropertyIcon = ({ icon, property }: Props) => {
  return (
    <HStack backgroundColor="gray.100" borderRadius="1rem" paddingInline={2}>
      <Icon as={icon} color={"gray.600"} />
      {property && <Text color="black">{property}</Text>}
    </HStack>
  );
};

export default CarPropertyIcon;
