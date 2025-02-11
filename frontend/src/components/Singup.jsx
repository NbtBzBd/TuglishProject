import React, { useState, useEffect } from "react";
import axios from 'axios';
import Title from "./Title";
import { Link, useNavigate } from "react-router";

import './Singup.css';

export default function() {
    useEffect(() => {
        const height = document.querySelector('body').clientHeight;
        window.scrollTo(0, height/2)
    }, []);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function singup() {
        const spans = document.querySelectorAll('.error-message');
        const inputs = document.querySelectorAll('.required');
        spans.forEach((span, index) => {
            inputs[index].style.border = 'none';
            span.style.display = 'none';
        })
        if (nameValidation() && emailValidation() && passwordValidation() && comfirmValidation()) {
            const aluno = {
                nome: name,
                email: email,
                senha: password
            }
            try {
                await axios.post('http://localhost:5000/api/aluno', aluno);
                localStorage.setItem('msg', `Seja bem vindo ao tuglish ${aluno.nome}!`);
                setName('');
                setEmail('');
                setPassword('');
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        } else {
            nameValidation();
            emailValidation();
            passwordValidation();
            comfirmValidation();
        }

        console.log()
        
    }
    function showError(index) {
        const spans = document.querySelectorAll('.error-message');
        const inputs = document.querySelectorAll('.required');
        inputs[index].style.border = '1px solid #ff3131'
        spans[index].style.display = 'block';
    }
    function nameValidation() {
        const inputs = document.querySelectorAll('.required');
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        if (inputs[0].value.length < 5 || !regex.test(inputs[0].value)) {
            showError(0)
            return false;
        } else {
            return true;
        }
    }
    function emailValidation() {
        const inputs = document.querySelectorAll('.required');
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
        if (!regex.test(inputs[1].value)) {
            showError(1)
            return false;
        } else {
            return true;
        }
    }
    function passwordValidation() {
        const inputs = document.querySelectorAll('.required');
        const regex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
        if (inputs[2].value.length < 10 || !regex.test(inputs[2].value)) {
            showError(2)
            return false;
        } else {
            return true;
        }
    }
    function comfirmValidation() {
        const inputs = document.querySelectorAll('.required');
        if (inputs[3].value !== inputs[2].value) {
            showError(3)
            return false;
        } else {
            return true;
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
                <input className="required" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Escolha o seu nome de usuário" />
                <span className="error-message">O nome precise ter no mínimo 5 letras e somente letras e espaços!</span>
                <input className="required" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite o seu endereço de email" />
                <span className="error-message">Forneça um email válido!</span>
                <input className="required" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite a sua senha" />
                <span className="error-message">A senha precisa ter no minimo 10 caracteres e ter numero(os) e letra(as)!</span>
                <input className="required" type="password" placeholder="Repita sua senha" />
                <span className="error-message">As senhas nao coecidem!</span>
            </div>
            <button className="btn-normal p-bg-color-2 base-color-9" onClick={() => singup()} >CRIAR CONTA</button>
        </div>
    </main>
    </>
}