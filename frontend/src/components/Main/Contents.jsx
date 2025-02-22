import React from "react";
import { Link } from "react-router";
import './Contents.css';

export default function(props) {
    const alt = props.color? props.color : '';
    return <div className="contents" style={{padding: props.padding ? '0px' : ''}}>
            <div className="title-2">{props.title}</div>
            <div className={"contents-pages "+props.extra}> 
                {props.children}       
            </div>
            <div>
                <Link to={props.link}>
                    <button className={"btn-normal p-bg-color-2 base-color-9 "+ alt}>
                        {props.button}
                    </button>
                </Link>
            </div>
            </div>
}