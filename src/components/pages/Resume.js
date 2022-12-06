import React from 'react';
import resume from '../../utils/nichole-resume-in-progress.pdf';
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiReact, SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiGraphql } from 'react-icons/si'

export default function Resume() {
    return (
        <div className="container">
            <div className="row text-center d-flex justify-content-center mt-3">
                <div className="col">
                    <h3>Front-End Proficiencies</h3>
                    <ul className="proficienciesList">
                        <li>HTML5 <SiHtml5 /></li>
                        <li>CSS <SiCss3 /></li>
                        <li>JavaScript <SiJavascript /></li>
                        <li>Bootstrap <SiBootstrap /></li>
                        <li>jQuery <SiJquery /></li>
                        <li>AJAX</li>
                        <li>Fetch</li>
                        <li>React <SiReact /></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Back-End Proficiencies</h3>
                    <ul className="proficienciesList">
                        <li>APIs</li>
                        <li>Node <SiNodedotjs /></li>
                        <li>Express <SiExpress /></li>
                        <li>MySQL <SiMysql /></li>
                        <li>MongoDB <SiMongodb /></li>
                        <li>REST</li>
                        <li>GraphQL <SiGraphql /></li>
                    </ul>
                </div>
            </div>
            <div className="row text-center">
                <p>Download my <a href={resume} download>Resume</a></p>
            </div>
        </div>
    );
}