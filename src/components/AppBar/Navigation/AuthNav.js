import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import routes from "../../../routes";

const AuthNav = () => {
  return (
    <Nav variant="pills" as="ul">
      <Nav.Item as="li">
        <NavLink exact to={routes.register}>
          Register
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink to={routes.login}>Login</NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default AuthNav;
