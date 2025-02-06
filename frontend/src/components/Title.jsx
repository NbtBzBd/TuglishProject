import React from "react";
import './Title.css';

export default function(props) {
    return <>
    <div className="title-generic">
        <h1 className="title">{props.title}</h1>
        <p className="subtitle">
            {props.subtitle}
        </p>
    </div>
    </>
}