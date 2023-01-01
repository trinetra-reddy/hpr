import React from "react";
import "./CoreValues.scss";

const CoreValues=(props)=>{



    return (
        <>
        <div className="coreValues">
            <div className="coreImg" style={{width:props.imgwidth}}>
            <img className="coreValuesImg" src={props.coreImg} alt={props.corealt} ></img>
            </div>
            <h2 className="coreValuesheading">{props.corevaluesheading}</h2>
            <p className="coreValuesContent">{props.corecontent}</p>
        </div>
        </>
    );
};

export default CoreValues;