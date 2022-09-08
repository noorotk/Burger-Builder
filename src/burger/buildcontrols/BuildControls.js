import React from "react";
import Buildcontrol from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Egg", type: "egg" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price:<strong>{props.price.toFixed(2)}$</strong>
    </p>
    {controls.map((ctrl) => (
      <Buildcontrol
        removed={() => props.ingredientsremoved(ctrl.type)}
        // disabled={props.disabled[ctrl.type]}
        added={() => props.ingredientsAdded(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
      />
    ))}
    <button
      onClick={props.ordered}
      className={classes.OrderButton}
      disabled={!props.purchaseable}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
