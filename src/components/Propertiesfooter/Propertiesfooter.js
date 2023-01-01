import React from "react";
import "./Propertiesfooter.scss";
import { Link } from "react-router-dom";
import Contactusbutton from "../Contactusbutton/Contactusbutton";

const Propertiesfooter = () => {
  return (
    <>
      <div className="Propertiesfooter-main-container">
        <div className="Propertiesfooter-body">
          <div className="Propertiesfooter-headercontent">
            <h3 className="Propertiesfooter-body-header1">
              HPR Godavari bulders and developers
            </h3>
            <h1 className="Propertiesfooter-body-header2">
              Improving people’s futures through building infrastructure
            </h1>
          </div>
          <div className="Propertiesfooter-contact">
            <h6 className="Propertiesfooter-contact-header">Contact Us</h6>
            <p className="Propertiesfooter-contact-details">
              Pratap reddy :{" "}
              <a
                className="Propertiesfooter-contact-details"
                href="tel:+9187122 44534"
              >
                +91 87122 44534
              </a>
            </p>
            <p className="Propertiesfooter-contact-details">
              Rajshekar :{" "}
              <a
                className="Propertiesfooter-contact-details"
                href="tel:+9193477 05148"
              >
                +91 93477 05148
              </a>
            </p>
            <p className="Propertiesfooter-contact-details">
              Prasanthi nagar, near amaravati car decors, beside Rural
              development and Educational trust school, Anantapuram town,
              Anantapuram - 515 001.
            </p>
          </div>
        </div>
        <div className="Propertiesfooter-borderline"></div>
        <div className="Propertiesfooter-footer">
          <div className="Propertiesfooter-redirect-wrapper1">
            <Link className="Propertiesfooter-redirect" to="/g-about-us">
              About us
            </Link>
          </div>
          <div className="Propertiesfooter-redirect-wrapper1">
            <Link className="Propertiesfooter-redirect" to="/luxury-houses">
              Luxury Houses
            </Link>
          </div>
          <div className="Propertiesfooter-redirect-wrapper1">
            <Link className="Propertiesfooter-redirect" to="/little-oaks">
              Little OAKS
            </Link>
          </div>
          <Contactusbutton />
        </div>
      </div>
    </>
  );
};
export default Propertiesfooter;
