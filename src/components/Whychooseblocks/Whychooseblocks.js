import React from "react";
import "./Whychooseblocks.scss";

const Whychooseblocks = (props) => {
  return (
    <>
      <div className="chooseblocks-main-container">
        <div className="chooseblocks-icon-wrapper">
          <img
            className="chooseblocks-icon"
            src={props.img}
            alt={props.text}
          ></img>
        </div>
        <div className="chooseblocks-header-wrapper">
          <h6 className="chooseblocks-header">{props.heading}</h6>
        </div>
        <div className="chooseblocks-content-wrapper">
          <p className="chooseblocks-content">{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default Whychooseblocks;
