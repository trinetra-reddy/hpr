import React from 'react';
import './Leadershipcomp.scss';

 const Leadershipcomp = (props) =>{
     return <>
         <div className={`Leadership-main ${props.imgPosition}`}>
            <div className="left-container">
                <img className="Leader-img" src={props.img} alt="pratap" />
            </div>
            <div className="right-container">
                <h1 className="Holder-name">{props.name}</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa</div>
            </div>
         </div>
     </>
 }
 export default Leadershipcomp;