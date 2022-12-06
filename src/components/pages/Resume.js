import React from 'react';
import resume from '../../utils/nichole-resume-in-progress.pdf';

export default function Resume() {
    return (
        <div className="container">
            <div className="row text-center">
                <p>Download my <a href={resume} download>Resume</a></p>
            </div>
            <div className="row text-center d-flex justify-content-center">
                <div className="col">
                    <p>Front-End Proficiencies</p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>AJAX</li>
                        <li>Fetch</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="col">
                    <p>Back-End Proficiencies</p>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}