import React from "react";
import "./Layout.sass";

const Layout = (props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </React.Fragment>
);

export default Layout;
