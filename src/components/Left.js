import React from 'react';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import email from '../assets/email.svg';
import resume from '../assets/CV_RaphaelSimon.pdf';

function Left() {
    return (
        <div className="col-4 left">
            <h1>Raphaël SIMON</h1>
            <nav class="nav flex-column">
                <a class="nav-link" href="#about">ABOUT</a>
                <a class="nav-link" href="#work-history">WORK HISTORY</a>
                <a class="nav-link" href="#education">EDUCATION</a>
                <a class="nav-link" href="#certifications">CERTIFICATIONS</a>
                <a class="nav-link" href="#projects">PROJECTS</a>
                <a class="nav-link" href={resume} target="_blank" rel="noopener noreferrer">RESUME</a>
            </nav>
            <div className="icons">
                <a href="https://www.linkedin.com/in/simonraphael" target="_blank" rel="noopener noreferrer"><img className="icon" src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/smnraphael" target="_blank" rel="noopener noreferrer"><img className="icon" src={github} alt="github" /></a>
                <a href="mailto:simonraphael@hotmail.fr" target="_blank" rel="noopener noreferrer"><img className="icon" src={email} alt="email" /></a>
            </div>
        </div>
      );
}

export default Left;
