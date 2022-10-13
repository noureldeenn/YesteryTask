import React from "react";
import Stack from "@mui/material/Stack";

const Container = ({ children, customSx }) => {
  return (
    <Stack sx={{ width: "88%", mx: "auto", ...customSx }}>{children}</Stack>
  );
};
export default Container;
