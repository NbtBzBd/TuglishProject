import React from "react";
import './ModulosCards.css';

export default function ModulosCard() {
    return (
        <div className="mod-card">
            <div className="img"></div>
                <div className="modulo title-2">MÓDULO 1</div>
                <div className="text">
                    Aprenda cognatos e formação de palavras enquanto descobre curiosidades sobre as IA’s.
                </div>
                <div>
                    <button className="btn-normal p-bg-color-2 button">
                        INICIAR
                    </button>
                </div>
            </div>
    )
}