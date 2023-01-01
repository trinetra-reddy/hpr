import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './imageCarousel.scss';
import Contactusbutton from "../Contactusbutton/Contactusbutton";
import carousel2 from "../../images/carouselImages/houseimage.jpg";
import carousel3 from "../../images/carouselImages/openplotimage.jpeg";
import carousel4 from "../../images/carouselImages/apartment1.jpeg";
import carousel5 from "../../images/carouselImages/house1.jpeg";
import carousel6 from "../../images/carouselImages/home2.jpeg";
import carousel7 from "../../images/carouselImages/home3.jpeg";

const ImageCarousel = () => {

    const images = [carousel2, carousel3, carousel4, carousel5, carousel6, carousel7];
    return (
        <>
        <div className="image-carousel">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="ImageCarousel-swiper"
            >
                {images.map((image, index) =>(
                    <SwiperSlide key={index}>
                        <div className="image-carousel__slide">
                            <div className="image-carousel__content">
                                <h2>Godavari Builders <span>&</span> <br/> Developers</h2>
                                <Contactusbutton />
                            </div>
                            <img className="CarouselImage" src={image} alt="Carouselimage1" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </>
    );
};

export default ImageCarousel;