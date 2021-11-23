import React from "react";
import "../ColorPalette/colorpalette.css";

export default function ColorPalette({ currentColor, handleColorChange }) {
  const colors = [
    "white",
    "#f6bdc0",
    "#FFaf42",
    "#fff9c4",
    "#68bb59",
    "#03a9f4",
    "#6600ff",
    "#bf00ff",
    "#dddddd",
    "#F6BDC0",
    "#FF8303",
    "#fff59d",
    "#76ba1b",
    "#0287c3",
    "#5200cc",
    "#9900cc",
    "#bcbcbc",
    "#F1959b",
    "#Fe6e00",
    "#fff176",
    "#4c9a2a",
    "#026592",
    "#3d0099",
    "#730099",
    "#383838",
    "#DC1c13",
    "#fd5602",
    "#ffee58",
    "green",
    "#014462",
    "#290066",
    "#4c0066",
    "black",
    "red",
    "orange",
    "#ffeb3b",
    "#1e5631",
    "#012231",
    "#140033",
    "#260033"
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
