import React from "react";
import menu from "./menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className={menu.menu}>
      <div className="container">
        <div className="logo">
          <NavLink className={menu.danger} to="/logophoto">
            Danger
          </NavLink>
        </div>
        <div className="list d-flex justify-content-center">
          <NavLink className={menu.navlinks} to="/header">
            Мужчины
          </NavLink>
          <NavLink className={menu.navlinks} to="/section">
            Женщины
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Menu;
