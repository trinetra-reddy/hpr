import React from "react";
import "./Yourdreamhouse.scss";
import Contactusbutton from "../Contactusbutton/Contactusbutton";
import DownloadBrochure from '../DownloadBrochure';
const Yourdreamhouse = (props) => {
  return (
    <>
      <div className="yourdream-house">
        <div className="yourdream-house-left">
          <div className="yourdream-house-left-heading">
            <h1>{props.heading}</h1>
          </div>
          <div className="yourdream-house-left-content">
            <p>{props.description}</p>
          </div>
          <div className="flex gap-4">
            <Contactusbutton /> 
            <DownloadBrochure/>
          </div>
        </div>
        <div className="yourdream-house-right">
          <img className="yourdream-house-right-image" src={props.imgPath} alt=""/>
        </div>
      </div>
    </>
  );
};
export default Yourdreamhouse;
