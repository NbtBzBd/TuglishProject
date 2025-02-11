import React, {useEffect} from "react";
import Cover from "./Main/Cover";
import Contents from "./Main/Contents";
import Card from "./Main/Card";
import Block from "./Main/Block";
import { Link } from "react-router";
import ModulosCards from "./Main/ModulosCards";
import { cover1, cover2, cover3, content1, content2, content3 } from "./Main/Util";
import { ToastContainer, toast } from 'react-toastify';
import './Main.css';

export default function() {
    useEffect(() => {
        window.scrollTo(0, 0);
        const msg = localStorage.getItem('msg');
        if (msg) {
            toast.success(msg, {
                position: 'top-center',
            });
            localStorage.removeItem('msg');
        }
    }, [])
    
    return <>
    <ToastContainer />
    <main className="main">
        <Cover title={cover1.title} paragraph={cover1.paragraph} classStyle="cover-text" img="cover-img">
            <Link to="/singup"><button className="btn-normal p-color-1">COMECE AGORA</button></Link>
        </Cover>

        <Contents title={content1.title} button="MAIS CONTÉUDOS">
            <Card paragraph={content1.c1} />
            <Card paragraph={content1.c2} />
            <Card paragraph={content1.c3} />
        </Contents>

        <Contents color="alternative" padding title={content2.title} button="ACESSAR MÓDULOS">
            <ModulosCards />
            <ModulosCards />
            <ModulosCards />
        </Contents>

        <Cover title={cover3.title} paragraph={cover3.paragraph} classStyle="cover-list" img="motiv-img" button="SAIBA MAIS">
            <ul>
                <li>Leia um texto de curiosidades sobre a computação.</li>
                <li>Estude o tema abordado em cada módulo.</li>
                <li>Conclua as atividades avaliativas no fim de cada módulo.</li>
            </ul>
        </Cover>

        <Cover title={cover2.title} paragraph={cover2.paragraph} classStyle="cover-text" img="about-img">
            <Link to="/about"><button className="btn-normal p-color-1">SAIBA MAIS</button></Link>
        </Cover>
        
        <Contents extra="cards" title={content3.title} color="hide">
            <Block classNum="card1-img" text="Acesso a Recursos e Documentação" subText={content3.c1} />
            <Block classNum="card2-img" text="Acesso a cursos e certificações" subText={content3.c2} />
            <Block classNum="card3-img" text="Oportunidade de carreira" subText={content3.c3} />
        </Contents>
    </main>
    </>
}