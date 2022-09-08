import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Button from "../../components/burger/UI/Modall/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>

        <h4>Total Price{this.props.totalPrice.toFixed(2)}$</h4>
        <p>Continue to Checkout?</p>

        <Button clicked={this.props.modalClosed} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.modalOpened} btnType="Success">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
