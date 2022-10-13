import React, { useMemo, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CartIcon from "../../Images/CartIcon.svg";
import AdidasIcon from "../../Images/AdidasIcon.svg";
import WishlistIcon from "../../Images/WishlistIcon.svg";
import UserIcon from "../../Images/UserIcon.svg";
import Container from "../Container";
import SearchComponent from "../SearchComponent";
import Drawer from "@mui/material/Drawer";
import pic from "../../Images/Group.png";
import PriceComponent from "../PriceComponent";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

const SearchHeader = ({ quantity }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [qty, setQty] = useState(0);
  const toggleDrawer = (state) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuOpen(state);
  };

  useMemo(() => {
    if (menuOpen === true) setQty(quantity + qty);
    return;
  }, [menuOpen]);

  
  return (
    <Stack width="100%" sx={{ bgcolor: "#ffff" }}>
      <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
        <Stack
          sx={{
            mt: "55px",
            mx: "30px",
            width: "472px",
          }}
        >
          <Typography
            width="100%"
            textAlign="center"
            color="primary.main"
            variant="h3"
          >
            My Cart
          </Typography>

          <Typography
            color="grey.600"
            variant="h5"
            sx={{ mt: "28px", mb: "18px", fontWeight: "400px" }}
          >
            Cart Summary
          </Typography>
          <Stack
            alignItems="start"
            direction="row"
            spacing="15px"
            sx={{
              p: "15px",
              width: "472px",
              border: "1px solid",
              borderColor: "grey.100",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                position: "relative",
              }}
            >
              <img
                width="104px"
                height="104px"
                objectFit="cover"
                src={pic}
                alt=""
              />
            </Box>
            <Stack spacing="8px" width="100%">
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  mb: "9px",
                  WebkitBoxOrient: "vertical",
                  maxWidth: "274px",
                }}
                variant="body1"
              >
                Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
                adipiscing elit.
              </Typography>
              <Typography variant="body2" color="grey.300" fontWeight="400px">
                Quantity: {qty}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <PriceComponent price="999.9" />
                <Button
                  variant="contained"
                  sx={{
                    width: "80px",
                    height: "24px",
                    borderRadius: "12px",
                    fontSize: "10px",
                    bgcolor: "secondary.main",
                    color: "grey.600",
                    fontWeight: "600px",
                  }}
                >
                  Remove
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing="18px"
            sx={{ mt: "20px" }}
          >
            <Typography
              color="grey.600"
              variant="h4"
              sx={{ fontWeight: "600px" }}
            >
              Total: 19,999 LE
            </Typography>
            <Stack direction="row" alignItems="center" spacing="12px">
              <Button
                variant="contained"
                sx={{
                  width: "196px",
                  height: "48px",
                  borderRadius: "27px",
                  bgcolor: "primary.main",
                  fontSize: "12px",
                  fontWeight: "600px",
                }}
              >
                Review Cart
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "196px",
                  height: "48px",
                  borderRadius: "27px",
                  fontSize: "12px",
                  bgcolor: "secondary.main",
                  color: "grey.600",
                  fontWeight: "600px",
                }}
              >
                Complete Checkout
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
      <Container customSx={{ py: "14px" }}>
        <Stack direction="row" alignItems="center">
          <SearchComponent />

          <Box sx={{ mr: "225px", ml: "190px" }}>
            <img src={AdidasIcon} alt="" />
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            spacing="32px"
            sx={{
              cursor: "pointer",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing="10px"
              onClick={toggleDrawer(true)}
            >
              <Badge badgeContent={qty} sx={{ color: "secondary.main" }}>
                <img src={CartIcon} alt="" />
              </Badge>
              <Typography
                variant="h6"
                color="grey.600"
                fontWeight="400px"
                sx={{ mr: "50px" }}
              >
                Cart
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing="10px">
              <img src={WishlistIcon} alt="" />
              <Typography
                variant="h6"
                color="grey.600"
                fontWeight="400px"
                sx={{ mr: "50px" }}
              >
                Wishlist
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing="10px">
              <img src={UserIcon} alt="" />
              <Typography
                variant="h6"
                color="grey.600"
                fontWeight="400px"
                sx={{ mr: "50px" }}
              >
                Login
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default SearchHeader;
