import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "../components/burger/BurgerIngrediant/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, cur) => {
      return arr.concat(cur);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>For god sake Please start adding some ingredients</p>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
