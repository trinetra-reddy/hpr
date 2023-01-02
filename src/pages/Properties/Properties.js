import React from "react";
import {Godavariheader, Floorplan,Propertiesfooter,Yourdreamhouse,Specifications,Road,Map, GetInTouch} from "../../components";
import leftarrowyourdreamhouse from "../../images/vector-left-arrow.svg";
import rightarrowyourdreamhouse from "../../images/vector-right-arrow.svg";
import yourdreamhousecontactus from  "./yourdreamhousecontactus.svg";
import roadImg from "../../images/Properties1.jpg";
import HouseImage from "../../images/carouselImages/little_OAKS.jpg";
import './Properties.scss';
import isometriView from '../../images/isometriView.png';
import stiltfloor from '../../images/parking.png';
import typiccalFloorPlan from '../../images/typiccalFloorPlan.png';
import stilt from '../../images/stilt.png';
import firstFloor from '../../images/firstFloor.png';



const Properties = () => {
    const yourdreamhousedescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';

    return (
        <div> 
            <Godavariheader />
            <Yourdreamhouse heading="Your Dream House as Apartment and Villas" description={yourdreamhousedescription} btn="Contact us" img={yourdreamhousecontactus} leftarrowimg={leftarrowyourdreamhouse} rightarrowimg={rightarrowyourdreamhouse} imgPath={HouseImage}/>
            <Specifications/>
            <Floorplan img1={isometriView} img2={stiltfloor} img3={typiccalFloorPlan} img4={stilt} img5={firstFloor} />
            <div className="road-map">
            <Road roadImage={roadImg} width="583px" height="555px" roadtext="800Meters to D-Mart" roadtext2="200 Meters to Tapovanam Circle" heading="Location Advantages"/>
            <Map />
            </div>
            <GetInTouch/>
            <Propertiesfooter />
        </div>
    );
};

export default Properties;