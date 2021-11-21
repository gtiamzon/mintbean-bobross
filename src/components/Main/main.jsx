import React, { useState } from "react";
import "./main.css";
import Bobby from "../../assets/Bobross.png";
import Robot from "../../assets/robot-line";
import ColorPalette from "../ColorPalette/colorpalette";

const Main = () => {
    const initialState = {
        fill: "white"
    };

    const [fillColors, setFillColors] = useState(Array(100).fill(initialState.fill));
    const [currentColor, setCurrentColor] = useState("white");


    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0);
        newFillColors[i] = currentColor;
        setFillColors(newFillColors);
    };

    const resetCanvas = () => {
        setFillColors(Array(100).fill(initialState.fill));
    }; 

    return (
        <div className="main" id="mainCanvas">
            <div class="ui three column grid">
                <div class="eleven wide column">
                    <div id="canvasArea">
                        <Robot fillColors={fillColors} onFill={onFillColor} />
                    </div>
                </div>
                <div class="five wide column" id="colorpalette-column">
                    <div className="ui huge header" id="colorpalette-title">
                        COLOR PICKER
                    </div>
                    <ColorPalette
                        id="palette"
                        currentColor={currentColor}
                        changeColor={setCurrentColor}
                    />
                    <div className="colorpalette-footer">
                        <button onClick={resetCanvas} id="resetbtn">
                            <i aria-hidden="true" class="undo large icon"></i>
                        </button>
                    </div>
                    <img className="cornerBob" src={Bobby} alt="bobross" />
                </div>
            </div>
        </div>
    );
};

export default Main;
