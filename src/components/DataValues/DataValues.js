import React from 'react';
import './DataValues.scss';
const DataValues = (props) =>{
    return(
        <>
        <div className="DataValue-main-container" >
            <div className="DataValue-heading-wrapper">
                <h3 className="DataValue-heading">{props.heading}</h3>
            </div>
            <div className="DataValue-count-wrapper">
                <h1 className="DataValue-count">{props.count}</h1>
            </div>
            <div className="DataValue-description-wrapper">
                <p className="DataValue-description">{props.description}</p>
            </div>
        </div>
        </>
    )

}
export default DataValues;