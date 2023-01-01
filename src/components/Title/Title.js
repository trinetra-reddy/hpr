import React from 'react';
import './Title.scss';
 const Title = (props) =>{
     return (
        <>
        <div className="title-main">
            <span className={`${props.classname} title-wrapper`}>
                {props.name}
            </span>
            <span>
                {props.name2}
            </span>
        </div>
        </>
     )
 }
 export default Title;