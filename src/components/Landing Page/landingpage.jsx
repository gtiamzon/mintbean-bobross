import React from "react";
import "./landingpage.css";
// import image1 from '../../assets/Bobross.png'
import { Icon } from "semantic-ui-react";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="ui padded three column grid">
                <div className="nine wide column">
                    <div className="ui text container" id="app-context">
                        <h2 className="ui header">
                            Mint Bean Hackathon 2021 - The Bob Ross
                        </h2>
                        <p id="intro">
                            The Mintbean Hackathon prompt is to create an app that will fulfill the goal of letting the user click on areas of a pre-existing drawing and fill it with color. With this challenge, we sought out to create website built in React that would let the user choose an image they would like and color in that image based on the color palette provided to them.
                        </p>
                        <p id="introdos">
                            The images provided are SVG's and the logic behind the coloring is that on-click of a certain within the SVG, it would auto-fill given the selected color from the color palette. The image selector dropdown utilizes a switch case to display the desired SVG on the screen. The color selector uses a .map function to show the Array of colors we provided and an active class to let the user color in the image with the current active color.  Semantic UI was used as a framework. React was what used to to build the application.

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
                            <div className="header" id="card-title">Jon Ver</div>
                            <div className="meta">
                                <span className="date">Software Developer</span>
                            </div>
                            <div className="description" id="card-description">
                                " Hello my name is Jon Ver and I am a 2021 Software Developer
                                graduate from General Assembly! Through my experience in GA I
                                have gained a strong passion to learning and evovling all
                                aspects of a well-rounded Software Developer. When I'm not
                                coding you'll find me somewhere around the world. I love
                                traveling and visiting national parks and so far I have
                                visited all the major parks in the western United States. I
                                also have a long list of hobbies that include photography,
                                videography, and the occasional video game sessions. "
                            </div>
                        </div>
                        <div className="extra content" id="card-footer">
                            <a
                                href="https://jvdelacruz.com/"
                                to="/path"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="address card" size="big" className="card-icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jonvercabraldelacruz/"
                                to="/path"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="linkedin icon" size="big" className="card-icon" />
                            </a>
                            <a
                                href="https://github.com/nicknamejv"
                                to="/path"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="github" size="big" className="card-icon" />
                            </a>
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
                            <div className="header" id="card-title">Gerald</div>
                            <div className="meta">
                                <span className="date">Software Developer</span>
                            </div>
                            <div className="description" id="card-description">
                                " Former employee in the retail sector now a Full-Stack Software Engineer with skills in JavaScript, Python and React. I thrive in environments where I’m constantly learning and I work hard to improve myself wherever I am. With multiple years of communicating with both co-workers and customers I have a strong foundation in communication and collaboration.

                                When I'm not writing code, you can find me doing something with my car. From performing maintenance to driving on race tracks, you can count me in. Other things I enjoy are food, traveling and playing video games. "
                            </div>
                        </div>
                        <div className="extra content" id="card-footer">
                            <a
                                href="https://geraldtiamzon.com/"
                                to="/path"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="address card" size="big" className="card-icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/gerald-tiamzon/"
                                to="/path"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="linkedin icon" size="big" className="card-icon" />
                            </a>
                            <a
                                href="https://github.com/gtiamzon"
                                to="/path"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="github" size="big" className="card-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
