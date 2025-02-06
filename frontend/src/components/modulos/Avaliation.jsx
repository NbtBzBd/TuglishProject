import React, { Component } from "react";
import Question from "./avaliation/Question";
import Score from './avaliation/Score';
import Title from "../Title";
import "./Avaliation.css";

export default class Avaliation extends Component {

    state = {
        score: 0,
        lasted: 10
    }

    decrementLasted() {
        this.setState({lasted: this.state.lasted - 1});
        if (this.state.lasted == 1) {
            document.querySelector('.scoreboard').style.display = 'flex';
        }
    }

    incrementScore() {
        this.setState({score: this.state.score + 1});
    }

    render() {
        return <main className="avaliation">
            <Title title={<>MODULO 1: Avaliação</>} 
            subtitle={<>Chegou o momento de avaliar tudo o que você aprendeu neste módulo. 
                    Leia atentamente cada questão, confie no seu conhecimento e mostre o 
                    quanto avançou. Boa sorte!</>} />
            <div className="body-avaliation">
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk1'/>
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk2' />
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk3' />
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk4' />
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk5' />
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk6' />
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk7' />
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk8' />
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk9' />
                <Question decrement={this.decrementLasted.bind(this)} increment={this.incrementScore.bind(this)} num='tsk10' />
                <Score score={this.state.score}/>
            </div>
        </main>
    }

}