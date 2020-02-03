import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";



let NavData = [
  { id: "tanks", name: "Майки" },
  { id: "hoodies", name: "Худи" },
  { id: "shorts", name: "Шорты" }
];

ReactDOM.render(
  <App NavData={NavData} />,
  document.getElementById("root")
);
