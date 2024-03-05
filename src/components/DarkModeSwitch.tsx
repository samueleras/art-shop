import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" alignItems="center" h="100%" gap="1rem" w="">
      <Switch
        id="darkmode"
        colorScheme="green"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark" ? true : false}
      />

      <FormLabel htmlFor="darkmode" mb="0" whiteSpace={"nowrap"}>
        Dark Mode
      </FormLabel>
    </FormControl>
  );
};

export default DarkModeSwitch;
