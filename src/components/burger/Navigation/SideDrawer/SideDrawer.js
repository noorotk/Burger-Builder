import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.css";
import Aux from "../../../../hoc/Auxilary";
import Backdrop from "../../UI/Modall/Backdrop/Backdrop";
import Navigationitems from "../NavigationItems/NavigationItems";
const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <Navigationitems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
