import React from "react";
import NavStyle from "../section-man/navlink.module.css";
import { NavLink } from "react-router-dom";

const NavItems = props => {
  let path = "/header/" + props.id;

  return (
    <div>
      <NavLink className={NavStyle.NavLinks_item} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

const NavLinks = props => {
  let navElements = props.NavData.map(nav => (
    <NavItems name={nav.name} id={nav.id} />
  ));
  return (
    <div className={NavStyle.NavLinks}>
      <div>
        <h5 className={NavStyle.Categories}>Категории</h5>
      </div>
      <nav className={NavStyle.nav}>{navElements}</nav>
    </div>
  );
};
export default NavLinks;
