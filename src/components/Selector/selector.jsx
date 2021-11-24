import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import "./selector.css";
import {
    Shorty,
    Flower,
    Hippo,
    Robot,
    Snake,
    Mandala,
} from "../../assets/svg/svgIndex";

const Selector = ({ fillColors, onFillColor }) => {
    // this creates the default svg that is pushed onto the page
    const [selectedOption, setSelectedOption] = useState(
        <Mandala fillColors={fillColors} onFillColor={onFillColor} />
    );

    const isSvgChosen = useRef(
        <Mandala fillColors={fillColors} onFillColor={onFillColor} />
    );

    // this will check if "selectedOption" state changes
    useEffect(() => {
        console.log("Your option has changed.");
    }, [selectedOption]);

    const svgOptions = [
        {
            key: "Robot",
            value: <Robot />,
            label: "Robot",
        },
        {
            key: "Flower",
            value: <Flower />,
            label: "Flower",
        },
        {
            key: "Hippo",
            value: <Hippo />,
            label: "Hippo",
        },
        {
            key: "Snake",
            value: <Snake />,
            label: "Snake",
        },
        {
            key: "Shorty",
            value: <Shorty />,
            label: "Beach Short",
        },
        {
            key: "Mandala",
            value: <Mandala />,
            label: "Mandala",
        },
    ];

    // handles the changes when choosing from dropdown menu
    const handleSelectChange = (e) => {
        setSelectedOption(e.key);
        isSvgChosen.current = e.key;
    };

    const svg = isSvgChosen.current.toString();

    const renderSvg = () => {
        switch (isSvgChosen.current) {
            case "Robot":
                return <Robot fillColors={fillColors} onFillColor={onFillColor} />;
            case "Flower":
                return <Flower fillColors={fillColors} onFillColor={onFillColor} />;
            case "Hippo":
                return <Hippo fillColors={fillColors} onFillColor={onFillColor} />;
            case "Shorty":
                return <Shorty fillColors={fillColors} onFillColor={onFillColor} />;
            case "Snake":
                return <Snake fillColors={fillColors} onFillColor={onFillColor} />;
            case "Mandala":
                return <Mandala fillColors={fillColors} onFillColor={onFillColor} />;
            default:
                return <Mandala fillColors={fillColors} onFillColor={onFillColor} />;
        }
    };

    // Downloads SVG
    const downLoadSVG = () => {
        const selectedSVG = document.getElementById("selected-svg").innerHTML;
        const blob = new Blob([selectedSVG.toString()]);
        const element = document.createElement("a");
        element.download = `${svg}.svg`;
        element.href = window.URL.createObjectURL(blob);
        element.click();
        element.remove();
    };

    return (
        <>
            <div id="download-selector">
                <Select
                    options={svgOptions}
                    onChange={handleSelectChange}
                    id="selector"
                />
                <button className="ui vertical animated button" id="downloadbtn" onClick={downLoadSVG}>
                    <div className="hidden content">Download!</div>
                    <div className="visible content">
                        <i aria-hidden="true" className="download icon"></i>
                    </div>
                </button>
            </div>
            <div className="svg-image" id="selected-svg">
                {renderSvg()}
            </div>
        </>
    );
};

export default Selector;
