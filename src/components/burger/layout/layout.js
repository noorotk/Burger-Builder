import React from "react";
import Aux from "../../../hoc/Auxilary";
import classes from "./layout.css";
import Toolbar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const layout = (props) => (
  <Aux>
    <div>
      <Toolbar />
      <SideDrawer />
    </div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
