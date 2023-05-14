import React from "react";
import "./LightHouseImages.scss";
import lhimg1 from "../../images/lh-yoga-image.jpg";
import lhimg2 from "../../images/lh-shopping.jpg";

const LightHouseImages = () => {
    return (
        <>
            <div className="lightHouse-images">
                <div className="lhimage">
                    <img className="lh-images" src={lhimg1} alt="LightHouse-Related-Meditation Pics" />
                </div>

                <div className="lhimage">
                    <img className="lh-images" src={lhimg2} alt="LightHouse-Related-shopping Pics" />   
                </div>

            </div>

        </>
    );
};

export default LightHouseImages;