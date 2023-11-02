import React from 'react';
import chain from '../assets/chain.png';

function WorkHistory() {
  return (
    <div id="work-history" className="work-history">

      <p className="hidden-title">WORK HISTORY</p>

      <a className="external-link" href="https://kenja.com" target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="title">
              Junior Web Developer • Kenja K.K.
            </p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
          <p className="date">
            August 2023 - Present
          </p>
          <div className="text">
            <p>
              - Participating in the development of microservices for Kenja Rooms
            </p>
            <p>
              - Identifying, analyzing, and resolving bugs and issues, ensuring optimal user experience
            </p>
            <p>
              - Creating Figma mockups
            </p>
          </div>
          <button className="btn disabled">HTML</button>
          <button className="btn disabled">CSS</button>
          <button className="btn disabled">JavaScript</button>
          <button className="btn disabled">React</button>
          <button className="btn disabled">Figma</button>
          <button className="btn disabled">Git</button>
          <button className="btn disabled">GitHub</button>
          <button className="btn disabled">Slack</button>
        </div>
      </a>

      <a className="external-link" href="https://kenja.com" target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="title">
              IT Business Analyst & QA Tester • Kenja K.K.
            </p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
          <p className="date">
            September 2022 - August 2023
          </p>
          <div className="text">
            <p>
              - Collected business requirements from stakeholders and translating them into technical specifications
            </p>
            <p>
              - Created detailed documentation including business requirements, functional specifications, process flows, and Figma mockups to serve as a reference for both development team and stakeholders
            </p>
            <p>
              - Collaborated with development team to design IT solutions that address business needs
            </p>
            <p>
              - Built automated test scripts with Playwright to handle repetitive software testing work
            </p>
            <p>
              - Documented testing procedures for developers and future testing use
            </p>
            <p>
              - Completed in-depth testing on Web, Android and iOS mobile devices
            </p>
          </div>
          <button className="btn disabled">Business Analysis</button>
          <button className="btn disabled">Requirements Gathering</button>
          <button className="btn disabled">Technical Documentation</button>
          <button className="btn disabled">Figma</button>
          <button className="btn disabled">QA Testing</button>
          <button className="btn disabled">Test Automation</button>
          <button className="btn disabled">Playwright</button>
          <button className="btn disabled">Git</button>
          <button className="btn disabled">GitHub</button>
          <button className="btn disabled">Slack</button>
        </div>
      </a>

      <a className="external-link" href="https://www.la-francaise.com/en/" target="_blank" rel="noopener noreferrer">
        <div className="section section-active section-button">
          <div className="d-flex justify-content-between">
            <p className="title">
              Assistant Project Manager • Groupe La Française
            </p>
            <div className="icon-small-container">
              <img className="icon-small" src={chain} alt="github" />
            </div>
          </div>
            <p className="date">
              January 2020 - August 2020
            </p>
            <div className="text">
              <p>
                - Produced financial communication materials for “La Française Real Estate Managers” (quarter and annual reports of 21 real estate investment funds, around 100,000 copies)
              </p>
              <p>
                - Planning and team coordination (20+ people including fund managers, asset managers, accountants, lawyers)
              </p>
            </div>
            <button className="btn disabled">Project Management</button>
            <button className="btn disabled">Team Coordination</button>
            <button className="btn disabled">Communication</button>
            <button className="btn disabled">Time Management</button>
            <button className="btn disabled">Microsoft Teams</button>
        </div>
      </a>

    </div>
    
  );
}

export default WorkHistory;
