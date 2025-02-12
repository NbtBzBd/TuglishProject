import React from "react";
import './Score.css';

export default function({score, img, description, children}) {

    return <section hidden className="scoreboard">
        <div className="scoreboard-text">
            <p className="title">PONTUAÇÃO</p>
            <span className="score">{score}/10</span>
            <p className="description">
                {description}
            </p>
            {children}
        </div>
        <div className={img}></div>
    </section>
    
}