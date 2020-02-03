import React from "react";
import woman from "./section.module.css";
import NavLinksWoman from "./navLinksWoman";

const Woman = () => {
  return (
    <div className={woman.Woman}>
      <div className={woman.title}>
        <span className={woman.logoFirm}>Danger</span>
        <h4 className={woman.Header__woman}>Женщины</h4>
      </div>
      <NavLinksWoman />
    </div>
  );
};

export default Woman;
