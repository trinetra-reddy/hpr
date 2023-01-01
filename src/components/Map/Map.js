import React from "react";
import "./Map.scss";

const Map=()=>{
    return (
        <>
            <div className="roadmap-right">
                <h3 id="location-heading">Location Map</h3>
                <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61760.293185130125!2d77.49444353125003!3d14.654901300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1357ddf997b99%3A0xadb455e6c1015458!2sSri%20satya%20sai%20junior%20college%2C%20Alamur%20Road!5e0!3m2!1sen!2sin!4v1669902985630!5m2!1sen!2sin"></iframe>
            </div>  
        </>
    );
};

export default Map;