import React from "react";
import "./Locations.scss";

const Locations = (props) => {
  return (
    <>
      <div className="location-main-container">
        <div className="location-map-wrapper">
          <iframe title="location map" className="location-map" src={props.locationmap}></iframe>
        </div>
        <div className="location-body-wrapper">
          <div className="location-icon-wrapper">
            <img
              className="location-icon"
              src={props.img}
              alt="Location Icon"
            ></img>
          </div>
          <div className="location-content-wrapper">
            <p className="location-content">{props.address}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Locations;
