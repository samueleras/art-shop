import { Flex } from "@chakra-ui/react";

interface Props {
  count: number;
}

const NumberBadge = ({ count }: Props) => {
  return (
    <Flex
      borderRadius="full"
      width="1rem"
      height="1rem"
      backgroundColor="red"
      position="absolute"
      top="0"
      right="0"
      justifyContent="center"
      alignItems="center"
      fontSize=".7rem"
    >
      {count}
    </Flex>
  );
};

export default NumberBadge;
