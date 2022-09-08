import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.css";
import Drawertoggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Navigationitems from "../NavigationItems/NavigationItems";
const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Drawertoggle opened={props.clicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <Navigationitems />
    </nav>
  </header>
);
export default toolbar;
