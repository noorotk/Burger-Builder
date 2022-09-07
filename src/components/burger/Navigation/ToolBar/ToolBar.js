import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.css";
import Navigationitems from "../NavigationItems/NavigationItems";
const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <Navigationitems />
    </nav>
  </header>
);
export default toolbar;
