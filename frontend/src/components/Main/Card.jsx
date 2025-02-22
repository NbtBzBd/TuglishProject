import React from "react";
import './Card.css';

export default function(props) {
    return <div>
                <div className="content-img"></div>
                <div className="paragrafo-2">{props.paragraph}</div>
            </div>

}   