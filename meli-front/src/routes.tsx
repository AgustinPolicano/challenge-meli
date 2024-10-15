import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBox from "./components/searchBox/searchBox";
import ProductsSearched from "./components/productsSearched/productsSearched";
import ItemDetails from "./components/itemDetails/itemDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <SearchBox />
      <Routes>
        <Route path="/items" element={<ProductsSearched />} />
        <Route path="/items/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
