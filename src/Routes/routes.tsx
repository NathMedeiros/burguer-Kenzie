import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRoutes from ".";
import { ProdProvider } from "../Contexts/ProdContext";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<AuthRoutes />}>
          <Route
            path="/home"
            element={
              <ProdProvider>
                <Home />
              </ProdProvider>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesPage;
