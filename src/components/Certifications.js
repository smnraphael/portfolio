import React from 'react';
import prompt from '../assets/prompt.pdf';
import harvard from '../assets/harvard.pdf';
import google from '../assets/google.pdf';
import chain from '../assets/chain.png';

function Certifications() {
  return (
    <div id="certifications" className="certifications">

      <p className="hidden-title">CERTIFICATIONS</p>

      <div className="section section-five">
        <p className="diploma">
          Full-Stack Engineer Career Path • Codecademy
        </p>
        <p className="date">
          In Progress
        </p>
      </div>

      <a className="external-link" href={prompt} target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-five">
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
        </div>
      </a>

      <a className="external-link" href={harvard} target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-five">
          <div className="d-flex justify-content-between">
            <p className="diploma">
              CS50x: Introduction to Computer Science • Harvard University
            </p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
          <p className="date">
            August 2023
          </p>
        </div>
      </a>

      <a className="external-link" href={google} target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-five">
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
        </div>
      </a>
        
    </div>
  );
}

export default Certifications;
