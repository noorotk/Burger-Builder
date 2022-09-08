import React, { Component } from "react";
import Aux from "../../../hoc/Auxilary";
import classes from "./layout.css";
import Toolbar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  SideDrawerOpenHandler = () => {
    this.setState({ showSideDrawer: true });
  };
  render() {
    return (
      <Aux>
        <div>
          <Toolbar clicked={this.SideDrawerOpenHandler} />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.SideDrawerClosedHandler}
          />
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
