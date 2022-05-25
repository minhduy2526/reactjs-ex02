import React, { Component } from "react";
import switchFormStyles from "./switchForm.module.css";
import model from "/public/assets/img/model.jpg";
import glasses1 from "/public/assets/img/v1.png";
import data from "../data/data.json";

class SwitchForm extends Component {
  state = {
    img: "",
    name: "",
    desc: "",
  };

  render() {
    return (
      <div className={switchFormStyles.container}>
        <div className={switchFormStyles.left}>
          <div
            className={switchFormStyles.imgModel}
            style={{
              backgroundImage: "",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <img src="" alt="" />
            <div className={switchFormStyles.content}>
              <h1>GUCCI G8850U</h1>
              <p>
                Light pink square lenses define these sunglasses, ending with
                amother of pearl effect tip.
              </p>
            </div>
          </div>
        </div>
        <div className={switchFormStyles.right}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default SwitchForm;
