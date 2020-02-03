import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import axios from "axios";

import ClohesCard from "../clothesCard";

class Clothes extends Component {
  componentWillMount() {
    const { setClothes } = this.props;
    axios.get("/clothes.json").then(({ data }) => {
      setClothes(data);
    });
  }

  render() {
    const { clothes, isReady } = this.props;
    return (
      <Card.Group itemsPerRow={4}>
        {!isReady
          ? "Загрузка..."
          : clothes.map((clothes, i) => <ClohesCard key={i} {...clothes} />)}
      </Card.Group>
    );
  }
}

export default Clothes;
