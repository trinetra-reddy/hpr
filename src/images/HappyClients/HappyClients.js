import React from "react";
import "./HappyClients.scss";
import ProjectHeadings from "../ProjectHeadings/ProjectHeadings";
import ProjectButtons from "../ProjectButtons/ProjectButtons";
import HappyClientsDetails from "../HappyClientsDetails/HappyClientsDetails";
import HappyClientsVideos from "../HappyClientsVideo/HappyClientsVideos";
import happyimg1 from "../../images/HappyClients/underline.png";
import happyimg2 from "../../images/HappyClients/happyboy.png";
import happyimg3 from "../../images/HappyClients/happygirl.png";
import happyimg5 from "../../images/HappyClients/happyImage.png";
import happyimg from "../../images/HappyClients/happyImg.png";





const HappyClients=()=>{
    
    const happyClientDes='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation';
    return (
        <>
            <ProjectHeadings name="Happy clients" image1={happyimg1} />
            {/* <ProjectButtons image4={happyimg} image5={happyimg5}/> */}

           
                <div className="happyclient-details">
                    <HappyClientsDetails happyContent={happyClientDes} image2={happyimg2} client1="Krishna Kanth" />
                    <HappyClientsDetails happyContent={happyClientDes} image2={happyimg3}  client1="Ramika sayn"/>
                </div>  
            

            {/* <ProjectButtons image4={happyimg} image5={happyimg5} /> */}
            
            <div class="happyvideos">
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo" />
            <HappyClientsVideos videoUrl="https://www.youtube.com/embed/9MfX6D9jXwo"  />
            </div>
    </>

    );
    
};

export default HappyClients;