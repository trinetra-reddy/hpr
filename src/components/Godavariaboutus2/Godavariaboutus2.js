import React from 'react';
import './Godavariaboutus2.scss';

const Godavariaboutus2 = (props) => {
    return (
        <>
            <div className="godavariaboutus2">
                <div className="godavariaboutus2-left">
                    <div className="godavariaboutus2-left-heading">
                        <h1>{props.heading}</h1>
                    </div>
                    <div className="godavariaboutus2-left-heading1">
                        <h2>{props.heading1}</h2>
                    </div>
                    <div className="godavariaboutus2-left-content">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="godavariaboutus2-right">
                    <img alt="" className="godavariaboutus2-right-image" src={props.imgPath} />
                </div>
            </div>
        </>
    );
}
export default Godavariaboutus2;
