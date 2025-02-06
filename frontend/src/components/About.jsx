import React from "react"
import Section from "./About/Section"
import './About.css';
import { sec1, sec2, sec3, sec4 } from "./About/util"

export default function() {
    window.scrollTo(0, 0);
    return <div className="about">
                <Section title={sec1.t} paragraph={sec1.p} imgClass="img1" />
                <Section title={sec2.t} paragraph={sec2.p} imgClass="img2" />
                <Section title={sec3.t} paragraph={sec3.p} imgClass="img3" />
                <Section title={sec4.t} paragraph={sec4.p} imgClass="img4" />
            </div>
}