import React, { Component } from "react";
import './Task.css';

export default class Task extends Component {

    answer(element) {
        if (element.target.classList.contains("correct")) {
            element.target.style.backgroundColor = '#7ed957'; 
            this.props.increment();
        } else {
            element.target.style.backgroundColor = '#fe725d'; 
        }
        const task = document.querySelector(`.${this.props.num}`)
        task.querySelectorAll('.task-button').forEach((button) => {
            button.disabled = true;
            button.style.color = '#313c44';
        })
        this.props.decrement();
    }

    render() {
        return <div className={'task '+this.props.num}>
            <div>
                <h3 className="task-title">QUESTÃO 01:</h3>
                <p className="task-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua:    
                </p>
            </div>
            <div className="task-text">
                <button onClick={e => this.answer(e)} className="task-button correct">alternativa n° 1: texto da alternativa de número um...</button>
                <button onClick={e => this.answer(e)} className="task-button wrong">alternativa n° 2: texto da alternativa de número dois...</button>
                <button onClick={e => this.answer(e)} className="task-button wrong">alternativa n° 3: texto da alternativa de número tres...</button>
                    <button onClick={e => this.answer(e)} className="task-button wrong">alternativa n° 4: texto da alternativa de número quadro...</button>
            </div>
            <div>
                <h3 className="task-title">EXPLICAÇAO</h3>
                <p className="task-text">A resposta está correta! Explicação do porquê está é a alternativa correta...</p>
            </div>
        </div>
    }
    
}