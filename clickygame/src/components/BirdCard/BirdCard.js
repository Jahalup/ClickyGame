import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.image.replace("jpg", "")} src={require("../../images/"+props.image)} />
    </div>
    {/* <div className="content">
    </div> */}
    <span onClick={() => props.shuffledeck(props.id)} className="shuffle"></span>

  </div>
);

export default BirdCard;