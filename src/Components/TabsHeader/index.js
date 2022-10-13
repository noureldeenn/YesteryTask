import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "../Container";

const Pages = [
  "Men",
  "Women",
  "Women",
  "Kids",
  "Best Sellers",
  "Best Sellers",
  "Offers",
];

const TabsHeader = () => {
  return (
    <Stack width="100%" sx={{ bgcolor: "grey.600" }}>
      <Container customSx={{ pt: "14px", pb: "4px" }}>
        <Stack direction="row" alignItems="center" spacing="115px">
          {Pages.map((item) => (
            <Typography
              variant="h5"
              color={item === "Offers" ? "#F11133" : "#ffff"}
              fontWeight="400px"
              sx={{ mx: "20px" }}
            >
              {item}
            </Typography>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};
export default TabsHeader;
