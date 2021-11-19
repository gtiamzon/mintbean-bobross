import React from "react";

export default function ColorPalette(props) {
  const colors = ['white', 'black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

  return(
    <div className="color-palette">
    {colors.map(color => { 
        const activeClass = props.currentColor === color ? "color-swatch-active" : "";
        return (
            <div onClick={() => {props.changeColor(color)}}>
                <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
            </div>
        )
    })}
</div>
  )
}