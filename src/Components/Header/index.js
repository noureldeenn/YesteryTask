import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasketIcon from "../../Images/BasketIcon.svg";
import MenuIcon from "../../Images/MenuIcon.svg";
import PhoneIcon from "../../Images/PhoneIcon.svg";
import MapIcon from "../../Images/MapIcon.svg";
import YeshteryIcon from "../../Images/YeshteryIcon.svg";
import ArrowLeftIcon from "../../Images/ArrowLeftIcon.svg";
import ArrowRightIcon from "../../Images/ArrowRightIcon.svg";
import Container from "../Container";

const Header = () => {
  return (
    <Stack width="100%" sx={{ bgcolor: "secondary.light" }}>
      <Container customSx={{ py: "10px" }}>
        <Stack direction="row" alignItems="center">
          <Box sx={{ mr: "32px" }}>
            <img src={MenuIcon} alt="" />
          </Box>

          <Box>
            <img src={YeshteryIcon} alt="" />
          </Box>

          <Box sx={{ ml: "105px" }}>
            <img src={ArrowLeftIcon} alt="" />
          </Box>

          <Typography
            variant="h6"
            color="grey.600"
            fontWeight="400px"
            sx={{ mx: "20px" }}
          >
            Valentine’s Day Offers! Buy Two Get One Free Shop Now
          </Typography>

          <Box sx={{ mr: "55px" }}>
            <img src={ArrowRightIcon} alt="" />
          </Box>

          <Stack direction="row" alignItems="center" spacing="32px">
            <Stack direction="row" alignItems="center" spacing="10px">
              <img src={PhoneIcon} alt="" />
              <Typography
                variant="h6"
                color="grey.600"
                fontWeight="400px"
                sx={{ mr: "50px" }}
              >
                Contact Us
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing="10px">
              <img src={BasketIcon} alt="" />
              <Typography
                variant="h6"
                color="grey.600"
                fontWeight="400px"
                sx={{ mr: "50px" }}
              >
                Track Order
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing="10px">
              <img src={MapIcon} alt="" />
              <Typography
                variant="h6"
                color="grey.600"
                fontWeight="400px"
                sx={{ mr: "50px" }}
              >
                Find A Store
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Header;
