import React from "react";
import "./Road.scss";

const Road=(props)=>{
    return (
        <>
            
                <div className="roadmap-main">
                    <img className="roadmap-Img" src={props.roadImage} alt="RoadMapImg" width={props.width} height={props.height}></img>
                    <h3 id="roadmap-adv">{props.heading}</h3>
                    <div className="roadmap-meters">
                        <div className="roadmap-text">
                            {props.roadtext}
                        </div>
                        <div className="roadmap-text">
                            {props.roadtext2}
                        </div>
                    </div>
                </div>
                
            
        </>
    );
};

export default Road;