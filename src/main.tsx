import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes";
import theme from "./theme";
import useShoppingCartStore from "./stores/shoppingCartStore";

const queryClient = new QueryClient();

const App = () => {
  const { initializeItems } = useShoppingCartStore();

  // Initialisierung des Zustand-Stores
  React.useEffect(() => {
    initializeItems();
  }, [initializeItems]);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
