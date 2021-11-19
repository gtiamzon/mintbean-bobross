import React from 'react';
import './main.css';
import Bobby from "../../assets/Bobross.png"
import Robot from '../../assets/robot-line';
import Head from '../../assets/ANrN9k01';

const Main = () => {
    return (
        <div className="main" id="mainCanvas">
            <section>
                <body>
                <h1>
                    MAIN PAGE
                </h1>
                <Robot/>
                <Head/>
                </body>
                <img className="cornerBob"src={Bobby} alt="sdf" />
            </section>
        </div>
    )
}

export default Main;