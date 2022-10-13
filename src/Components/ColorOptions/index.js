import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import productImg from "../../Images/Group.png";

const ColorOptions = () => {
  return (
    <Stack direction="row" spacing="16px">
      {[productImg, productImg].map((value) => (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            borderRadius: "50%",
          }}
        >
          <img
            src={value}
            alt=""
            style={{ height: "70px", width: "70px", borderRadius: "50%" }}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default ColorOptions;
