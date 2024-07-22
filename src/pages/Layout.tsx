import { Box, useDisclosure } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const Layout = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <NavigationBar toggleSearchbar={onToggle} searchbarOpened={isOpen} />
      <Box marginBottom="4rem" marginTop={{ base: "8rem", sm: "4rem" }}>
        <SearchBar isOpen={isOpen} onClick={onToggle} />
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
