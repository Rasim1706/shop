import React from "react";
import NavStyle from "../Section2/navlinkwoman.module.css";
import { NavLink } from "react-router-dom";

const NavItems = props => {
  let path = "/section/" + props.id;

  return (
    <div>
      <NavLink className={NavStyle.NavLinks_item} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default class NavLinks extends React.Component {
  render() {
    let NavData = [
      { id: "tanks", name: "Майки" },
      { id: "hoodies", name: "Худи" },
      { id: "shorts", name: "Шорты" }
    ];
    let navElements = NavData.map(nav => (
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
  }
}
