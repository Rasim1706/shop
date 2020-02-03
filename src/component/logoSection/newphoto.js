import React from "react";
import imgblock from "./newphoto.module.css";
import NavLinks from "../section-man/navLinks";
import { NavLink } from "react-router-dom";

function NewArrivals(props) {
  let path = "/man/" + props.id;
  return (
    <div className={imgblock.Newarrivals}>
      <div className="new-img">
        <NavLink to={path}>
          <img src={props.newProduct.img} alt={props.newProduct.name} />{" "}
        </NavLink>
      </div>
      <h3 className={imgblock.Newarrivalsh3}>{props.newProduct.name}</h3>
      <p>{props.newProduct.price} </p>
    </div>
  );
}

class NewPhoto extends React.Component {
  state = {
    Arrivals: [
      {
        id: "tank-grey",
        name: "BMW M2 Coupe",
        price: 20000,
        img:
          "https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg"
      },
      {
        id: "hoodies-black",
        name: "Audi TT",
        price: 15000,
        img:
          "https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598"
      },
      {
        id: "shorts-pink",
        name: "Rolls Royce",
        price: 50000,
        img:
          "http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg"
      }
    ]
  };

  renderArrival() {
    return this.state.Arrivals.map(newProduct => {
      return (
        <NewArrivals
          id={newProduct.id}
          newProduct={newProduct}
          key={newProduct.name + Math.random()}
        />
      );
    });
  }

  render() {
    return (
      <div className="NewPhoto">
        <div className="container">
          <div className={imgblock.center}>
            <div className="row">
              <div className={imgblock.grid}>
                <h3>
                  НОВЫЕ <br />
                  ПОСТУПЛЕНИЯ
                </h3>
                {this.renderArrival()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPhoto;
