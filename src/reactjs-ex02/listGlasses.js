import React, { Component } from "react";
import listGlassesStyles from "./listGlasses.module.css";
import img from "../data/data.json";

class ListGlasses extends Component {
  handleChangeGlasses = (img, name, desc) => {
    this.setState({
      img: img,
      name: name,
      desc: desc,
    });
  };

  renderGlasses = () => {
    return img.map((item, index) => {
      return (
        <div className={listGlassesStyles.col} key={index} onClick = {() => {
          this.handleChangeGlasses();
        }}>
          <div className={listGlassesStyles.item}>
            <img src={item.url} alt="" />
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className={listGlassesStyles.container}>
          <div className={listGlassesStyles.row}>{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}

export default ListGlasses;
