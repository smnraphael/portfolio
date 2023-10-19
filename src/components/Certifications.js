import React from 'react';
import prompt from '../assets/prompt.pdf';
import harvard from '../assets/harvard.pdf';
import google from '../assets/google.pdf';

function Certifications() {
  return (
    <div id="certifications" className="certifications">

      <p className="hidden-title">CERTIFICATIONS</p>

      <div className="section">
        <p className="diploma">
            Full-Stack Engineer Career Path • Codecademy
        </p>
        <p className="date">
            In Progress
        </p>
      </div>

      <div className="section">
        <p className="diploma">
          <a id="shadow" className="external-link" href={prompt} target="_blank" rel="noopener noreferrer">Prompt Engineering for ChatGPT</a> • Vanderbilt University
        </p>
        <p className="date">
            October 2023
        </p>
      </div>

      <div className="section">
        <p className="diploma">
          <a id="shadow" className="external-link" href={harvard} target="_blank" rel="noopener noreferrer">CS50x: Introduction to Computer Science</a> • Harvard University
        </p>
        <p className="date">
            August 2023
        </p>
      </div>

      <div className="section">
        <p className="diploma">
          <a id="shadow" className="external-link" href={google} target="_blank" rel="noopener noreferrer">Google Data Analytics Professional Certificate</a> • Google
        </p>
        <p className="date">
            December 2021
        </p>
      </div>
        
    </div>
  );
}

export default Certifications;
