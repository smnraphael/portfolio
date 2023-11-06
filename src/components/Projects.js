import React from 'react';
import chain from '../assets/chain.png';

function Projects() {
  return (
    <div id="projects" className="projects">

      <p className="hidden-title">PROJECTS</p>

      <a href="https://github.com/smnraphael/not-reddit" target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="title">NotReddit</p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
          <div className="skills">
            <button className="btn disabled">HTML</button>
            <button className="btn disabled">CSS</button>
            <button className="btn disabled">Bootstrap</button>
            <button className="btn disabled">JavaScript</button>
            <button className="btn disabled">React</button>
            <button className="btn disabled">Figma</button>
          </div>
        </div>
      </a>

      <a href="https://github.com/smnraphael/portfolio" target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="title">Portfolio</p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
          <div className="skills">
            <button className="btn disabled">HTML</button>
            <button className="btn disabled">CSS</button>
            <button className="btn disabled">Bootstrap</button>
            <button className="btn disabled">JavaScript</button>
            <button className="btn disabled">React</button>
            <button className="btn disabled">Figma</button>
          </div>
        </div>
      </a>

      <a href="https://github.com/smnraphael/weather-app" target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="title">Weather App</p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
          <div className="skills">
            <button className="btn disabled">HTML</button>
            <button className="btn disabled">CSS</button>
            <button className="btn disabled">JavaScript</button>
            <button className="btn disabled">React</button>
            <button className="btn disabled">Figma</button>
          </div>
        </div>
      </a>

      <a href="https://github.com/smnraphael/tic-tac-toe" target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="title">Tic-Tac-Toe</p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
          <div className="skills">
            <button className="btn disabled disabled">Python</button>
          </div>
        </div>
      </a>

      <a href="https://github.com/smnraphael/raphael-in-japan" target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="title">Raphaël in Japan</p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
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
            <button className="btn disabled">Figma</button>
          </div>
        </div>
      </a>

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
