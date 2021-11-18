import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <div
            className="ui tabular menu"
            style={{ backgroundColor: "hsla(74, 32%, 76%, 1)" }}
        >
            <div className="header item">
                <h2 className="ui header" id="navbar-header">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLSRSl8xsTNuQU_f6sg3bHI19gZYUSqLu2I78S90MQ=s900-c-k-c0x00ffffff-no-rj" className="ui huge circular image"/>
                    The Bob Ross
                </h2>
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
