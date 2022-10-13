import * as React from "react";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadcrumbComponent = () => {
  return (
    <Stack
      sx={{
        borderBottom: "1px solid",
        borderColor: "grey.100",
      }}
    >
      <Stack
        sx={{
          width: "88%",
          mx: "auto",
          pt: "28px",
          pb: "14px",
        }}
      >
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Men
            </Link>
            <Link underline="hover" color="inherit" href="">
              Clotting
            </Link>
            <Link underline="hover" color="inherit" href="">
              Tops
            </Link>
            <Link underline="hover" color="inherit" href="">
              Adidas
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/"
              aria-current="page"
            >
              Adidas Black T-Shirt
            </Link>
          </Breadcrumbs>
        </div>
      </Stack>
    </Stack>
  );
};

export default BreadcrumbComponent;
