import React, { useState } from "react";
import "./main.css";
import ColorPalette from "../ColorPalette/colorpalette";
import Bobby from "../../assets/Bobross.png";
import Selector from "../Selector/selector";
import { Popup } from "semantic-ui-react";

const Main = () => {

    // this creates the default fill colors of the svg paths
    const [fillColors, setFillColors] = useState(
        Array(999).fill("white")
    );

    // this is sets the default color for the color picker palette
    const [currentColor, setCurrentColor] = useState("white");

    // this will grab the color we pick from the color palette and set it as our new color when filling in the svg paths
    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0);
        newFillColors[i] = currentColor;
        setFillColors(newFillColors);
    };

    // a reset button that will convert all paths back to white
    const resetCanvas = () => {
        setFillColors(Array(999).fill("white"));
    };

    const handleColorChange = (e) => {
        setCurrentColor(e.target.value);
    }

    return (
        <div className="main" id="mainCanvas">
            <div className="ui three column grid">
                <div className="eleven wide column">
                    <div id="canvasArea">
                        <Selector fillColors={fillColors} onFillColor={onFillColor} id="selector" />
                    </div>
                </div>
                <div className="five wide column" id="colorpalette-column">
                    <div id="wholePalette">
                        <div className="ui huge header" id="colorpalette-title">
                            COLOR PICKER
                        </div>
                        <ColorPalette
                            id="palette"
                            currentColor={currentColor}
                            setCurrentColor={setCurrentColor}
                            handleColorChange={handleColorChange}
                        />
                        <div className="colorpalette-footer">
                            <Popup
                                trigger={<button onClick={resetCanvas} id="resetbtn">
                                    <i aria-hidden="true" className="undo large icon"></i>
                                </button>}
                                content='Reset the canvas!'
                                position='left center'
                                id="resetbtn-popup"
                            />
                        </div>
                    </div>
                    <Popup
                        trigger={<img className="cornerBob" src={Bobby} alt="bobross" />}
                        content='Hello my name is corner Bob!'
                        position='top center'
                        id="popup-bob"
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
