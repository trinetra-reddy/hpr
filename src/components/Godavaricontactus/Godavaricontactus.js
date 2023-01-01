import React from "react";
import "./Godavaricontactus.scss";
import Locations from "../Locations/Locations";
import LocationIcon from "./LocationIcon.svg";
import MessageIcon from "./MessageIcon.svg";
import godavarilogo from "./Godavari-logo.jpg";
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

        <div className="g-contactus-body-wrapper">
          <div className="g-contactus-body-header-wrapper">
            <h3 className="g-contactus-body-header">Get in touch</h3>
          </div>
          <div className="g-contactus-body-content">
            <div className="g-contactus-form-wrapper">
              <form
                className="g-contactus-form"
                id="fs-frm"
                name="simple-contact-form"
                acceptCharset="utf-8"
                action="https://formspree.io/f/xlevpvdb"
                method="post"
              >
                <div className="g-contactus-input-wrapper1">
                  <div className="g-contactus-input-subwrap">
                    <label htmlFor="name" className="g-contactus-labels">
                      Name
                    </label>
                    <br></br>
                    <input
                      className="g-contactus-inputs"
                      id="name"
                      name="name"
                      type="text"
                    ></input>
                  </div>
                  <div className="g-contactus-input-subwrap">
                    <label htmlFor="phone" className="g-contactus-labels">
                      Phone
                    </label>
                    <br></br>
                    <input
                      className="g-contactus-inputs"
                      id="phone"
                      name="phone"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="g-contactus-input-wrapper2">
                  <label htmlFor="email" className="g-contactus-labels">
                    Email
                  </label>
                  <br></br>
                  <input
                    className="g-contactus-inputs"
                    id="email"
                    name="email"
                    type="email"
                  ></input>
                </div>
                <div className="g-contactus-input-wrapper3">
                  <label htmlFor="message" className="g-contactus-labels">
                    Message
                  </label>
                  <br></br>
                  <input
                    className="g-contactus-inputs"
                    id="g-contactus-inputmessage"
                    name="message"
                    type="text"
                  ></input>
                </div>
                <div className="g-contactus-button-wrapper">
                  <button className="g-contactus-button" type="submit">
                    {" "}
                    <img
                      className="g-contactus-messageicon"
                      src={MessageIcon}
                      alt="icon"
                    ></img>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="g-contactus-companydetails">
              <h2 className="g-contactus-companyname">
                HPR Godavari Bulders and Developers
              </h2>
              <div className="g-contactus-logo-wrapper">
                <img
                  className="g-contactus-logo"
                  src={godavarilogo}
                  alt="godavarilogo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Godavaricontactus;
