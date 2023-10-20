import React from 'react';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import email from '../assets/email.svg';
import resume from '../assets/resume.svg';
import resumepdf from '../assets/resumepdf.pdf';

function Contact() {
    return (
        <div id="contact" className="contact">
            <p className="hidden-title">CONTACT</p>
            <div className="section">
                <div className="icon-container-hidden">
                    <div className="icons-hidden">
                        <a href="https://www.linkedin.com/in/simonraphael" target="_blank" rel="noopener noreferrer"><img className="icon-hidden" src={linkedin} alt="linkedin" /></a>
                    </div>
                    <div className="icons-hidden">
                        <a href="https://github.com/smnraphael" target="_blank" rel="noopener noreferrer"><img className="icon-hidden" src={github} alt="github" /></a>
                    </div>
                    <div className="icons-hidden">
                        <a href="mailto:simonraphael@hotmail.fr" target="_blank" rel="noopener noreferrer"><img className="icon-hidden" src={email} alt="email" /></a>
                    </div>
                    <div className="icons-hidden">
                        <a href={resumepdf} target='_blank' rel="noopener noreferrer"><img className="icon-hidden" src={resume} alt="resume" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
