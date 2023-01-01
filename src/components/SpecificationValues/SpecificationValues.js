import React from "react";
import "./SpecificationValues.scss";

const SpecificationValues = (props) => {
  return (
    <>
      <div className="specifyVal-main-container">
        <div className="specifyVal-header">
          <div className="specifyVal-icon-wrapper">
            <img className="specifyVal-icon" src={props.img} alt="Icon" />
          </div>
          <div className="specifyVal-heading-wrapper">
            <h3 className="specifyVal-heading">{props.heading}</h3>
          </div>
        </div>
        <div className="specifyVal-description-wrapper">
          <p className="specifyVal-description">{props.description}</p>
        </div>
      </div>
    </>
  );
};
export default SpecificationValues;
