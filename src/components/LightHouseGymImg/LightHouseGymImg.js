import React from "react";
import "./LightHouseGymImg.scss";
import lhimg3 from "../../images/lh-gym-img.jpg";
import lhimg4 from "../../images/lh-hall.jpg";
import lhimg5 from "../../images/lh-cricket.jpg";


const LightHouseGymImg = () => {
    return (
        <>
            <div className="lightHouse">
                <div className="light-house-images">
                    <img className="light-imgs" src={lhimg3} alt="LightHouse-Related-GYM Pics" />
                </div>

                <div className="light-house-images">
                    <img className="light-imgs" src={lhimg4} alt="LightHouse-Related-Hall Pics" />
                    <img className="light-imgs" src={lhimg5} alt="LightHouse-Related-Cricket Pics" />
                </div>

            </div>
        </>
    );
};

export default LightHouseGymImg;