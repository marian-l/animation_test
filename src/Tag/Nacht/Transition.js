import React from "react";
import { useState } from "react";
import './day-n-nite.css';

export default function Transition() {
    let [mode, setMode] = useState("false");
    function handleClick() {
        setMode(mode == 'light' ? 'dark' : 'light')
    }

    return (
        <div className={'app ' + mode}>
            <h1>This is a Day/Night Toggle Website</h1>
            <div className="btn-box">
                <button onClick={handleClick}>Toggle</button>
            </div>
        </div>
    );
}