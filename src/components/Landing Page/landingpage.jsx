import React from "react";
import "./landingpage.css";
// import image1 from '../../assets/Bobross.png'
import { Icon, Menu } from "semantic-ui-react";

const LandingPage = () => {
    return (
        <div>
            <h1>LANDING PAGE</h1>

            <div>
                <div className="ui padded three column grid">
                    <div className="wnine wide column">
                        <div className="ui text container" id="app-context">
                            <h2 className="ui header">Mint Bean Hackathon 2021 - The Bob Ross</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa strong. Cum sociis
                                natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                                justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                dictum felis eu pede link mollis pretium. Integer tincidunt.
                                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                                ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa strong. Cum sociis
                                natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                                justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                dictum felis eu pede link mollis pretium. Integer tincidunt.
                                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                                metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                                ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>
                        </div>
                    </div>
                    <div className="three wide column">
                        <div className="ui card">
                            <div className="image">
                                <img
                                    src="https://i.imgur.com/WZQJeha.jpg"
                                    alt="jon-img"
                                    id="dev-card"
                                />
                            </div>
                            <div className="content">
                                <div className="header">Jon Ver</div>
                                <div className="meta">
                                    <span className="date">Joined in 2069</span>
                                </div>
                                <div className="description">
                                    Jon Ver is a gamer living in the future.
                                </div>
                            </div>
                            <div className="extra content" id="card-icons">
                                <Menu.Item
                                    href="https://jvdelacruz.com/"
                                    to="/path"
                                    target="_blank"
                                >
                                    <Icon name="address card" size="big" />
                                </Menu.Item>
                                <Menu.Item
                                    href="https://www.linkedin.com/in/jonvercabraldelacruz/"
                                    to="/path"
                                    target="_blank"
                                >
                                    <Icon name="linkedin icon" size="big" />
                                </Menu.Item>
                                <Menu.Item
                                    href="https://github.com/nicknamejv"
                                    to="/path"
                                    target="_blank"
                                >
                                    <Icon name="github" size="big" />
                                </Menu.Item>
                            </div>
                        </div>
                    </div>
                    <div className="three wide column">
                        <div className="ui card">
                            <div className="image">
                                <img
                                    src="https://i.imgur.com/Ltpc3Iv.jpg"
                                    alt="gerald-img"
                                    id="dev-card"
                                />
                            </div>
                            <div className="content">
                                <div className="header">Gerald</div>
                                <div className="meta">
                                    <span className="date">Joined in 2420</span>
                                </div>
                                <div className="description">
                                    Gerald is a friend living at home.
                                </div>
                            </div>
                            <div className="extra content" id="card-icons">
                                <Menu.Item
                                    href="https://geraldtiamzon.com/"
                                    to="/path"
                                    target="_blank"
                                >
                                    <Icon name="address card" size="big" />
                                </Menu.Item>
                                <Menu.Item
                                    href="https://www.linkedin.com/in/gerald-tiamzon/"
                                    to="/path"
                                    target="_blank"
                                >
                                    <Icon name="linkedin icon" size="big" />
                                </Menu.Item>
                                <Menu.Item
                                    href="https://github.com/gtiamzon"
                                    to="/path"
                                    target="_blank"
                                >
                                    <Icon name="github" size="big" />
                                </Menu.Item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
