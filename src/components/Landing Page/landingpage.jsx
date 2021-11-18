import React from "react";
import "./landingpage.css";
import image1 from '../../assets/Bobross.png'

const LandingPage = () => {
    return (
        <div>
            <h1>LANDING PAGE</h1>

            <div class="ui card">
                <div class="image">
                    <img src={ image1 } alt="bobross"/>
                </div>
                <div class="content">
                    <div class="header">Jon Ver</div>
                    <div class="meta">
                        <span class="date">Joined in 2015</span>
                    </div>
                    <div class="description">
                        Matthew is a musician living in Nashville.
                    </div>
                </div>
                <div class="extra content">
                    <a>
                        <i aria-hidden="true" class="user icon"></i>22 Friends
                    </a>
                </div>
            </div>

            <div class="ui card">
                <div class="image">
                    <img src={ image1 } alt="bobross"/>
                </div>
                <div class="content">
                    <div class="header">Gerald</div>
                    <div class="meta">
                        <span class="date">Joined in 2015</span>
                    </div>
                    <div class="description">
                        Matthew is a musician living in Nashville.
                    </div>
                </div>
                <div class="extra content">
                    <a>
                        <i aria-hidden="true" class="user icon"></i>22 Friends
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
