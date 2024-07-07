import { Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const SearchButton = ({ onClick }: Props) => {
  return (
    <Button background="none" onClick={onClick}>
      <FaSearch size="1.3rem" />
    </Button>
  );
};

export default SearchButton;
