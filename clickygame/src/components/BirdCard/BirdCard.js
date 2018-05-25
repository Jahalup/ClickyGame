import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
  <div className="card"
  value={props.id}
  onClick={() => props.clickevent(props.id)}
  >
    <div className="img-container">
        <img alt={props.image.replace("jpg", "")} src={require("../../images/"+props.image)} />
    </div>

  </div>
);

export default BirdCard;