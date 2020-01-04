//----- Import -----//
import React from "react";
import Fighter from "./fighter";

//----- Box Prop Create and Return -----//
const FighterBox = props => {
  return (
    <div className="fighter-box">
      {props.fighters.map((fighter, index) => (
        <Fighter
          fighter={fighter}
          index={index}
          onFighterClick={props.onFighterClick}
          key={fighter.name}
        />
      ))}
    </div>
  );
};

//----- Export -----//
export default FighterBox;
