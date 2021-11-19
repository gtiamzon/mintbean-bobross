import React from "react";
import "../ColorPalette/colorpalette.css";

export default function ColorPalette(props) {
  const colors = [
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
    "#95A5A6",
    "#7F8C8D",
    "#34495E",
    "#2C3E50",
    "#000000"

  ];

  return (
    <div className="color-palette">
      {colors.map((color) => {
        const activeClass =
          props.currentColor === color ? `color-picker-active` : "";
        return (
          <div
            onClick={() => {
              props.changeColor(color);
            }}
          >
            <div
              className={`color-picker ${activeClass}`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
