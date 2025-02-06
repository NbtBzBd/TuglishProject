import React from "react";
import './Cover.css';

export default function(props) {
    return <div className="cover">
            <div className={props.classStyle}>
                <span className="title-1">
                    {props.title}
                </span>
                <span className="cover-text-paragraph">
                    {props.paragraph}
                </span>
                <span>
                    {props.children}
                </span>
            </div>
            <div className={props.img}></div>
        </div>
}