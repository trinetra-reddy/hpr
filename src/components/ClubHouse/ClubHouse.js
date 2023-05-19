import React from "react";
import clubhouse from "../../images/clubhouse.jpg";
import "./ClubHouse.scss";
const ClubHouse = () => {
  return (
    <>
      <div className="clubhouse-main">
        <div className="clubhouse-left">
            <h3 className="clubhouse-heading">CLUB HOUSE</h3>
          <ul className="clubhouse-list">
            <li className="clubhouse-lists"> Swimming Pool for Childrens</li>
            <li className="clubhouse-lists">Banquet Hall - 300+ Seating</li>
            <li className="clubhouse-lists">Super Market</li>
            <li className="clubhouse-lists">Table Tennis</li>
            <li className="clubhouse-lists">ATM & CDM</li>
            <li className="clubhouse-lists">Indoor GYM</li>
            <li className="clubhouse-lists">Yoga & Meditation Room</li>
            <li className="clubhouse-lists">Home Theater – 40 Nos Seating</li>
            <li className="clubhouse-lists">Library- Senior Citizen Room</li>
            <li className="clubhouse-lists">Saloon</li>
            <li className="clubhouse-lists">Pharmacy</li>
            <li className="clubhouse-lists">Coffee Hub</li>
            <li className="clubhouse-lists">Cricket Net Practice</li>
            <li className="clubhouse-lists">Multi Purpose Hall </li>
          </ul>
        </div>
        <div className="clubhouse-right">
          <img className="clubhouse-img" src={clubhouse} />
        </div>
      </div>
    </>
  );
};
export default ClubHouse;