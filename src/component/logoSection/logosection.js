import React from "react";
import logoSec from "./logosection.module.css";
import Button from "../button";

const LogoSection = () => {
  return (
    <div className={logoSec.LogoSection}>
      <div className="container">
        <div className="row">
          <div className={logoSec.pricetag}>
            <h2 className={logoSec.color_h2}>TAKE YOUR FIRST STEP</h2>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
