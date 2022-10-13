import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const PriceComponent = ({ off, price, specialPrice }) => {
  return specialPrice ? (
    <Stack direction="row" alignItems="center" gap="20px" flexWrap="wrap">
      <Stack direction="row" alignItems="center" gap="2px">
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            fontWeight: "600",
          }}
        >
          {price}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: "9px",
            color: "primary.main",
            fontWeight: "600",
          }}
        >
          LE
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        gap="2px"
        sx={{
          textDecoration: "line-through",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "grey.100",
            fontWeight: "400",
          }}
        >
          {price}
        </Typography>
        <Typography variant="body2" sx={{ color: "grey.100" }}>
          LE
        </Typography>
      </Stack>
      <Stack sx={{ bgcolor: "secondary.main", p: "5px" }}>
        <Typography
          variant="h6"
          sx={{
            color: "grey.600",
            fontWeight: "400",
            borderRadius: '3px'
          }}
        >
          {off}
        </Typography>
      </Stack>
    </Stack>
  ) : (
    <Stack direction="row" alignItems="center" gap="2px">
      <Typography
        variant="h4"
        sx={{
          color: "primary.main",
          fontWeight: "600",
        }}
      >
        {price}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mt: "9px",
          color: "primary.main",
          fontWeight: "600",
        }}
      >
        LE
      </Typography>
    </Stack>
  );
};
export default PriceComponent;
