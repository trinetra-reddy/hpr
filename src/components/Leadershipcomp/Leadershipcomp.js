import React from 'react';
import './Leadershipcomp.scss';

 const Leadershipcomp = (props) =>{
     return <>
         <div className={`Leadership-main ${props.imgPosition}`}>
            <div className="left-container">
                <img className="Leader-img" src={props.img} alt="pratap" />
            </div>
            <div className="right-container">
                <h1 className="Holder-name">{props.name} <sub className="leadership__degree">{props.degree}</sub></h1>
                <div className="leadership__designation">{props.designation}</div>
                <div>{props.desc}</div>
            </div>
         </div>
     </>
 }
 export default Leadershipcomp;