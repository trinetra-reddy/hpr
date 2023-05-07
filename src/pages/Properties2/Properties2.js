import React from 'react';
import { Godavariheader,Yourjourney,Floorplan,Road,Map, Propertiesfooter, Amenities, GetInTouch } from "../../components";
import roadImg from "../../images/Properties2.jpg";
import Appartmentimage from "../../images/carouselImages/House.jpg";
import leftarrowyourjourney from "../../images/vector-left-arrow.svg";
import rightarrowyourjourney from "../../images/vector-right-arrow.svg";
import Yourjourneycontactus from "./Yourjourneycontactus.svg";
import './Properties2.scss';
import img1 from './img1.svg';
import img2 from './img2.svg';

const Properties2 = (props) => {
    const yourjourneydescription = "HPR Luxury Flats (Godavari Builders & Developers) is a premier luxury home builder and developer backed with solid years of experience in real estate. We specialize in building distinguished luxury apartments and Gated Community villas at the best industry rates in prime locations in Anantapur. HPR Luxury Flats understands that we aren't building homes but turning your dream into an ambient reality which should foster a lifetime of memories. We always hand-select, passionate designers, experienced architects, highly knowledgeable structural Engineers, Civil engineers, Customer servicing team and different experts and specialists in various departments whose focus is on precision, right down to the minutest detail. Our dedication to excellence through superior workmanship and maintaining honest relationships have made us achieve a unique place in the real estate industry.We always ensure that all the materials used are the best of quality that aids in longevity and hassle-free usage for our clients. Our rich experience and commitment to quality have paid the way for us to complete 2 projects, 100+ homes at a total construction area of 3,50,000 sqft at a short time and that is not it, our upcoming construction is around a huge area of 5,00,000 sqft. As a dedicated residential developer, we continually developing homes to meet specific designs that you envision while building a place for love, laughter, and growth. Being devoted to understanding the unique needs and lifestyle of our valuable clients, Skys Adobe projects come with a perfect combination of precise engineering, aesthetic appeal, traditional craftsmanship, and contemporary designing. ";
    
    return (
        <>
        <Godavariheader />
        <Yourjourney heading="Your journey to get dream home is very near now" description={yourjourneydescription} btn="Contact us" img={Yourjourneycontactus} leftarrowimg={leftarrowyourjourney} rightarrowimg={rightarrowyourjourney} imgPath={Appartmentimage}/>
        <Amenities/>
        <Floorplan img1={img1} img2={img2} background="white" />
        <div className="road-map">
            <Road roadImage={roadImg} width="583px" height="555px" roadtext="800Meters to D-Mart" roadtext2="200 Meters to Tapovanam Circle" heading="Location Advantages"/>
            <Map />
        </div>
        <GetInTouch/>
        <Propertiesfooter />
        </>
     
    )
}

export default Properties2;