import React from "react";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const RatingStar = ({
  name,
  readOnly,
  precision,
  disabled,
  size,
  rateValue,
  max,
  handleRateChange,
}) => {
  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-icon": {
      fontSize: "19px",
    },
    "& .MuiRating-iconEmpty": {
      color: theme.palette.secondary.main,
    },
    "& .MuiRating-iconFilled": {
      color: theme.palette.secondary.main,
    },
    "& .MuiRating-iconHover": {
      color: theme.palette.secondary.dark,
    },
  }));

  return (
    <StyledRating
      name={name}
      value={rateValue}
      disabled={disabled}
      readOnly={readOnly}
      precision={precision}
      size={size}
      max={max}
      onChange={(event, newValue) =>
        handleRateChange && handleRateChange(event, newValue)
      }
    />
  );
};

export default RatingStar;
