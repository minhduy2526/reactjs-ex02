import React, { Component } from "react";
import styles from "./home.module.css";

import background from "./assets/img/background.jpg";
import Header from "./reactjs-ex02/header";
import SwitchForm from "./reactjs-ex02/switchForm";
import ListGlasses from "./reactjs-ex02/listGlasses";

class Home extends Component {

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={styles.container}
      >
        <Header />
        <SwitchForm />
        <ListGlasses />
      </div>
    );
  }
}

export default Home;
