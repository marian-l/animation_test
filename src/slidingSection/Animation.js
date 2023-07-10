import React from "react";
import { useState } from "react";
import './slidingSection.css'

export default function Animation() {
    let [view, setView] = useState(false);
    function show() {
        setView(true)
    }
    function hide() {
        setView(false)
    }

    return (
        <div>
            <div className="modal" style={{top: view && '5px'}}>
                <p className="modal-header">THIS is a modal header</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. </p>
                <div className="btn-box">
                    <button onClick={hide}>Hide</button>
                </div>
            </div>
            <div className="btn-box">
                <button onClick={show}>Show</button>
            </div>
        </div> 
    )
}