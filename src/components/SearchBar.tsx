import { CloseButton, Collapse, Flex, Input } from "@chakra-ui/react";
import useCarQueryStore from "../stores/carqueryStore";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const SearchBar = ({ isOpen, onClick }: Props) => {
  const { setSearchText, carQuery } = useCarQueryStore();

  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex backgroundColor={"teal.500"} shadow="md" padding=".5rem">
        <Input
          type="text"
          placeholder="Search..."
          variant="unstyled"
          color="gray.700"
          sx={{
            "::placeholder": {
              color: "gray.700",
            },
          }}
          value={carQuery.searchText || ""}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <CloseButton
          onClick={() => {
            onClick();
            setSearchText("");
          }}
        />
      </Flex>
    </Collapse>
  );
};

export default SearchBar;
