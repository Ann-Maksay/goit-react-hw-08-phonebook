import React from "react";

import Navbar from "react-bootstrap/Navbar";

import MainNav from "./Navigation/MainNav";
import AuthNav from "./Navigation/AuthNav";

const AppBar = () => {
  return (
    <header>
      <Navbar bg="light" variant="light">
        <MainNav />
        <AuthNav />
      </Navbar>
    </header>
  );
};

export default AppBar;
