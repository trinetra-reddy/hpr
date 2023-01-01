import React from "react";
import VectorImage from "./ButtonVector.svg";
import "./Contactusbutton.scss";

import { Link } from "react-router-dom";
const Contactusbutton = () => {
  return (
    <>
        <button className="Contactusbutton-wrapper">
          <Link className="Contactusbutton-redirect" to="/g-contact-us">
            Contact Us
          </Link>
          <img
            className="Contactusbutton-vectorimage"
            src={VectorImage}
            alt="VectorImage"
          />
        </button>
    </>
  );
};
export default Contactusbutton;
