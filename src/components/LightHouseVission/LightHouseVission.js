import React from "react";
import logo from "../../images/Godavari-logo.jpg";
import "./LightHouseVission.scss";
const LightHouseVision = () => {
  return (
    <>
      <div className="LightHouseVision-Container">
        <div className="LightHouseVision-subContainer1">
          <div className="LightHouseVision-Header">
            <h1>Vision</h1>
          </div>
          <div className="LightHouseVision-content">
            <p>
              Set with an unlimited horizon, our vision is to continuously excel
              in every aspect of real estate industry by corporating proven,
              professional state-of-the-art techniques in every stage of
              construction such as Designing, planning, execution, customer
              service, on-time delivery which extracts integrity, quality, and
              reliability.
            </p>
          </div>
          <div className="LightHouseVision-Highlighter">
            <h1>We turn your everyday into a luxurious experience.</h1>
          </div>
        </div>
        <div className="LightHouseVision-subContainer2">
          <div className="LightHouseVision-Logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="LightHouseVision-content">
            <p>
              HPR Luxury Flats (Godavari Builders & Developers) is a premier
              luxury home builder and developer backed with solid years of
              experience in real estate. We specialize in building distinguished
              luxury apartments and Gated Community villas at the best industry
              rates in prime locations in Anantapur. HPR Luxury Flats
              understands that we aren't building homes but turning your dream
              into an ambient reality which should foster a lifetime of
              memories. We always hand-select, passionate designers, experienced
              architects, highly knowledgeable structural Engineers, Civil
              engineers, Customer servicing team and different experts and
              specialists in various departments whose focus is on precision,
              right down to the minutest detail. Our dedication to excellence
              through superior workmanship and maintaining honest relationships
              have made us achieve a unique place in the real estate industry.
              We always ensure that all the materials used are the best of
              quality that aids in longevity and hassle-free usage for our
              clients. Our rich experience and commitment to quality have paid
              the way for us to complete 2 projects, 100+ homes at a total
              construction area of 3,50,000 sqft at a short time and that is not
              it, our upcoming construction is around a huge area of 5,00,000
              sqft. As a dedicated residential developer, we continually
              developing homes to meet specific designs that you envision while
              building a place for love, laughter, and growth. Being devoted to
              understanding the unique needs and lifestyle of our valuable
              clients, Skys Adobe projects come with a perfect combination of
              precise engineering, aesthetic appeal, traditional craftsmanship,
              and contemporary designing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LightHouseVision;
