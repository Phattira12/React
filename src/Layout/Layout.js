import React, { Fragment } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <Fragment>
      <div className="main-wrapper">
        <Navbar />
        <Sidebar {...props} />
        <div className="main-content" style={{ minHeight: "600px" }}>
          <div className="section">
            <div className="section-header">
              <h1>Blank Page</h1>
            </div>
            <div className="section-body">{props.children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
