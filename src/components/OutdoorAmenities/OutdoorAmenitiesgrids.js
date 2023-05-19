import React from "react";

const OutdoorAmenitiesgrids = (props) => {
  return (
    <>
      <div className="outdoorgrid-container">
        <div className="outdoorgrid-image">
          <img src={props.img} alt="activity-image"></img>
        </div>
        <div className={`outdoorgrid-title ${props.position}`}>
          <h1>{props.title}</h1>
        </div>
      </div>
    </>
  );
};
export default OutdoorAmenitiesgrids;
