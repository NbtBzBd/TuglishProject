import React, {useEffect} from "react";
import axios from 'axios';
import ModulosCards from "./Main/ModulosCards";
import Title from "./Title";
import './Modules.css';

const Modules = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    
    let modules = [];
    for (let i = 0; i < 9; i++) {
        modules.push(<ModulosCards />);
    }
    return <>
    <Title title={<>Comece a aprender agora!</>} subtitle={<>Explore os nossos módulos e comece a aprender inglês
        de forma simples e intuitiva.</>} />
    <main className="modules">
        {modules}
    </main>
    </>
}
export default Modules;