import React, { useEffect } from "react";
import './Godavariheader.scss';
import godavarilogo from "./Godavari-logo.jpg";
import godavarimenu from '../../images/menu-open.svg';
import godavariclose from '../../images/menu-close.svg';
import Headercontactus from "./Headercontactus.svg";
import { NavLink } from "react-router-dom";

const Godavariheader = () => {
  useEffect(() => {
    setTimeout(() => {
    }, 500)

  }, []);

  const onToggleclick = () => {
    const hamburgermenu = document.querySelector('.hamburgermenu');
    const navbarLink = document.querySelector('.navbar__link');
    if (hamburgermenu && navbarLink) {

      navbarLink.classList.toggle('hide');
      if (hamburgermenu.classList.contains('expanded')) {
        hamburgermenu.classList.remove('expanded');
      } else {
        hamburgermenu.classList.add('expanded');
      }


    }
  }
  return (
    <header>
      <nav className="nav-bar">
        <div className="godavari_logo_wrapper">
        <img className="godavari_logo" src={godavarilogo} alt="godavarilogo" />
        </div>
        <div className="hamburgermenu" onClick={onToggleclick}>
          <div className="menu">
            <img src={godavarimenu} className="godavarimenu" alt="hamburger" />
          </div>
          <div className="close">
            <img src={godavariclose} className="godavariclose" alt="close" />
          </div>
        </div>

        <div className="navbar__link hide">
          <NavLink to="/godavari-builders" activeclassname="active">Home</NavLink>
          <NavLink to="/g-about-us" activeclassname="active">About Us</NavLink>
          <div className="drop-down">
            <a  className="drop-down-item">Properties</a>
            <ul className="dropdown">
                  <li><NavLink to="/luxury-houses" activeclassname="active">Luxury Houses</NavLink></li>
                  <li><NavLink to="/little-oaks" activeclassname="active">Little OAKS</NavLink></li>
              </ul>
          </div>
          <NavLink to="/g-contact-us"className="header-contactus-button">Contact Us <img src={Headercontactus} alt="headercontactus" /></NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Godavariheader;