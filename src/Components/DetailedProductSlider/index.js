import React, { useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
import Thumbnails from "./Thumbnails";
import Box from "@mui/material/Box";
import pic from "../../Images/tshirt2.webp";

const images = [
  { id: 1, src: pic },
  { id: 2, src: pic },
  { id: 3, src: pic },
  { id: 4, src: pic },
  { id: 5, src: pic },
];

const ComponentsProductSlider = () => {
  const [imgSrc, setImageSrc] = useState(pic);

  return (
    <Box style={{ width: "586px" }}>
      <SideBySideMagnifier
        fillGapBottom={20}
        fillAlignTop
        fillGapLeft={20}
        fillGapRight={200}
        fillGapTop={20}
        imageSrc={imgSrc}
      />

      <Box style={{ marginTop: "14px", width: "100%" }}>
        <Thumbnails images={images} setImageSrc={setImageSrc} />
      </Box>
    </Box>
  );
};
export default ComponentsProductSlider;
