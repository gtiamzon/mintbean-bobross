import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Shorty, Flower, Hippo, Robot, Snake } from "../../assets/svg/svgIndex";
import './selector.css';

const Selector = ({ fillColors, onFillColor }) => {

    // this creates the default svg that is pushed onto the page
    const [selectedOption, setSelectedOption] = useState(
        <Robot fillColors={fillColors} onFillColor={onFillColor} />
    );

    // this will check if "selectedOption" state changes
    useEffect(() => {
        console.log("Your option has changed.");
    }, [selectedOption]);

    const svgOptions = [
        {
            key: "Robot",
            value: <Robot fillColors={fillColors} onFillColor={onFillColor} />,
            label: "Robot",
        },
        {
            key: "Flower",
            value: <Flower fillColors={fillColors} onFillColor={onFillColor} />,
            label: "Flower",
        },
        {
            key: "Hippo",
            value: <Hippo fillColors={fillColors} onFillColor={onFillColor} />,
            label: "Hippo",
        },
        {
            key: "Snake",
            value: <Snake fillColors={fillColors} onFillColor={onFillColor} />,
            label: "Snake",
        },
        {
            key: "Shorty",
            value: <Shorty fillColors={fillColors} onFillColor={onFillColor} />,
            label: "Beach Short",
        },
    ];

    const handleSelectChange = (e) => {
        setSelectedOption(e.value);
    };

    const isSvgChosen = selectedOption;

    const renderSvg = () => {
        switch (isSvgChosen.type.name) {
            case "Robot":
                return <Robot fillColors={fillColors} onFillColor={onFillColor} />
            case "Flower":
                return <Flower fillColors={fillColors} onFillColor={onFillColor} />
            case "Hippo":
                return <Hippo fillColors={fillColors} onFillColor={onFillColor} />
            case "Shorty":
                return <Shorty fillColors={fillColors} onFillColor={onFillColor} />
            case "Snake":
                return <Snake fillColors={fillColors} onFillColor={onFillColor} />
            default:
                return <Robot fillColors={fillColors} onFillColor={onFillColor} />
        }
    }

    return (
        <>
            <Select options={svgOptions} onChange={handleSelectChange} id="selector" />
            <div className="svg-image">
                {renderSvg()}
            </div>
        </>
    );
};

export default Selector;
