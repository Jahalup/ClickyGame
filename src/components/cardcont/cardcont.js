import React from "react";
import "./cardcont.css";

// Container div for holding image cards

const CardCont = props => (
    <div className="cardcont  {props.class}">{props.children}</div>
);

export default CardCont;