import React from "react";
import "./LightHouseIntegrity.scss";

const LightHouseIntegrityComponents = (props) => {
  return (
    <>
      <div
        className={`LightHouseIntegrityComponent-container ${props.position}`}
      >
        <div className="LightHouseIntegrityComponent-content">
          <div className="LightHouseIntegrityComponent-header">
            <h1>{props.heading}</h1>
          </div>
          <div className="LightHouseIntegrityComponent-para">
            <p>{props.para}</p>
          </div>
        </div>
        <div className="LightHouseIntegrityComponent-logo">
          <img src={props.logo} alt="logo"></img>
        </div>
      </div>
    </>
  );
};
export default LightHouseIntegrityComponents;
