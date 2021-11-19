import React from "react";
import "../ColorPalette/colorpalette.css";

export default function ColorPalette(props) {
  const colors = [
    ""
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
