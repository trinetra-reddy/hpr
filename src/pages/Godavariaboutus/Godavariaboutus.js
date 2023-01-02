import React from "react";
import { Godavariheader, Godavariaboutus2, ProjectHeadings, Ourculture,  Propertiesfooter, HappyClientsWrapper, HappyClientsVideosWrapper, Leadershipcomp, GetInTouch } from "../../components";

import './Godavariaboutus.scss';
import homeImage from '../../images/carouselImages/home2.jpeg';
import archImage from '../../images/carouselImages/arch.jpeg';
import ourMissionImg from '../../images/carouselImages/ourMission.jpeg';
import happyimg1 from "../../images/HappyClients/underline.png";
import PrathapReddy from '../../images/prathapReddy.jpg';
import RajImage from '../../images/raj.jpeg';

const Godavariaboutus = () => {
    const ourVisionDes = `To become the leading construction firm, while delivering projects that consistently exceed international standards and provide exceptional customer satisfaction.`;
    const ourVisionDes2 = "To continually deliver excellent value & innovative construction solutions to meet our clients' requirements. Using modern principles and sophisticated technologies, Alamiah Building Company envisions being the primary preference at all times both nationally and globally, for their renowned excellence, quality, performance and reliability in all types of constructions."
    const godavariaboutus2description = `Godavari Builders and Developers was founded in 2021 by Mr. H Pratap Reddy  for creating a world-class construction buildings and real estate company. As the chief architect and promoter of the company, Mr.Pratap Reddy is driving the vision and the purpose of the company. Since its first project, Godavari Builders and Developers has created landmarks in the city of Anantapur. Clients, associates and all stakeholders in the eco-system have come to recognize the values driven approach of the company.`;
    const whyChooseText = "Godavari Builders and Developers is one of the Anantapur leading real estate developers headquartered in Anantapur. We focus on serving the discerning needs of our clientele by providing eco friendly spaces leveraged with technology. Our core values resonate integrity, professionalism & Competence. We are committed to providing Quality constructions supplemented with supreme transparency in our business operations and are known for our customer centric conduct. With unparalleled expertise and skill, we deliver exceptional value conclusive of phenomenal projects, to gratify our clients."
    const ourMission = "Our Mission is to understand our client needs to deliver high–quality buildings on time and on budget. We will be recognised for being innovative and collaborative, developing our team, having long-term relationships with our clients and supply chain, while contributing to the community in which we operate.";
    const ourValues = [
        {
            header: 'Transparency',
            description: 'To be transparent in every interaction and documentation, with customers, vendors, associates or investor community.'
        },
        {
            header: 'Integrity',
            description: 'To always work and deliver projects with high integrity and to adhere to highest ethical standards at all employee levels.'
        },
        {
            header: 'Quality',
            description: 'To ensure that the company name is synonymous with the best quality products, materials, plans and concepts. To deliver high quality consistently in every project.'
        },
        {
            header: 'Innovation',
            description: 'To continuously innovate in every aspect of conceptualization, planning, architecture and design. To benchmark against the best practices globally and create spaces that enhance the quality of human-space interaction.'
        }
    ];
    const pratapReddyDesc = `Mr. H. Pratap Reddy is know as a HPR. He has more than 10+ years of experience in Real estate and constrction area. He worked with multiple builders and top notch Artichects. And in the year of 2021 he established the Godavali builders and developers. Now he is focing on to become the leading construction firm, while delivering projects that consistently exceed standards and provide exceptional customer satisfaction.`
    const rajDesc = 'Mr. Rajshekar Reddy is closely working with Mr. H. Pratap Reddy and Engineers to make sure deliver the quality projects (Buildings and Apartmetns). He is also taking care of material management to make sure provide the top quality of materials to build quality houses and apartments.'
    return (
        <div>
            <Godavariheader />
            <Godavariaboutus2 heading="About Us" heading1="We were originally established as a contractor to major  house builders" description={godavariaboutus2description} imgPath={homeImage}/>
            <Leadershipcomp name="H. Pratap Reddy" degree="B.A" img={PrathapReddy} designation="Founder, Executive Director, Godavari Builders and developers" desc={pratapReddyDesc}/>
            <Leadershipcomp  name="Rajshekar Reddy" img ={RajImage} imgPosition="right"  designation="Director, Godavari Builders and developers" desc={rajDesc}/>
            <Ourculture name="Our C" name2="ore values" description='' imgPath={homeImage} background="#FAFAFA">
                {ourValues.map ((item, index) => (<div key={index}>
                    <h6 className="fw-semi-bold">{item.header}</h6>
                    <p>{item.description}</p>
                </div>))}
            </Ourculture>
            <Ourculture name="Why" name2=" Us" description={whyChooseText} linkeddescription="" imgPath={homeImage} imgPosition="right" bgColor="#026b33" textColor="white" border="4px solid white" />
            <Ourculture name="Our V" name2="ission" description={ourVisionDes} linkeddescription={ourVisionDes2} imgPath={archImage} bgColor="#fff"/> 
            <Ourculture name="Our M" name2="ission" description={ourMission}  imgPath={ourMissionImg}  imgPosition="right"/> 
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
            <GetInTouch/>
            <Propertiesfooter />

        </div>

    );
};

export default Godavariaboutus;