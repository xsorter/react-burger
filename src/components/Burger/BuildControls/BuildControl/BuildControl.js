import React from "react";
import "./BuildControl.css";

const buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button
        onClick={props.removed}
        disabled={props.disabled}
        className="Less"
      >
        -
      </button>
      <button onClick={props.added} className="More">
        +
      </button>
    </div>
  );
};

export default buildControl;
