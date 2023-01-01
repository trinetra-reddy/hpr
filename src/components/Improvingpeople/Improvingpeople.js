import React from "react";
import "./Improvingpeople.scss";
import Contactusbutton from "../Contactusbutton/Contactusbutton";

const Improvingpeople = (props) => {
  return (
    <>
      <div className="improving-people">
        <div className="improving-people-left">
          <div className="improving-people-left-heading">
            <h1>{props.heading}</h1>
          </div>
          <div className="improving-people-left-content">
            <p>{props.description}</p>
          </div>
          <Contactusbutton />
        </div>
        <div className="improving-people-right">
          <img alt="" className="improving-people-right-image" src={props.imgPath} />
        </div>
      </div>
    </>
  );
};
export default Improvingpeople;
