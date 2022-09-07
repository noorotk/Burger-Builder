import React from "react";
import Aux from "../../hoc/Auxilary";
import Button from "../../components/burger/UI/Modall/Button/Button";

const ordersummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>

      <h4>Total Price{props.totalPrice.toFixed(2)}$</h4>
      <p>Continue to Checkout?</p>

      <Button clicked={props.modalClosed} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.modalOpened} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default ordersummary;
