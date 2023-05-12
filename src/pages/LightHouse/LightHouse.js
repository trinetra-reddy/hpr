import React from 'react';
import { Godavariheader, LightHouseCarousel, LightHouseVideo, Propertiesfooter } from '../../components';
import lighthouseimg1 from "../../images/LightHouseCarouselimages/lighthouse-img1.jpg";
import lighthouseimg2 from "../../images/LightHouseCarouselimages/lighthouse-img2.jpg";
import lighthouseimg3 from "../../images/LightHouseCarouselimages/lighthouse-img3.jpg";
import lighthouseimg4 from "../../images/LightHouseCarouselimages/lighthouse-img4.jpg";
import lighthouseimg5 from "../../images/LightHouseCarouselimages/lighthouse-img5.jpg";
import lighthouseimg6 from "../../images/LightHouseCarouselimages/lighthouse-img6.jpg";
import lighthouseimg7 from "../../images/LightHouseCarouselimages/lighthouse-img7.jpg";
import lighthouseimg8 from "../../images/LightHouseCarouselimages/lighthouse-img8.jpg";
import lighthouseimg9 from "../../images/LightHouseCarouselimages/lighthouse-img9.jpg";
import lighthouseimg10 from "../../images/LightHouseCarouselimages/lighthouse-img10.jpg";
import lighthouseimg11 from "../../images/LightHouseCarouselimages/lighthouse-img11.jpg";

const LightHouse = () => {

    const lightHouseCarouselImages1 = [lighthouseimg1, lighthouseimg2, lighthouseimg3, lighthouseimg4, lighthouseimg5, lighthouseimg6, lighthouseimg7, lighthouseimg8];
    const lightHouseCarouselImages2 = [lighthouseimg9, lighthouseimg10, lighthouseimg11];

    return (
        <>
            <Godavariheader />
            <LightHouseVideo />
            <LightHouseCarousel lightHouseimages={lightHouseCarouselImages1} />
            <LightHouseCarousel lightHouseimages={lightHouseCarouselImages2} />
            <Propertiesfooter />
        </>
    )
}
export default LightHouse;