import {
  Box,
  Button,
  Collapse,
  Heading,
  Input,
  Stack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const CartCouponCode = () => {
  const { isOpen, onToggle } = useDisclosure();

  const couponCodeRef = useRef<HTMLInputElement>(null);
  const couponValidationRef = useRef<HTMLInputElement>(null);

  const submitCoupon = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!couponCodeRef.current || couponCodeRef.current.value.trim() === "") {
      if (couponValidationRef.current) {
        couponValidationRef.current.textContent =
          "Please enter a coupon code...";
      }
    } else {
      if (couponValidationRef.current) {
        couponValidationRef.current.textContent = "Code not valid.";
      }
    }
    isOpen || onToggle();
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onToggle();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onToggle]);

  return (
    <form onSubmit={(event) => submitCoupon(event)}>
      <Stack gap="1rem">
        <Heading size="md">Coupon Code</Heading>
        <Input placeholder="Enter code..." ref={couponCodeRef} />
        <Button type="submit">Submit</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box color="red.600" fontWeight="bold" bg="white">
            <Text ref={couponValidationRef}>Code not valid.</Text>
          </Box>
        </Collapse>
      </Stack>
    </form>
  );
};

export default CartCouponCode;
