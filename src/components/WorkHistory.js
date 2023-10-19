import React from 'react';

function WorkHistory() {
  return (
    <div id="work-history" className="work-history">

      <p className="hidden-title">WORK HISTORY</p>

        <div className="section">
          <p className="title">
            Web Developer • <a id="shadow" className="external-link" href="https://kenja.com" target="_blank" rel="noopener noreferrer">Kenja K.K.</a>
          </p>
          <p className="date">
            August 2023 - Present
          </p>
          <div className="text">
            <p>
                - Participating in the development of microservices for Kenja Rooms
            </p>
            <p>
                - Identifying, analyzing, and resolving bugs and issues, ensuring optimal performance and user experience
            </p>
          </div>
          <button className="btn disabled">HTML</button>
          <button className="btn disabled">CSS</button>
          <button className="btn disabled">JavaScript</button>
          <button className="btn disabled">React</button>
          <button className="btn disabled">PHP</button>
        </div>

        <div className="section">
          <p className="title">
            IT Business Analyst | QA Tester • <a id="shadow" className="external-link" href="https://kenja.com" target="_blank" rel="noopener noreferrer">Kenja K.K.</a>
          </p>
          <p className="date">
            September 2022 - August 2023
          </p>
          <div className="text">
            <p>
              - Collecting business requirements from stakeholders and translating them into technical specifications
            </p>
            <p>
              - Creating detailed documentation including business requirements, functional specifications, process flows, and Figma mockups to serve as a reference for both development team and stakeholders
            </p>
            <p>
              - Collaborating with development team to design IT solutions that address business needs
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
          <button className="btn disabled">Figma Mockups</button>
          <button className="btn disabled">QA Testing</button>
          <button className="btn disabled">Test Automation</button>
          <button className="btn disabled">Playwright</button>
        </div>

        <div className="section">
          <p className="title">
            Assistant Project Manager • <a id="shadow" className="external-link" href="https://www.la-francaise.com/en/" target="_blank" rel="noopener noreferrer">Groupe La Française</a>
          </p>
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
        </div>

    </div>
    
  );
}

export default WorkHistory;
