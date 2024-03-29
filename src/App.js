import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountrySingle from "./components/CountrySingle";
import Favourites from "./components/Favourites";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Home from "./components/Home";
import Layout from "./pages/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./auth/firebase";
import { ProtectedRoute } from "./auth/ProtectedRoute";

import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/countries" element={<Countries />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/countries/:country" element={<CountrySingle />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
