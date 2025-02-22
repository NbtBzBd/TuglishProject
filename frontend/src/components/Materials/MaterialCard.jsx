import React from "react";
import './MaterialCard.css';

export default function(props) {
    return <div className="material-card">
                <div className="img"></div>
                <div className="material title-2">{props.title}</div>
                <div className="text">
                    {props.subtitle}
                </div>
                <div><button className="btn-normal p-bg-color-2 button">VEJA MAIS</button></div>
            </div>
}