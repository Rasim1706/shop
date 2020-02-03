import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./component/section-man/Header";
import Section from "./component/Section2/section.js";
import Menu from "./component/menu.js";
import LogoPhoto from "./component/logoSection/logophoto.js";
import About from "./component/logoSection/about/about";
import Contact from "./component/logoSection/helper/contact";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app">
        <Menu />
        <Route exact={true} path="/logophoto" render={() => <LogoPhoto />} />
        <Route
          path="/header"
          render={() => (
            <Header NavData={props.NavData}  />
          )}
        />
        <Route path="/section" render={() => <Section />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
