import React from "react";
import "./HappyClientsDetails.scss";

const HappyClientsDetails=(props)=>{
    return (
        <>
            <div className="happyclientsdetails-main">
                    <div className="happyclientsdetails-img">
                        <img className="happyclientsdetails-img1" src={props.image2} alt="Client1"/>
                    </div>
                    <div className="happyclientsdetails">
                        <div className="happyclientsdetails-Name">{props.client1}</div>
                            <p className="happyclientsdetails-content">{props.happyContent}</p>
                    </div>
            </div>
            
        </>
    );
};

export default HappyClientsDetails;