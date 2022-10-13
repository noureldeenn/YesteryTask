import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductsSlider from "../ProductsSlider";
import GalleryTabs from "../GalleryTabs";
import { productData } from "../data";
import { Container } from "@mui/material";

const ProductView = ({ quantity, setQuantity }) => {
  return (
    <Container customSx={{ pt: "30px", pb: "40px" }}>
      <GalleryTabs quantity={quantity} setQuantity={setQuantity} />
      <Stack sx={{ mt: "72px", mb: "24px" }}>
        <Typography color="primary.main" variant="h3">
          Similar Products
        </Typography>
        <Typography
          color="grey.100"
          variant="h5"
          sx={{ mt: "10px", fontWeight: "400px" }}
        >
          You may like these products also
        </Typography>
      </Stack>
      <ProductsSlider products={productData[0].relatedProducts} />
    </Container>
  );
};
export default ProductView;
