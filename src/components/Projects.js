import React from 'react';
import github from '../assets/github.svg';

function Projects() {
  return (
    <div id="projects" className="projects">

      <p className="hidden-title">PROJECTS</p>

      <div className="section">
          <div className="d-flex align-items-center">
            <p className="title">Portfolio</p>
            <div className="icon-small-container">
              <a href="https://github.com/smnraphael/portfolio" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={github} alt="github" /></a>
            </div>
          </div>
          <div className="skills">
            <button className="btn disabled">HTML</button>
            <button className="btn disabled">CSS</button>
            <button className="btn disabled">Bootstrap</button>
            <button className="btn disabled">JavaScript</button>
            <button className="btn disabled">React</button>
          </div>
      </div>

      <div className="section">
          <div className="d-flex align-items-center">
            <p className="title">Weather App</p>
            <div className="icon-small-container">
              <a href="https://github.com/smnraphael/weather-app" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={github} alt="github" /></a>
            </div>
          </div>
          <div className="skills">
            <button className="btn disabled">HTML</button>
            <button className="btn disabled">CSS</button>
            <button className="btn disabled">JavaScript</button>
            <button className="btn disabled">React</button>
          </div>
      </div>

      <div className="section">
          <div className="d-flex align-items-center">
            <p className="title">Tic-Tac-Toe</p>
            <div className="icon-small-container">
              <a href="https://github.com/smnraphael/tic-tac-toe" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={github} alt="github" /></a>
            </div>
          </div>
          <div className="skills">
            <button className="btn disabled disabled">Python</button>
          </div>
      </div>

      <div className="section">
          <div className="d-flex align-items-center">
            <p className="title">Raphaël in Japan</p>
            <div className="icon-small-container">
              <a href="https://github.com/smnraphael/raphael-in-japan" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={github} alt="github" /></a>
            </div>
          </div>
          <div className="skills">
            <button className="btn disabled">HTML</button>
            <button className="btn disabled">CSS</button>
            <button className="btn disabled">Bootstrap</button>
            <button className="btn disabled">JavaScript</button>
            <button className="btn disabled">Python</button>
            <button className="btn disabled">Flask</button>
            <button className="btn disabled">SQLite</button>
          </div>
      </div>

      <div className="section">
          <div className="d-flex">
            <p className="title">CS50x: Introduction to Computer Science</p>
          </div>
          <div className="skills">
            <button className="btn disabled">C</button>
            <button className="btn disabled">Python</button>
            <button className="btn disabled">Flask</button>
            <button className="btn disabled">SQL</button>
            <button className="btn disabled">JavaScript</button>
            <button className="btn disabled">HTML</button>
            <button className="btn disabled">CSS</button>
          </div>
      </div>

    </div>
  );
}

export default Projects;
