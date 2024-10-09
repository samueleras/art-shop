import { Box, useDisclosure } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { Outlet, ScrollRestoration, useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ErrorPage from "./ErrorPage";

const Layout = () => {
  const { isOpen, onToggle } = useDisclosure();
  const error = useRouteError();

  return (
    <>
      <NavigationBar toggleSearchbar={onToggle} searchbarOpened={isOpen} />
      <Box marginBottom="4rem" marginTop={{ base: "8rem", sm: "4rem" }}>
        <SearchBar isOpen={isOpen} onClick={onToggle} />
        {error ? <ErrorPage /> : <Outlet />}
      </Box>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
