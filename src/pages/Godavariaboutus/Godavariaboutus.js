import React from "react";
import { Godavariheader, Godavariaboutus2, ProjectHeadings, Ourculture,  Propertiesfooter, HappyClientsWrapper, HappyClientsVideosWrapper, Leadershipcomp } from "../../components";

import './Godavariaboutus.scss';
import homeImage from '../../images/carouselImages/home2.jpeg';
import happyimg1 from "../../images/HappyClients/underline.png";
import baba from '../../images/Baba_1.jpg';

const Godavariaboutus = () => {
    const ourCultureDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    const ourVisionDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'
    const godavariaboutus2description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa';
    
    
    return (
        <div>
            <Godavariheader />
            <Godavariaboutus2 heading="About Us" heading1="We were originally established as a constractor to major indias housebuilders" description={godavariaboutus2description} imgPath={homeImage}/>
            <Leadershipcomp name="Pratap Reddy" img={baba}/>
            <Leadershipcomp  name="Rajshekar" img ={baba} imgPosition="right" />
            <Ourculture name="Our W" name2="ork Culture" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={homeImage} background="#FAFAFA" />
            <Ourculture name="Why" name2=" Us" description={ourCultureDes} linkeddescription={ourCultureDes} imgPath={homeImage} imgPosition="right" bgColor="#026b33" textColor="white" border="4px solid white" />
            <Ourculture name="Our V" name2="ission" description={ourVisionDes} linkeddescription={ourCultureDes} imgPath={homeImage} background="#FAFAFA"/> 
            <ProjectHeadings name="Happy clients" image1={happyimg1} />
            <div className="happyclient-details">                   
                <HappyClientsWrapper/>
            </div>
            {/* <div className="happyvideos">
                <HappyClientsVideos videoUrl="https://www.youtube.com/watch?v=NJHw5cr_X34" />
                <HappyClientsVideos videoUrl="https://www.youtube.com/watch?v=S76DWblbhyM" />
                <HappyClientsVideos videoUrl="https://www.youtube.com/watch?v=ECIhrH5diZE" />
            </div> */}
            <div className="happyvideos">
                <HappyClientsVideosWrapper />
            </div>
            <Propertiesfooter />

        </div>

    );
};

export default Godavariaboutus;