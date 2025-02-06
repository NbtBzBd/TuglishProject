import React from "react";
import './Section.css';

export default function(props) {
    
    return <div className="section">
            <div className="section-text">
                <>
                    <span className="title-1">
                            {props.title}
                    </span>
                    <div className="section-text-paragraph">
                        {props.paragraph}
                    </div>
                </>
            </div>
            <div className={`section-img ${[props.imgClass]}`}></div>
        </div>
}