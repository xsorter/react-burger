import React from "react";
import "./Layout.sass";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <main className="Content">{props.children}</main>
  </React.Fragment>
);

export default layout;
