import React from "react";
import group from './assets/imgs/Group5.png';
import './Footer.css';
import { Link } from "react-router";

export default function() {
    return <footer className="footer">
        <div className="title">
            <div>
                <img height="50" width="50" src={group} alt="logo"/>
                <div className="text-title"><span>Tuglish</span>
                    <p className="sub-title">ENGLISH FOR COMPUTING</p>
                </div>
            </div>
        </div>
        <div>
            <div className="second">
                <span className="subtitle subtitle-3">CONTATO</span>
                <ul>
                    <li className="paragrafo-1">+55 (00) 12345-6789</li>
                    <li className="paragrafo-1">teachspeak@gmail.com</li>
                </ul>
                <hr/>
                <ul>
                    <li className="paragrafo-1">IFCE - Campus Iguatu</li>
                    <li className="paragrafo-1">Unidades Cajazeiras</li>
                </ul>
                <hr/>
                <span id="lst-icons">
                    <i className="fa-brands fa-instagram" style={{color:"#fff"}}></i>
                    <i className="fa-brands fa-facebook" style={{color:"#fff"}}></i>
                    <i className="fa-brands fa-x-twitter" style={{color:"#fff"}}></i>
                </span>
            </div>
        </div>
        <div>
            <div>
                <span className="subtitle subtitle-3">INFORMAÇÕES</span>
                <ul>
                    <li className="paragrafo-1">Materiais</li>
                    <li className="paragrafo-1">Unidades</li>
                    <li className="paragrafo-1">Sobre Nós</li>
                    <li className="paragrafo-1">Login</li>
                </ul>
                <Link to={"/singup"}><button className="btn-normal p-color-1">CADASTRO</button></Link>
            </div>
        </div>
    </footer>
}