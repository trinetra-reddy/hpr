import React from "react";
import {Properties,Propertiesfooter,Godavariheader,Godavariaboutus,Improvingpeople,ProjectHeadings,HappyClientsVideosWrapper,HappyClientsWrapper,Ongoingprojects, ImageCarousel, GetInTouch} from "../../components";
import littleOAKS from "../../images/carouselImages/little_OAKS.jpg";
import improvingcontactus from "./Improvingcontactusarrow.svg";
import leftarrowimproving from "../../images/vector-left-arrow.svg";
import rightarrowimproving from "../../images/vector-right-arrow.svg";
import './Godavari_Builders.scss';
import happyimg1 from "../../images/HappyClients/underline.png";


const Godavari_Builders = () => {
    const improvingpeopledescription = 'Godavari Builders and Developers was founded in 2021 by Mr. H Pratap Reddy  for creating a world-class construction buildings and real estate company. As the chief architect and promoter of the company, Mr.Pratap Reddy is driving the vision and the purpose of the company. Since its first project, Godavari Builders and Developers has created landmarks in the city of Anantapur. Clients, associates and all stakeholders in the eco-system have come to recognize the values driven approach of the company.';
    
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
            <GetInTouch/>
            <Propertiesfooter />
        </div>
    );
};

export default Godavari_Builders;