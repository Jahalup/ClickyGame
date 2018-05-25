import React from "react";
import "./scorecard.css";

const ScoreCard = props => (

    <div className="row">
    <div className="col s4 score z-depth-5">
    <p>Score: <span className="scorenum">{props.score}</span></p>
    </div>
    <div className="col s4 score1">
    <p id="scoremessage" className="animated tada">{props.message}</p>
    </div>
    <div className="col s4 score z-depth-5">
    <p>High Score:<span className="scorenum"> {props.topscore}</span></p>
    </div>
    </div>

   
      
   
   
)

export default ScoreCard;