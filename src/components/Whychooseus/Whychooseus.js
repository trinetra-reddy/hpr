import React from "react";
import "./Whychooseus.scss";
import RowIcon1 from "./Choose-Images/Choose-RowIcon1.svg";
import RowIcon2 from "./Choose-Images/Choose-RowIcon2.svg";
import RowIcon3 from "./Choose-Images/Choose-RowIcon3.svg";

import Whychooseblocks from "./../Whychooseblocks/Whychooseblocks";

const Whychooseus = () => {
  const description =
    "Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam,maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.";
  return (
    <>
      <div className="Choose-container">
        <div className="Choose-header">
          <div className="Choose-span">
            <span className="Choose-header-1">OUR FEATURES</span>
          </div>
          <h2 className="Choose-header-2">Why Choose Us</h2>
          <p className="Choose-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>
        <div className="Choose-blocks">
          <Whychooseblocks
            img={RowIcon1}
            heading="Go Live in Minutes"
            content={description}
            text="Live Icon"
          />
          <Whychooseblocks
            img={RowIcon2}
            heading="Manage like A Pro"
            content={description}
            text="Pro Icon"
          />
          <Whychooseblocks
            img={RowIcon3}
            heading="Scale to Success"
            content={description}
            text="Scale Icon"
          />
        </div>
      </div>
    </>
  );
};
export default Whychooseus;
