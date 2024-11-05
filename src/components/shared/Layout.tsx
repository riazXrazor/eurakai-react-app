import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
