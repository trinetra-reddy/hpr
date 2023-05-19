import React from "react";
import image from "../../images/IntegrityImage.jpg";
import IntegrityLogo from "../../images/IntegrityLogo.png";
import CommunicationLogo from "../../images/Communicationlogo.png";
import satisfactionLogo from "../../images/satisfactionLogo.png";
import qualityLogo from "../../images/QualityLogo.png";

import LightHouseIntegrityComponents from "./LightHouseIntegrityComponents";
const LightHouseIntegrity = () => {
  return (
    <>
      <div className="LightHouseIntegrity-container">
        <div className="LightHouseIntegrity-image">
          <img src={image} alt="Image"></img>
        </div>
        <div className="LightHouseIntegrity-content">
          <div className="LightHouseIntegrity-heading">
            <h1>WHEN INTEGRITY IS A LEGACY, TRUST IS A HABIT</h1>
          </div>
          <div className="LightHouseIntegrity-para">
            <p>
              To enhance the quality of life of our customers, by providing,
              high quality, holistic spaces, through a relentless focus on
              execution and innovation, at affordable prices.
            </p>
          </div>
          <div className="LightHouseIntegrity-gridcomponents">
            <LightHouseIntegrityComponents
              heading="HONESTY AND INTEGRITY"
              para="We do what is right, fair, 
                    and ethical."
              logo={IntegrityLogo}
            />
            <LightHouseIntegrityComponents
              heading="CUSTOMER SATISFACTION"
              para="We strive to exceed the expectations of 
              our customers (internally and externally) 
              by anticipating, understanding and 
              responding appropriately to their needs."
              logo={satisfactionLogo}
              position="left"
            />
            <LightHouseIntegrityComponents
              heading="COMMUNICATION"
              para="We share appropriate 
              information in an honest 
              and open manner."
              logo={CommunicationLogo}
            />
            <LightHouseIntegrityComponents
              heading="QUALITY"
              para="We strive for professional excellence to the 
              highest standards possible consistent with 
              the goals of the project."
              logo={qualityLogo}
              position="left"
            />
          </div>
          <div className="LightHouseIntegrity-highlighter">
            <h1>"Feel at ease in your own private oasis."</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default LightHouseIntegrity;
