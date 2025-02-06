import React from "react";
import './Card.css';

export default function(props) {
    return <div className="mod-card">
                <div className="img"></div>
                <div className="modulo title-2">{props.title}</div>
                <div className="text">
                    {props.subtitle}
                </div>
                <div><button className="btn-normal p-bg-color-2 button">VEJA MAIS</button></div>
            </div>
}