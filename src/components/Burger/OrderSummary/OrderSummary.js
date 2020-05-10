import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((el) => {
    return (
      <li key={el}>
        <span style={{ textTransform: "capitalize" }}>{el}</span> :
        {props.ingredients[el]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order:</h3>
      <p>Burger with ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}$</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};
export default orderSummary;
