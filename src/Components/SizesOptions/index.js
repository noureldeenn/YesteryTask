import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  background: checked ? "#ECECEC" : "#ffff",
  padding: "10px",
  display: "flex",
  marginRight: 0,
  justifyContent: "center",
  alignItems: "center",
  ".MuiRadio-root": {
    display: "none",
  },
}));

const MyFormControlLabel = (props) => {
  const radioGroup = useRadioGroup();
  let checked = false;
  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }
  return <StyledFormControlLabel checked={checked} {...props} />;
};

const SizesOptions = ({ sizes, selectedSize }) => {
  const [value, setValue] = useState(selectedSize);

  return (
    <RadioGroup
      defaultValue="Small"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <Stack direction="row" spacing="16px">
        {sizes.map((value) => (
          <MyFormControlLabel
            sx={{
              height: "70px",
              width: "70px",
              borderRadius: "50%",
              "& .MuiFormControlLabel-label": {
                fontSize: "10px",
              },
            }}
            key={value}
            value={value}
            control={<Radio />}
            label={value}
          />
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default SizesOptions;
