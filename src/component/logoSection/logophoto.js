import React from "react";
import LogoSection from "./logosection";
import NewPhoto from "./newphoto.js";
import ManWoman from "./manwoman.js";
import FooterSection from "./footer.js";

const LogoPhoto = props => {
  return (
    <div className="active">
      <LogoSection />
      <NewPhoto />
      <ManWoman />
      <FooterSection />
    </div>
  );
};
export default LogoPhoto;
