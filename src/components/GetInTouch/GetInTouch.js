import React from "react";
import "../Godavaricontactus/Godavaricontactus.scss";
import MessageIcon from '../Godavaricontactus/MessageIcon.svg'
import godavarilogo from "../Godavaricontactus/Godavari-logo.jpg";
const GetInTouch = () => {
  return (
    <>
      <div className="g-contactus-main">
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

export default GetInTouch;
