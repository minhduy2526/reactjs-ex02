import React, { Component } from "react";
import headerStyles from './header.module.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className={headerStyles.header}>
          <h1>TRY GLASSES APP ONLINE</h1>
        </header>
      </div>
    );
  }
}

export default Header;
