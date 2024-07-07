import { CloseButton, Collapse, Flex, Input } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const SearchBar = ({ isOpen, onClick }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, []);

  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex backgroundColor={"teal.500"} shadow="md" padding=".5rem">
        <Input
          type="text"
          ref={inputRef}
          placeholder="Search..."
          variant="unstyled"
          color="gray.700"
          sx={{
            "::placeholder": {
              color: "gray.700",
            },
          }}
        />
        <CloseButton
          onClick={() => {
            onClick();
            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }}
        />
      </Flex>
    </Collapse>
  );
};

export default SearchBar;
