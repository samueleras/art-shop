import {
  Box,
  Button,
  Collapse,
  Grid,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import priceTagFormatter from "../services/priceTagFormatter";
import { useEffect } from "react";
import useShoppingCartStore from "../stores/shoppingCartStore";

const CartCheckout = () => {
  const { overallCosts, overallShippingCosts } = useShoppingCartStore();

  const { isOpen, onToggle } = useDisclosure();

  const submitCheckout = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    isOpen || onToggle();
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onToggle();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onToggle]);
  return (
    <Stack gap="1rem">
      <Heading size="md">Cart Total</Heading>
      <Grid
        gridTemplateColumns="1fr auto"
        alignItems="center"
        rowGap="0.3rem"
        columnGap="0.6rem"
      >
        <Text whiteSpace="nowrap">One-Time Cost:</Text>
        <Text whiteSpace="nowrap">
          ${priceTagFormatter(overallCosts.oneTimeCost)}
        </Text>
        <Text whiteSpace="nowrap">Monthly Cost:</Text>
        <Text whiteSpace="nowrap">
          ${priceTagFormatter(overallCosts.monthlyCosts)}
        </Text>
        <Text whiteSpace="nowrap">Shipping:</Text>
        <Text whiteSpace="nowrap">
          ${priceTagFormatter(overallShippingCosts)}
        </Text>
        <Text whiteSpace="nowrap">
          Total{overallCosts.monthlyCosts != 0 && " (2 Years)"}:
        </Text>
        <Text whiteSpace="nowrap">
          $
          {priceTagFormatter(
            overallCosts.oneTimeCost +
              overallCosts.monthlyCosts +
              overallShippingCosts
          )}
        </Text>
      </Grid>
      <Stack gap="1rem">
        <Button onClick={(event) => submitCheckout(event)}>Checkout</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box color="red.600" fontWeight="bold" bg="white">
            <Text>
              This is a project website, not an actual shop. No checkout
              possible.
            </Text>
          </Box>
        </Collapse>
      </Stack>
    </Stack>
  );
};

export default CartCheckout;
