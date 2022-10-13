import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const Quantity = ({ quantity, setQuantity }) => {
  const Button = styled("button")(() => ({
    backgroundColor: "#F5F5F5",
    border: ".5px solid #D9D9D9",
    borderRadius: "24px",
    cursor: "pointer",
    height: "48px",
    padding: "0 10px",
  }));

  const ButtonLeft = styled(Button)(() => ({
    borderRadius: "50%",
    border: "0px",
    backgroundColor: " #FFF200",
    width: "37px",
    height: "37px",
  }));

  const ButtonRight = styled(Button)(() => ({
    borderRadius: "50%",
    border: "0px",
    backgroundColor: " #FFF200",
    width: "37px",
    height: "37px",
  }));

  const Input = styled("input")(() => ({
    border: "none",
    fontSize: "1.4rem",
    outline: "none",
    width: "166px",
    height: "40px",
    backgroundColor: "#F5F5F5",
    textAlign: "center",
  }));

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#F5F5F5",
        border: ".5px solid #D9D9D9",
        borderRadius: "24px",
        cursor: "pointer",
        height: "48px",
        width: "252px",
      }}
    >
      <ButtonLeft onClick={decreaseQuantity}>-</ButtonLeft>
      <Input type="number" value={quantity} />
      <ButtonRight onClick={increaseQuantity}>+</ButtonRight>
    </Stack>
  );
};

export default Quantity;
