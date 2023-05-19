import React from "react";
import "./OutdoorAmenities.scss";
import "./OutdoorAmenitiesgrids";
import image from "../../images/OutdoorImages/OutdoorImage.jpg";
import shuttlecourt from "../../images/OutdoorImages/ShuttleCourt.jpg";
import childrenplay from "../../images/OutdoorImages/ChildrenPlayArea.jpg";
import landscape from "../../images/OutdoorImages/Landscaping.jpg";
import flowerdgarden from "../../images/OutdoorImages/FlowerGarden.jpg";
import OutdoorAmenitiesgrids from "./OutdoorAmenitiesgrids";
const OutdoorAmenities = () => {
  return (
    <>
      <div className="outdoor-container">
        <div className="outdoor-image">
          <img src={image} alt="outdoor image"></img>
        </div>
        <div className="outdoor-activities">
          <OutdoorAmenitiesgrids
            img={childrenplay}
            title="Childrens Play Area"
            position="left"
          />
          <div className="outdoor-activities-flex">
            <OutdoorAmenitiesgrids img={shuttlecourt} title="Shuttle Court" />
            <OutdoorAmenitiesgrids
              img={landscape}
              title="Landscaping"
              position="left"
            />
          </div>
          <OutdoorAmenitiesgrids img={flowerdgarden} title="Flower Garden" />
        </div>
      </div>
    </>
  );
};
export default OutdoorAmenities;
