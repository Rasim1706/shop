import React from "react";
import Men from "./Header.module.css";
import NavLinks from "./navLinks";
import Clothes from "./clothes/clothes/clothes";

const Header = props => {
  return (
    <div className={Men.Header}>
      <div className={Men.title}>
        <span className={Men.logoFirm}>Danger</span>
        <h4 className={Men.Header__man}>Мужчины</h4>
      </div>
      <NavLinks NavData={props.NavData} />
      <Clothes />
    </div>
  );
};

export default Header;
