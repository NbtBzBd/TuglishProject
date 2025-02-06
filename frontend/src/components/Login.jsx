import React from "react";
import Title from "./Title";
import { Link } from "react-router";
import './Login.css';


export default function() {
    const height = document.querySelector('body').clientHeight;
    window.scrollTo(0, height/2)
    return <>
    <Title title={<>LOGIN</>} subtitle={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>} />
    <main className="login">
        <div className="login-img"></div>
        <div className="login-main">
            <h1 className="login-title">Login</h1>
            <span className="login-subtitle"><span>JNão possui uma conta?</span> <Link to='/singup'>Registre-se!</Link></span>
            <div className="login-inputs">
                <input required type="email" placeholder="Digite o seu endereço de email" />
                <input required type="password" placeholder="Digite a sua senha" />
            </div>
            <button className="btn-normal p-bg-color-2 base-color-9" >CRIAR CONTA</button>
        </div>
    </main>
    </>
}