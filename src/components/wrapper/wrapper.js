import React from "react";
import "./wrapper.css";

// Main wrapper div

const Wrapper = props => (
    <div className="wrapper">{props.children}</div>
);

export default Wrapper;