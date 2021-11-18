import React from "react";
import "./landingpage.css";
// import image1 from '../../assets/Bobross.png'
import { Icon, Menu } from 'semantic-ui-react'

const LandingPage = () => {
    return (
        <div>
            <h1>LANDING PAGE</h1>

            <div class="ui card">
                <div class="image">
                    <img src="https://c.tenor.com/uipbyAqs5rEAAAAC/anime-anime-glasses.gif" />
                </div>
                <div class="content">
                    <div class="header">Jon Ver</div>
                    <div class="meta">
                        <span class="date">Joined in 2069</span>
                    </div>
                    <div class="description">
                        Jon Ver is a gamer living in the future.
                    </div>
                </div>
                <div class="extra content">
                    <Menu.Item href='https://jvdelacruz.com/' to='/path' target='_blank'>
                        <Icon name='address card' size='big' />
                    </Menu.Item>
                    <Menu.Item href='https://www.linkedin.com/in/jonvercabraldelacruz/' to='/path' target='_blank'>
                        <Icon name='linkedin icon' size='big' />
                    </Menu.Item>
                    <Menu.Item href='https://github.com/nicknamejv' to='/path' target='_blank'>
                        <Icon name='github' size='big' />
                    </Menu.Item>
                </div>
            </div>

            <div class="ui card">
                <div class="image">
                    <img src="https://i.imgur.com/CaLlyKE.gif" />
                </div>
                <div class="content">
                    <div class="header">Gerald</div>
                    <div class="meta">
                        <span class="date">Joined in 2420</span>
                    </div>
                    <div class="description">
                        Gerald is a friend living at home.
                    </div>
                </div>
                <div class="extra content">
                    <Menu.Item href='https://geraldtiamzon.com/' to='/path' target='_blank'>
                        <Icon name='address card' size='big' />
                    </Menu.Item>
                    <Menu.Item href='https://www.linkedin.com/in/gerald-tiamzon/' to='/path' target='_blank'>
                        <Icon name='linkedin icon' size='big' />
                    </Menu.Item>
                    <Menu.Item href='https://github.com/gtiamzon' to='/path' target='_blank'>
                        <Icon name='github' size='big' />
                    </Menu.Item>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
