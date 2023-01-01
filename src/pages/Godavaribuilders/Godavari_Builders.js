import React from "react";
import {Properties,Propertiesfooter,Godavariheader,Godavariaboutus,Improvingpeople,ProjectHeadings,HappyClientsVideosWrapper,HappyClientsWrapper,Ongoingprojects, ImageCarousel} from "../../components";
import littleOAKS from "../../images/carouselImages/little_OAKS.jpg";
import improvingcontactus from "./Improvingcontactusarrow.svg";
import leftarrowimproving from "../../images/vector-left-arrow.svg";
import rightarrowimproving from "../../images/vector-right-arrow.svg";
import './Godavari_Builders.scss';
import happyimg1 from "../../images/HappyClients/underline.png";


const Godavari_Builders = () => {
    const improvingpeopledescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    
    return (
        <div> 
            <Godavariheader />
            <ImageCarousel />
            <Improvingpeople heading="Improving people’s futures through building" description={improvingpeopledescription} btn="Contact us" img={improvingcontactus} leftarrowimg={leftarrowimproving} rightarrowimg={rightarrowimproving} imgPath={littleOAKS}/>
            <Ongoingprojects />
            <Godavariaboutus />
            <Properties name="Prope" name2="reties" />
            
            <ProjectHeadings name="Happy clients" image1={happyimg1} />

            <div className="happyclient-details">
                 <HappyClientsWrapper/>
            </div>

            <div className="happyvideos">
                <HappyClientsVideosWrapper />
            </div>
            
            <Propertiesfooter />
        </div>
    );
};

export default Godavari_Builders;