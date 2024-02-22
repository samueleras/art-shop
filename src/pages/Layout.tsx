import { Box } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Box p="0.5rem">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
