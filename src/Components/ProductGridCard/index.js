import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PriceComponent from "../PriceComponent";
import pic from "../../Images/Group.png";

const ProductGridCard = ({ title, price }) => {
  return (
    <Stack spacing={1} sx={{ cursor: "pointer", width: "254px", mb: "200px" }}>
      <Box
        sx={{
          opacity: 1,
          position: "relative",
          "&:hover .card-buttons": {
            opacity: 1,
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            width="254px"
            height="254px"
            objectFit="cover"
            src={pic}
            alt=""
          />
        </Box>
      </Box>

      <Typography
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          mb: "9px",
          WebkitBoxOrient: "vertical",
        }}
        variant="body1"
      >
        {title}
      </Typography>
      <Stack direction="row" alignItems="center">
        <PriceComponent price={price} />
      </Stack>
    </Stack>
  );
};

export default ProductGridCard;
