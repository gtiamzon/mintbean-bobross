import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { Shorty, Flower, Hippo, Robot, Snake, Mandala } from "../../assets/svg/svgIndex";
import './selector.css';

const Selector = ({ fillColors, onFillColor }) => {

    // this creates the default svg that is pushed onto the page
    const [selectedOption, setSelectedOption] = useState(
        <Mandala fillColors={fillColors} onFillColor={onFillColor} />
    );

    const isSvgChosen = useRef(<Mandala fillColors={fillColors} onFillColor={onFillColor} />);

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
        }
    ];

    const handleSelectChange = (e) => {
        setSelectedOption(e.key);
        isSvgChosen.current = e.key;
    };

    const renderSvg = () => {
        switch (isSvgChosen.current) {
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
            case "Mandala":
                return <Mandala fillColors={fillColors} onFillColor={onFillColor} />
            default:
                return <Mandala fillColors={fillColors} onFillColor={onFillColor} />
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
