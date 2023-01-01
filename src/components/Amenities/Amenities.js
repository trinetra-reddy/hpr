import React, { Fragment } from "react";
import "./Amenities.scss";
import Title from '../Title/Title';
const Amenities = () => {
    const amenitiesList = [
        'BT Roads',
        'Avenue plantation',
        'Tap connections for each house',
        'Underground Drainage',
        'LED streetlights',
        '100% Vasthu',
        'Master Compound wall',
        "Children's play area",
        'Walkway',
        'Entrance Arch',
        'Electricity with Transformer'
    ];
    return (
    <>
      <div className="amenities component-wrapper">
        <Title name="Amenities"/>
        <ul>
            {amenitiesList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Amenities;
