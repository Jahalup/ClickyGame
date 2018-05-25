import React from "react";
import "./cardcont.css";

const CardCont = props => (
    <div className="cardcont  {props.class}">{props.children}</div>
);

export default CardCont;