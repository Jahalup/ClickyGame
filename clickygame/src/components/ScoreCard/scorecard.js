import React from "react";
import "./scorecard.css";

const ScoreCard = props => (

    <div className="row">
    <div className="col s4 score">
    <p>Score: {props.score}</p>
    </div>
    <div className="col s4 score1">
    <p id="scoremessage">{props.message}</p>
    </div>
    <div className="col s4 score">
    <p>High Score: {props.topscore}</p>
    </div>
    </div>

   
      
   
   
)

export default ScoreCard;