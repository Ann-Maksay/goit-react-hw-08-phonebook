import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import routes from "../../../routes";

const MainNav = () => {
  return (
    <Nav className="mr-auto">
      <Nav.Item>
        <NavLink exact to={routes.home}>
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to={routes.contacts}>Contacts</NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default MainNav;
