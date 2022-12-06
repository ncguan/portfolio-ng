import React from 'react';
import particle from '../../images/particle-solutions.jpeg';
import bills from '../../images/bills.jpeg';
import blog from '../../images/tech-blog.jpeg';
import weather from '../../images/weather-dashboard.jpeg';
import note from '../../images/note-taker.jpeg';
import scheduler from '../../images/work-day-scheduler.jpeg';
import github from '../../images/github-logo.png';

export default function Portfolio() {
    return (
        <div className="text-center mt-3">
            <h2>Portfolio</h2>
            <div className="container">
                <div className="row m-2">
                    <div className="col-md project">
                        <img src={particle} alt="Particle Solutions" className="img-thumbnail"></img>
                        <div className="project-links">
                            <a className="project-link m-1" href="https://duffylaura.github.io/Particle-Problems/">Particle Solutions</a>
                            <a className="project-link m-1" href="https://github.com/duffylaura/Particle-Problems"><img src={github} alt="GitHub"></img></a>
                        </div>
                    </div>
                    <div className="col-md project">
                        <img src={bills} alt="Bill$" className="img-thumbnail ratio ratio-4x3"></img>
                        <div className="project-links">
                            <a className="project-link m-1" href="https://bills-manager2022.herokuapp.com/">Bill$</a>
                            <a className="project-link m-1" href="https://github.com/danialmirza99/bills-budget-app"><img src={github} alt="GitHub"></img></a>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md project">
                        <img src={blog} alt="Tech Blog" className="img-thumbnail"></img>
                        <div className="project-links">
                            <a className="project-link m-1" href="https://ng-tech-blog.herokuapp.com/">Tech Blog</a>
                            <a className="project-link m-1" href="https://github.com/ncguan/tech-blog"><img src={github} alt="GitHub"></img></a>
                        </div>
                    </div>
                    <div className="col-md project">
                        <img src={weather} alt="Weather Dashboard" className="img-thumbnail"></img>
                        <div className="project-links">
                            <a className="project-link m-1" href="https://ncguan.github.io/weather-dashboard/">Weather Dashboard</a>
                            <a className="project-link m-1" href="https://github.com/ncguan/weather-dashboard"><img src={github} alt="GitHub"></img></a>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md project">
                        <img src={note} alt="Note Taker" className="img-thumbnail"></img>
                        <div className="project-links">
                            <a className="project-link m-1" href="https://nc-note-taker.herokuapp.com/">Note Taker</a>
                            <a className="project-link m-1" href="https://github.com/ncguan/note-taker"><img src={github} alt="GitHub"></img></a>
                        </div>
                    </div>
                    <div className="col-md project">
                        <img src={scheduler} alt="Work Day Scheduler" className="img-thumbnail"></img>
                        <div className="project-links">
                            <a className="project-link m-1" href="https://ncguan.github.io/work-day-scheduler/">Work Day Scheduler</a>
                            <a className="project-link m-1" href="https://github.com/ncguan/work-day-scheduler"><img src={github} alt="GitHub"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}