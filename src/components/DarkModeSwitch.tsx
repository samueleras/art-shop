import { Button, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button background="none" onClick={toggleColorMode}>
      {colorMode == "light" ? (
        <MdDarkMode size="1.5rem" />
      ) : (
        <MdLightMode size="1.5rem" />
      )}
    </Button>
  );
};

export default DarkModeSwitch;
