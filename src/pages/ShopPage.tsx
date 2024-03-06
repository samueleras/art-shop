import { Grid, GridItem } from "@chakra-ui/react";
import CarGrid from "../components/CarGrid";
import ShopControls from "../components/ShopControls";

const ShopPage = () => {
  return (
    <Grid width="100%" justifyItems="center">
      <Grid
        width={{ base: "100%", xl: "80%" }}
        marginTop={3}
        gridTemplateColumns={{ base: "1fr", md: "25% auto" }}
        templateAreas={{
          base: `"controls" "carGrid"`,
          md: `"controls carGrid"`,
        }}
        gap={3}
      >
        <GridItem area={"controls"}>
          <ShopControls />
        </GridItem>
        <GridItem area={"carGrid"}>
          <CarGrid />
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default ShopPage;
