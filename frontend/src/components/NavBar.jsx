import React, { useState } from "react";
import { Link } from "react-router";
import './NavBar.css';
import group from './assets/imgs/Group5.png';

const NavBar = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <header className="header">
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
                    <Link to="/modules">Unidades</Link>
                    <Link to="/about">Sobre Nós</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/singup"><button className="btn-normal p-color-1">CADASTRO</button></Link>
                </div>
                <div className="menu-sidebar" onClick={() => setSidebarActive(!sidebarActive)}>
                </div>
            </nav>
            <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
                <div className="title">
                    <span>Tuglish</span>
                    <div className="close" onClick={() => setSidebarActive(false)}>X</div>
                </div>
                <Link to="/" className="link-sidebar">Home</Link>
                <Link to="/materials" className="link-sidebar">Materiais</Link>
                <Link to="/modules" className="link-sidebar">Unidades</Link>
                <Link to="/about" className="link-sidebar">Sobre Nós</Link>
                <Link to="/login" className="link-sidebar">Login</Link>
                <Link to="/singup" className="link-sidebar">Cadastro</Link>
            </div>
        </header>
    );
}

export default NavBar;