import React from 'react';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import email from '../assets/email.svg';
import resume from '../assets/CV_RaphaelSimon.pdf';

function Left() {

    const messageArray = ["Web Developer"]
    let textPosition = 0;
    const speed = 100;

    let typewriter = () => {
        document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span>|</span>";
        if (textPosition++ !== messageArray[0].length) {
            setTimeout(typewriter, speed);
        }
    }

    window.addEventListener("load", typewriter);

    return (
        <div className="col-lg-4 col-md-12 left">
            <h1>Raphaël SIMON</h1>
            <div className="space">
                <p id="message" className="message"></p>
            </div>
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
