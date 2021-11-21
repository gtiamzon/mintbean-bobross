import React, { useState } from "react";
import "./main.css";
import ColorPalette from "../ColorPalette/colorpalette";
import Bobby from "../../assets/Bobross.png";
import { Shorty, Flower, Hippo, Robot, Snake } from "../../assets/svg/svgIndex";
import Select from 'react-select';

const Main = () => {
    const initialState = {
        fill: "white",
    };

    const [fillColors, setFillColors] = useState(
        Array(999).fill(initialState.fill)
    );
    const [currentColor, setCurrentColor] = useState("white");

    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0);
        newFillColors[i] = currentColor;
        setFillColors(newFillColors);
    };

    const [selectedOption, setSelectedOption] = useState("");

    const resetCanvas = () => {
        setFillColors(Array(999).fill(initialState.fill));
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.value);
    }

    const svgOptions = [
        { 
            key: "Robot", value: <Robot fillColors={fillColors} onFill={onFillColor} />, label: "Robot" 
        },
        { 
            key: "Flower", value: <Flower fillColors={fillColors} onFill={onFillColor} />, label: "Flower"
        },
        { 
            key: "Hippo", value: <Hippo fillColors={fillColors} onFill={onFillColor} />, label: "Hippo" 
        },
        { 
            key: "Snake", value: <Snake fillColors={fillColors} onFill={onFillColor} />, label: "Snake" 
        },
        { 
            key: "Shorty", value: <Shorty fillColors={fillColors} onFill={onFillColor} />, label: "Beach Short" 
        },
    ];


    return (
        <div className="main" id="mainCanvas">
            <div class="ui three column grid">
                <div class="eleven wide column">
                        <Select options={svgOptions} onChange={handleSelectChange} />
                    <div id="canvasArea">
                        {selectedOption}
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
