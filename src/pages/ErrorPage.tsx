import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box padding="0.5rem">
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : `An unexpected error occured. ${error}`}
      </Text>
    </Box>
  );
};

export default ErrorPage;
