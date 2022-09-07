import React from "react";
import burgerlogo from "../../../assests/images/burger-logo.png";
import classes from "./logo.css";
const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerlogo} alt="burger"></img>
  </div>
);

export default logo;
