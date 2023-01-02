import React from "react";

import "./DownloadBrochure.scss";

const DownloadBrochure = (props) => {
    return (
        <>
            {props.path &&
                <a className="download-brochure-link" href={props.path} download>
                    <button className="download-brochure" name="downalod">
                        Download Brochure
                    </button>
                </a>
            }
        </>
    );
};
export default DownloadBrochure;
