import React from 'react';
import github from '../assets/github.svg';

function Projects() {
  return (
    <div id="projects" classNAme="projects">

      <div className="section">
          <div className="title d-flex">
            <p className="title">Portfolio</p>
            <a href="https://github.com/smnraphael" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={github} alt="github" /></a>
          </div>
          <div className="skills">
            <button className="btn btn-sm disabled">HTML</button>
            <button className="btn btn-sm disabled">CSS</button>
            <button className="btn btn-sm disabled">Boostrap</button>
            <button className="btn btn-sm disabled">JavaScript</button>
            <button className="btn btn-sm disabled">React</button>
          </div>
      </div>

      <div className="section">
          <div className="title d-flex">
            <p className="title">Weather App</p>
            <a href="https://github.com/smnraphael/weather-app" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={github} alt="github" /></a>
          </div>
          <div className="skills">
            <button className="btn btn-sm disabled">HTML</button>
            <button className="btn btn-sm disabled">CSS</button>
            <button className="btn btn-sm disabled">JavaScript</button>
            <button className="btn btn-sm disabled">React</button>
          </div>
      </div>
      
      <div className="section">
          <div className="title d-flex">
            <p className="title">Tic-Tac-Toe</p>
            <a href="https://github.com/smnraphael/tic-tac-toe" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={github} alt="github" /></a>
          </div>
          <div className="skills">
            <button className="btn btn-sm disabled">Python</button>
          </div>
      </div>

      <div className="section">
          <div className="title d-flex">
            <p className="title">Raphaël in Japan</p>
            <a href="https://github.com/smnraphael/raphael-in-japan" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={github} alt="github" /></a>
          </div>
          <div className="skills">
            <button className="btn btn-sm disabled">HTML</button>
            <button className="btn btn-sm disabled">CSS</button>
            <button className="btn btn-sm disabled">Bootstrap</button>
            <button className="btn btn-sm disabled">JavaScript</button>
            <button className="btn btn-sm disabled">Python</button>
            <button className="btn btn-sm disabled">Flask</button>
            <button className="btn btn-sm disabled">SQLite</button>
          </div>
      </div>

      <div className="section">
          <div className="title d-flex">
            <p className="title">CS50x: Introduction to Computer Science</p>
          </div>
          <div className="skills">
            <button className="btn btn-sm disabled">C</button>
            <button className="btn btn-sm disabled">Python</button>
            <button className="btn btn-sm disabled">Flask</button>
            <button className="btn btn-sm disabled">SQL</button>
            <button className="btn btn-sm disabled">JavaScript</button>
            <button className="btn btn-sm disabled">HTML</button>
            <button className="btn btn-sm disabled">CSS</button>
          </div>
      </div>


    </div>
  );
}

export default Projects;
