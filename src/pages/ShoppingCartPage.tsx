import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  Spinner,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import CartCheckout from "../components/CartCheckout";
import CartCouponCode from "../components/CartCouponCode";
import CartShipping from "../components/CartShipping";
import ShoppingCartItemBox from "../components/ShoppingCartItemBox";
import useCarBulk from "../hooks/useCarsBulk";
import useShoppingCartStore from "../stores/shoppingCartStore";

const ShoppingCartPage = () => {
  const { items, overallItemCount, updateItems } = useShoppingCartStore();

  let ids = items.map((item) => item.carId);

  if (ids.length > 0) {
    const { data: cars, error, isFetching } = useCarBulk(ids);

    useEffect(() => {
      if (cars) {
        updateItems(cars); // Update the store with fetched cars after fetch finished
      }
    }, [cars, updateItems]);

    if (isFetching) {
      return (
        <Box>
          <Spinner size="xl" />
        </Box>
      );
    }

    if (error) throw error;
  }

  return (
    <Box padding="2rem" margin="auto" width={{ base: "100%", xl: "80%" }}>
      <Heading size="xl">Shopping Cart</Heading>
      <Text>
        <b>{overallItemCount} items</b> in your cart.
      </Text>
      <Grid
        gap={3}
        gridTemplateColumns={{ base: "1fr", lg: "auto min-content" }}
        alignItems="start"
      >
        <Card marginTop="2rem">
          <CardHeader display={{ base: "none", md: "block" }}>
            <Grid gap={3} gridTemplateColumns="50% 20% 30%">
              <Heading size="md">Product</Heading>
              <Heading size="md" justifySelf="center">
                Quantity
              </Heading>
              <Heading size="md" justifySelf="center">
                Total Price
              </Heading>
            </Grid>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {items.length > 0 ? (
                items.map((item) => (
                  <ShoppingCartItemBox
                    item={item}
                    key={item.carId + item.buyOrLease}
                  />
                ))
              ) : (
                <Text>There are no products in your cart.</Text>
              )}
            </Stack>
          </CardBody>
        </Card>
        <Card marginTop={{ base: "1rem", lg: "-4rem" }}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <CartShipping />
              <CartCouponCode />
              <CartCheckout />
            </Stack>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
};

export default ShoppingCartPage;
