import React from "react";
import { Link } from "react-router";
import './NavBar.css';
import group from './assets/imgs/Group5.png';

export default function() {
    return <header className="header">
        <nav className="nav">
            <div className="title">
                <img height="50" width="50" src={group} alt="logo" />
                <div className="text-title"><span>Tuglish</span>
                    <p className="sub-title">ENGLISH FOR COMPUTING</p>
                </div>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/materials">Materiais</Link>
                <Link to="/">Unidades</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/login">Login</Link>
                <Link to="/singup"><button className="btn-normal p-color-1">CADASTRO</button></Link>
            </div>
            <div className="menu-sidebar">
            </div>
        </nav>
    </header>
}