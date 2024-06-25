import { Flex, Icon, ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface Props {
  children: ReactNode;
  icon: IconType;
  color: ResponsiveValue<string>;
}

const FilterContainer = ({ children, icon, color }: Props) => {
  return (
    <Flex gap={3} alignItems={"center"}>
      <Icon as={icon} color={color} />
      {children}
    </Flex>
  );
};

export default FilterContainer;
