import React, { useState } from "react";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import ProductView from "../Components/ProductView";
import Header from "../Components/Header";
import CustomTheme from "../theme";
import SearchHeader from "../Components/SearchHeader";
import TabsHeader from "../Components/TabsHeader";
import BreadcrumbComponent from "../Components/BreadcrumbComponent";

function App() {
  const [quantity, setQuantity] = useState(0);
  return (
    <ThemeProvider theme={CustomTheme}>
      <Stack>
        <Header />
        <SearchHeader  quantity={quantity}/>
        <TabsHeader/>
        <BreadcrumbComponent />
        <ProductView quantity={quantity} setQuantity={setQuantity} />
      </Stack>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
