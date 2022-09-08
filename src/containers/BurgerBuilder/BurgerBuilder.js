import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../burger/Burger";
import BuildControls from "../../burger/buildcontrols/BuildControls";
import Modal from "../../components/burger/UI/Modall/Modal";
import Ordersummary from "../../burger/OrderSummary/OrderSummary";
const ENGREDIENT_PRICES = {
  salad: 0.3,
  bacon: 0.8,
  cheese: 0.5,
  meat: 1.2,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2,
    purchaseable: false,
    purchasing: false,
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  Addingredienthandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = ENGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removingingredienthandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = ENGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    alert("Bon Abetit!");
  };
  render() {
    // const disabledInfo = {
    //   ...this.state.ingredients,
    // };
    // for (let key in disabledInfo) {
    //   disabledInfo[key] = disabledInfo[key] <= 0;
    // }
    // console.log(disabledInfo);

    return (
      <Aux>
        <div>
          <Modal
            show={this.state.purchasing}
            modalClosed={this.purchaseCancelHandler}
          >
            <Ordersummary
              modalClosed={this.purchaseCancelHandler}
              modalOpened={this.purchaseContinueHandler}
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
            />
          </Modal>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientsremoved={this.removingingredienthandler}
            ingredientsAdded={this.Addingredienthandler}
            // disabledInfo={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
          />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
