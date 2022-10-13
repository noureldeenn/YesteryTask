import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rate from "../RatingStar";
import PriceComponent from "../PriceComponent";
import SizesOptions from "../SizesOptions";
import Quantity from "../Quantity";
import ColorOptions from "../ColorOptions";
import AdidasMiniIcon from "../../Images/AdidasMiniIcon.svg";

const InfoBox = ({
  quantity,
  setQuantity,
  name,
  price,
  specialPrice,
  off,
  rate,
  rateNumbers,
  sizes,
  category,
}) => {
  return (
    <Stack gap={1} width="100%">
      <Box>
        <img src={AdidasMiniIcon} alt="" />
      </Box>
      <Typography
        color="grey.400"
        variant="h5"
        sx={{
          mt: "15px",
          maxWidth: "395px",
        }}
      >
        {name}
      </Typography>
      <Typography color="grey.100" variant="h6">
        {category}
      </Typography>

      <Stack
        spacing="20px"
        sx={{
          my: "12px",
          pb: "20px",
          borderBottom: "1px solid",
          borderColor: "grey.100",
        }}
      >
        <Stack direction="row" alignItems="center" spacing="16px">
          <Rate
            name="rate"
            rateValue={rate || 0}
            size="large"
            readOnly={true}
          />
          <Typography variant="h5" color="grey.600">
            {rate} of 5
          </Typography>
          <Typography color="grey.300" variant="h6">
            {rateNumbers}
          </Typography>
        </Stack>
        <PriceComponent off={off} price={price} specialPrice={specialPrice} />
      </Stack>

      <Stack spacing="9px" sx={{ mt: "5px" }}>
        <Typography variant="h5" color="grey.400">
          Size
        </Typography>
        <SizesOptions sizes={sizes} />
      </Stack>
      <Stack spacing="9px" sx={{ mt: "44px" }}>
        <Typography variant="h5" color="grey.400">
          Color
        </Typography>
        <ColorOptions />
      </Stack>
      <Stack spacing="9px" sx={{ mt: "44px" }}>
        <Typography variant="h5" color="grey.400">
          Quantity
        </Typography>
        <Quantity quantity={quantity} setQuantity={setQuantity} />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing="36px"
        sx={{ mt: "32px" }}
      >
        <Button
          variant="contained"
          sx={{
            width: "252px",
            height: "54px",
            borderRadius: "27px",
            bgcolor: "primary.main",
            fontSize: "16px",
            fontWeight: "600px",
          }}
        >
          ADD TO CART
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "252px",
            height: "54px",
            borderRadius: "27px",
            fontSize: "16px",
            bgcolor: "secondary.main",
            color: "grey.600",
            fontWeight: "600px",
          }}
        >
          Pickup From Store
        </Button>
      </Stack>
    </Stack>
  );
};
export default InfoBox;
