import React, { useState } from "react";
import axios from 'axios';
import Title from "./Title";
import { Link } from "react-router";
import './Singup.css';

export default function() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const height = document.querySelector('body').clientHeight;
    window.scrollTo(0, height/2)
    async function singup() {
        const aluno = {
            nome: name,
            email: email,
            senha: password
        }
        try {
            const response = await axios.post('http://172.18.10.203:5000/api/aluno', aluno);
            setName('');
            setEmail('');
            setPassword('');
            
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
    return <>
    <Title title={<>CADASTRO</>} subtitle={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>} />
    <main className="singup">
        <div className="singup-img"></div>
        <div className="singup-main">
            <h1 className="singup-title">Criar conta</h1>
            <span className="singup-subtitle"><span>Já possui uma conta? Faça</span> <Link to='/login'>login!</Link></span>
            <div className="singup-inputs">
                <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Escolha o seu nome de usuário" />
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite o seu endereço de email" />
                <input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite a sua senha" />
            </div>
            <button className="btn-normal p-bg-color-2 base-color-9" onClick={() => singup()} >CRIAR CONTA</button>
        </div>
    </main>
    </>
}