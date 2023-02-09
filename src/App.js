import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountrySingle from "./components/CountrySingle";
import Home from "./components/Home";
import Layout from "./pages/Layout";

import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:single" element={<CountrySingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
