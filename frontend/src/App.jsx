import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { HashRouter, BrowserRouter } from "react-router-dom";
import Routers from "./Routers";

export default function() {
    return <HashRouter>
                <NavBar />
                <Routers />
                <Footer />
            </HashRouter>
}