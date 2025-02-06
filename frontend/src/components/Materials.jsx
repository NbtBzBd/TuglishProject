import React from "react";
import './Materials.css';
import Card from "./Materials/Card";
import { cards } from "./Materials/util";

export default function() {
    window.scrollTo(0, 0);
    return <div className="container-materials">
        <Card title="DICIONARIOS" subtitle={cards.st1} />
        <Card title="APPS E SITES" subtitle={cards.st2} />
        <Card title="VIDEO AULAS" subtitle={cards.st3} />
        <Card title="TEXTOS E ARTIGOS" subtitle={cards.st4} />
        <Card title="GRAMÁTICA" subtitle={cards.st5} />
        <Card title="EXEMPLOS" subtitle={cards.st6} />
    </div>
}