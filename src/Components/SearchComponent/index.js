import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Paper from "@material-ui/core/Paper";

const CustomPaper = ({ props }) => {
  return (
    <Paper
      style={{ fontSize: "14px", fontWeight: 700 }}
      elevation={8}
      {...props}
    />
  );
};

const SearchComponent = ({ value, onChange }) => {
  return (
    <Autocomplete
      options={["Clothes", "Clothes"]}
      noOptionsText={"لا يوجد نتائج"}
      fullWidth
      sx={{ width: "250px" }}
      disableClearable
      PaperComponent={CustomPaper}
      renderInput={(params) => (
        <TextField
          value={value}
          onChange={onChange}
          color="secondary"
          className="search-bar"
          placeholder=""
          sx={{
            width: "250px",
            ".MuiOutlinedInput-root": {
              borderRadius: "32px",
              paddingRight: "5px !important",
              paddingTop: "10px",
              ".MuiOutlinedInput-root": {
                padding: "0px !important",
              },
            },
          }}
          {...params}
          InputProps={{
            ...params.InputProps,
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="large" />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
export default SearchComponent;
