import React from "react";
import {Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Materials from './components/Materials';
import About from './components/About';
import Avaliation from "./components/modulos/Avaliation";
import Singup from "./components/Singup";
import Login from "./components/Login";
import Modules from "./components/Modules";

export default function() {
    return <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Main />} />
        <Route path="/module/avl" element={<Avaliation />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/modules" element={<Modules />} />
    </Routes>
    
}