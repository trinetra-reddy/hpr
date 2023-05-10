import React from "react";
import "./LightHouseVideo.scss";

const LightHouseVideo = () => {

    const lighthouseUrl = "https://www.youtube.com/embed/ECIhrH5diZE";

    return (
        <>
            <div className="light-house-video">

                <embed src={lighthouseUrl} className="lighthouse-Video" autoplay controls></embed>

            </div>
        </>
    );
};

export default LightHouseVideo;