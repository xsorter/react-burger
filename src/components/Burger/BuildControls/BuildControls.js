import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className="BuildControls">
      {controls.map((el) => (
        <BuildControl
          added={() => props.ingredientAdded(el.type)}
          removed={() => props.ingredientRemoved(el.type)}
          key={el.label}
          label={el.label}
          disabled={props.disabled[el.type]}
        />
      ))}
    </div>
  );
};

export default buildControls;
