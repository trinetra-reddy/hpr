import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import happyimg2 from "../../images/HappyClients/happyboy.png";
import happyimg3 from "../../images/HappyClients/happygirl.png";
import HappyClientsDetails from './HappyClientsDetails';


const HappyClientsWrapper=()=>{
    const happyClientDes1 = 'This company is providing AHUDA approved projects or super development marketing emplace good service this company has good level of  marketing spread to India level or god blessed this company';
    const happyClientDes2 = 'I purchased 01 plot in HPR GODAVARI Builders & Developers  plot of AHUDA Approved layout First thanks to Management Good service giving Marketing team I will hope to expect plot within One year Double amount will be increased Once again thanks to Management because they are given full support to customers';
    const happyClientDes3 = 'Good way to buying plots here. One of the best Realtors in Anantapur , They have AHUDA Approved Open plots from Godavari Builders & Developers . It values for our money';
    const happyClientDes4 = 'Im very happy to take 2 plot in AHUDA Approved Layout. HPR GODAVARI Builders & Developers is a one of the best Remarkable company .Good service management ';
    return (
        <>       
             <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    //   }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="clients-swiper top-carousel-nav"
                >
                    <SwiperSlide>
                        <HappyClientsDetails happyContent={happyClientDes1} image2={happyimg2} client1="Krishna Kanth" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HappyClientsDetails happyContent={happyClientDes2} image2={happyimg3} client1="Ramika sayn" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HappyClientsDetails happyContent={happyClientDes3} image2={happyimg2} client1="Trinethra Reddy" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HappyClientsDetails happyContent={happyClientDes4} image2={happyimg2} client1="Giridhar" />
                    </SwiperSlide>                    
                </Swiper>
            
        </>
    );
};

export default HappyClientsWrapper;