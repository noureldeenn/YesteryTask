import React from "react";
import Stack from "@mui/material/Stack";
import { productData } from "../data";
import InfoBox from "../InfoBox";
import DetailedProductSlider from "../DetailedProductSlider";

const GalleryTabs = ({ quantity, setQuantity }) => {
  return (
    <Stack
      direction="row"
      alignItems="start"
      spacing="64px"
      sx={{ mt: "60px" }}
    >
      <DetailedProductSlider />

      <InfoBox
        quantity={quantity}
        setQuantity={setQuantity}
        name={productData?.[0]?.name}
        id={productData?.[0]?.id}
        price={productData?.[0]?.price}
        specialPrice={productData?.[0]?.specialPrice}
        rate={productData?.[0]?.rate}
        off={productData?.[0]?.off}
        rateNumbers={productData?.[0]?.rateNumbers}
        sizes={productData?.[0]?.sizes}
        category={productData?.[0]?.category}
      />
    </Stack>
  );
};
export default GalleryTabs;
