import React from "react";
import "./LighthouseProducts.scss";
import Swimming from "../../images/Swimming.jpg";
import Sports from "../../images/Sports.jpg";
import Health from "../../images/Health.jpg";
import Convinience from "../../images/Convinience.jpg"; 
const LighthouseProducts = () => {
  return (
      <div className="lighthouse-products-main"> 
        <h2 className="lighthouse-products-heading"><div>Make every day</div> extraordinary with our products</h2>
        <div className="lighthouse-images">
            <div className="lighthouse-product-container">
            <img className="products-img1" src={Swimming} />
            </div>
            <div className="lighthouse-product-container">
            <img className="products-img1" src={Health} />
            </div>
        </div>
        <div className="lighthouse-images">
            <div className="lighthouse-product-container">
            <img className="products-img1" src={Sports} />
            </div>
            <div className="lighthouse-product-container">
            <img className="products-img1" src={Convinience} />
            </div>
        </div>
      </div>
  );
};
export default LighthouseProducts;
