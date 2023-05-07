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
    const yourdreamhousedescription = "HPR Luxury Flats (Godavari Builders & Developers) is a premier luxury home builder and developer backed with solid years of experience in real estate. We specialize in building distinguished luxury apartments and Gated Community villas at the best industry rates in prime locations in Anantapur. HPR Luxury Flats understands that we aren't building homes but turning your dream into an ambient reality which should foster a lifetime of memories. We always hand-select, passionate designers, experienced architects, highly knowledgeable structural Engineers, Civil engineers, Customer servicing team and different experts and specialists in various departments whose focus is on precision, right down to the minutest detail. Our dedication to excellence through superior workmanship and maintaining honest relationships have made us achieve a unique place in the real estate industry.We always ensure that all the materials used are the best of quality that aids in longevity and hassle-free usage for our clients. Our rich experience and commitment to quality have paid the way for us to complete 2 projects, 100+ homes at a total construction area of 3,50,000 sqft at a short time and that is not it, our upcoming construction is around a huge area of 5,00,000 sqft. As a dedicated residential developer, we continually developing homes to meet specific designs that you envision while building a place for love, laughter, and growth. Being devoted to understanding the unique needs and lifestyle of our valuable clients, Skys Adobe projects come with a perfect combination of precise engineering, aesthetic appeal, traditional craftsmanship, and contemporary designing. ";

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