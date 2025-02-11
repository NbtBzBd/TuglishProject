import React, { Component } from "react";
import './Score.css';

export default function({score, img, description}) {

    return <section hidden className="scoreboard">
        <div className="scoreboard-text">
            <p className="title">PONTUAÇÃO</p>
            <span className="score">{score}/10</span>
            <p className="description">
                {description}
            </p>
            <button className="btn-normal p-bg-color-2 base-color-9">PRÓXIMO MÓDULO</button>
        </div>
        <div className={img}></div>
    </section>
    
}