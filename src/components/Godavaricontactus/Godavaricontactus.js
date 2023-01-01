import React from "react";
import "./Godavaricontactus.scss";
import Locations from "../Locations/Locations";
import GetInTouch from '../GetInTouch/GetInTouch';
import LocationIcon from "./LocationIcon.svg";
const Godavaricontactus = () => {
  const location1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975927.9236631559!2d75.47574729999998!3d14.699342100000019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6b57ba85275bb%3A0x2415d1769c313736!2sTHE%20RURAL%20EDUCATION%20AND%20DEVELOPMENT%20TRUST!5e0!3m2!1sen!2sin!4v1669902750578!5m2!1sen!2sin";
  const location2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61760.293185130125!2d77.49444353125003!3d14.654901300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1357ddf997b99%3A0xadb455e6c1015458!2sSri%20satya%20sai%20junior%20college%2C%20Alamur%20Road!5e0!3m2!1sen!2sin!4v1669902985630!5m2!1sen!2sin";
  return (
    <>
      <div className="g-contactus-main">
        <div className="g-contactus-header-wrapper">
          <h1 className="g-contactus-header">Contact Us</h1>
        </div>
        <div className="g-contactus-locations-wrapper">
          <Locations
            img={LocationIcon}
            address="Prasanthi nagar, near amaravati car decors, beside Rural development and Educational trust school, Anantapuram town, Anantapuram - 515 001."
            locationmap={location1}
          />
          <Locations
            img={LocationIcon}
            address="# Opp: sri sai Jr.college, Beside HP petrol bunk, alamuru Road, Anantapur-515001"
            locationmap={location2}
          />
        </div>
        <GetInTouch/>
      </div>
    </>
  );
};

export default Godavaricontactus;
