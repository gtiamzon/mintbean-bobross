import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <div
            className="ui tabular menu"
            style={{ backgroundColor: "hsla(74, 32%, 76%, 1)" }}
        >
            <div className="header item">
                <i aria-hidden="true" class="paint brush icon"></i>
                The Bob Ross
            </div>
            <div className="right menu">
                <a className="item" href="/">
                    Home
                </a>
                <a className="item" href="/thecanvas">
                    The Canvas
                </a>
            </div>
        </div>
    );
};

export default Navbar;
