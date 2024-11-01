import React from "react";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function AppRoutes() {
  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Routers>
  );
}
