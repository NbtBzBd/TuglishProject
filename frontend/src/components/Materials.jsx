import React from "react";
import './Materials.css';
import MaterialCard from "./Materials/MaterialCard";
import { cards } from "./Materials/util";
import Title from "./Title";

export default function() {
    window.scrollTo(0, 0);
    return <>
    <Title title="MATERIAIS" subtitle="..."/>
    <div className="container-materials">
        <MaterialCard title="DICIONARIOS" subtitle={cards.st1} />
        <MaterialCard title="APPS E SITES" subtitle={cards.st2} />
        <MaterialCard title="VIDEO AULAS" subtitle={cards.st3} />
        <MaterialCard title="TEXTOS E ARTIGOS" subtitle={cards.st4} />
        <MaterialCard title="GRAMÁTICA" subtitle={cards.st5} />
        <MaterialCard title="EXEMPLOS" subtitle={cards.st6} />
    </div>
    </>
}