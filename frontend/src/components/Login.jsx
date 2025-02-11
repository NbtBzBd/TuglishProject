import React, {useState, useEffect} from "react";
import Title from "./Title";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import './Login.css';


export default function() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const height = document.querySelector('body').clientHeight;
        window.scrollTo(0, height/2)
    }, [])

    async function login() {
        try {
            const aluno = await axios.get('http://localhost:5000/api/aluno', {
            params: {
                email,
                password
            }});
            localStorage.setItem('aluno',JSON.stringify(aluno.data[0]))
            localStorage.setItem('msg', `Bem vindo de volta ${aluno.data[0].nome}!`)
            navigate('/');
        } catch (error) {
            console.log(error);
            
        }
    }

    return <>
    <Title title={<>LOGIN</>} subtitle={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>} />
    <main className="login">
        <div className="login-img"></div>
        <div className="login-main">
            <h1 className="login-title">Login</h1>
            <span className="login-subtitle"><span>JNão possui uma conta?</span> <Link to='/singup'>Registre-se!</Link></span>
            <div className="login-inputs">
                <input required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Digite o seu endereço de email" />
                <input required value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Digite a sua senha" />
            </div>
            <button onClick={() => login()} className="btn-normal p-bg-color-2 base-color-9" >LOGAR</button>
        </div>
    </main>
    </>
}