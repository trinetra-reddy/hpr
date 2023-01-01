import React from "react";
import "./Ourculture.scss";
const Ourculture = (props) => {
  return (
    <>
      <div className="our-culture-main" style={{backgroundColor:props.bgColor,color:props.textColor}}>
        <div className="culture-main">
          <span className="culture-head1" style={{borderBottom:props.border}}>{props.name}</span>
          <span className="culture-head2">{props.name2}</span> 
           {/* <Title classname="green-border" style="borderBottom:4px solid #026b33"name={props.name} name2={props.name2}/> */}
            
        </div>
        <div className={`culture-container ${props.imgPosition}`}>
          <img  className="culture-img-wrapper" src={props.imgPath} alt=""/>
          <div className="culture-description">
            <p>{props.description}</p>
            <p>{props.linkeddescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourculture;
