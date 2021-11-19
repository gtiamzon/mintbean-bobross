import React, { useState } from 'react';
import './main.css';
import Bobby from "../../assets/Bobross.png"
import Robot from '../../assets/robot-line';
import ColorPalette from '../ColorPalette/colorpalette';

const Main = () => {
    const [fillColors, setFillColors] = useState(Array(9).fill('white'));
    const [currentColor, setCurrentColor] = useState('chartreuse');

    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0)
        newFillColors[i] = currentColor
        setFillColors(newFillColors)
    }

    return (
        <div className="main" id="mainCanvas">
            <div id="canvasArea">
                <Robot fillColors={fillColors} onFill={onFillColor} />
            </div>
            <ColorPalette id="palette" currentColor={currentColor} changeColor={setCurrentColor} />
            <img className="cornerBob" src={Bobby} alt="sdf" />
        </div>
    )
}

export default Main;