import React, { useState } from "react";
import "./main.css";
import Bobby from "../../assets/Bobross.png";
import Robot from "../../assets/robot-line";
import ColorPalette from "../ColorPalette/colorpalette";

const Main = () => {
    const [fillColors, setFillColors] = useState(Array(9).fill("white"));
    const [currentColor, setCurrentColor] = useState("white");

    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0);
        newFillColors[i] = currentColor;
        setFillColors(newFillColors);
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
                    <ColorPalette
                        id="palette"
                        currentColor={currentColor}
                        changeColor={setCurrentColor}
                    />
                    <img className="cornerBob" src={Bobby} alt="bobross" />
                </div>
            </div>
        </div>
    );
};

export default Main;
