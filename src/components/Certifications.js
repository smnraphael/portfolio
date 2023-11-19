import React from 'react';
import frontend from '../assets/frontend.pdf';
import prompt from '../assets/prompt.pdf';
import harvard from '../assets/harvard.pdf';
import google from '../assets/google.pdf';
import chain from '../assets/chain.png';

function Certifications() {
  return (
    <div id="certifications" className="certifications">

      <p className="hidden-title">CERTIFICATIONS</p>

      <div className="section section-button">
        <p className="diploma">
          Full-Stack Engineer Career Path • Codecademy
        </p>
        <p className="date">
          In Progress
        </p>
        <div className="skills">
            <button className="btn disabled">HTML</button>
            <button className="btn disabled">CSS</button>
            <button className="btn disabled">JavaScript</button>
            <button className="btn disabled">Bootstrap</button>
            <button className="btn disabled">React</button>
            <button className="btn disabled">Redux</button>
            <button className="btn disabled">Node.js</button>
            <button className="btn disabled">Express.js</button>
            <button className="btn disabled">PostrgreSQL</button>
            <button className="btn disabled">Git</button>
            <button className="btn disabled">GitHub</button>
          </div>
      </div>

      <a className="external-link" href={frontend} target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="diploma">
              Front-End Engineer Career Path • Codecademy
            </p>
              <div className="icon-small-container">
                <img className="icon-small" src={chain} alt="github" />
              </div>
          </div>
            <p className="date">
              November 2023
            </p>
            <div className="skills">
              <button className="btn disabled">HTML</button>
              <button className="btn disabled">CSS</button>
              <button className="btn disabled">JavaScript</button>
              <button className="btn disabled">Bootstrap</button>
              <button className="btn disabled">React</button>
              <button className="btn disabled">Redux</button>
              <button className="btn disabled">Git</button>
              <button className="btn disabled">GitHub</button>
            </div>
        </div>
      </a>

      <a className="external-link" href={prompt} target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="diploma">
              Prompt Engineering for ChatGPT • Vanderbilt University
            </p>
              <div className="icon-small-container">
                <img className="icon-small" src={chain} alt="github" />
              </div>
          </div>
            <p className="date">
              October 2023
            </p>
            <div className="skills">
              <button className="btn disabled">Prompt Engineering</button>
              <button className="btn disabled">ChatGPT</button>
              <button className="btn disabled">LLM</button>
            </div>
        </div>
      </a>

      <a className="external-link" href={harvard} target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="diploma">
              CS50: Introduction to Computer Science • Harvard University
            </p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
          <p className="date">
            August 2023
          </p>
          <div className="skills">
              <button className="btn disabled">C</button>
              <button className="btn disabled">Python</button>
              <button className="btn disabled">Flask</button>
              <button className="btn disabled">SQL</button>
              <button className="btn disabled">JavaScript</button>
              <button className="btn disabled">HTLM</button>
              <button className="btn disabled">CSS</button>
              <button className="btn disabled">Bootstrap</button>
          </div>
        </div>
      </a>

      <a className="external-link" href={google} target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="diploma">
              Google Data Analytics Professional Certificate • Google
            </p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
          <p className="date">
            December 2021
          </p>
          <div className="skills">
              <button className="btn disabled">Excel</button>
              <button className="btn disabled">SQL</button>
              <button className="btn disabled">Tableau</button>
              <button className="btn disabled">R</button>
              <button className="btn disabled">Data Cleaning</button>
              <button className="btn disabled">Data Analysis</button>
              <button className="btn disabled">Data Visualization</button>
          </div>
        </div>
      </a>
        
    </div>
  );
}

export default Certifications;
