import React from "react";
import Task from "./Task";
import TextQuestion from "./TextQuestion";
import './Question.css'

export default function({num, increment, decrement}) {
    return <section className="question">
        <div>
            <TextQuestion />
            <Task decrement={decrement} increment={increment} num={num}/>
        </div>
    </section>
}