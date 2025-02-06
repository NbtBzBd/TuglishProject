import React from "react";
import './Block.css'

export default function(props) {
    return <div className="card base-bg-color-7">
                <div className={props.classNum}></div> {/* "card1-img" */}
                <div className="paragrafo-2">{props.text}</div> {/* Acesso a Recursos e Documentação */}
                <div>{props.subText}</div> {/* A maioria das documentações técnicas na área da computação estão em inglês. */}
            </div>
}