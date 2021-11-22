import React from "react";
import "../ColorPalette/colorpalette.css";

export default function ColorPalette({ currentColor, handleColorChange }) {
  const colors = [
    "red",
    "green",
    "yellow",
    "indigo",
    "blue",
    "purple",
    "violet",
    "pink",
    "teal",
    "#7CFC00",
    "#F08080",
    "#ADD8E6",
    "#B0C4DE",
    "#800000",
    "#48D1CC",
    "#FF1493",
    "#FFE4C4",
    "#C0392B",
    "#E74C3C",
    "#9B59B6",
    "#8E44AD",
    "#2980B9",
    "#3498DB",
    "#1ABC9C",
    "#16A085",
    "#27AE60",
    "#2ECC71",
    "#F1C40F",
    "#F39C12",
    "#E67E22",
    "#D35400",
    "#ECF0F1",
    "#BDC3C7",
    "#34495E",
    "#000000"
  ];

  return (
    <div className="color-palette">
      {colors.map((color) => {
        const activeClass =
          currentColor === color ? `color-picker-active` : "";
        return (
          <button
            onClick={handleColorChange}
            value={color}
            key={color}
            className={`color-picker ${activeClass}`}
            style={{ backgroundColor: color }}
          ></button>
        );
      })}
    </div>
  );
}
