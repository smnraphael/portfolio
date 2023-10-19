import React from 'react';

function WorkHistory() {
  return (
    <div id="work-history" className="work-history">

        <div className="section">
          <p className="title">
            Web Developer • Kenja K.K.
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
          <button className="btn btn-sm disabled">HTML</button>
          <button className="btn btn-sm">CSS</button>
          <button className="btn btn-sm">JavaScript</button>
          <button className="btn btn-sm">React</button>
          <button className="btn btn-sm">PHP</button>
        </div>

        <div className="section">
          <p className="title">
            IT Business Analyst | QA Tester • Kenja K.K.
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
          <button className="btn btn-sm disabled">Business Analysis</button>
          <button className="btn btn-sm">Requirements Gathering</button>
          <button className="btn btn-sm">Technical Documentation</button>
          <button className="btn btn-sm">Figma Mockups</button>
          <button className="btn btn-sm">QA Testing</button>
          <button className="btn btn-sm">Test Automation</button>
          <button className="btn btn-sm">Playwright</button>
        </div>

        <div className="section">
          <p className="title">
            Assistant Project Manager • Groupe La Française
          </p>
          <p className="date">
            August 2023 - Present
          </p>
          <div className="text">
            <p>
                - Produced financial communication materials for “La Française Real Estate Managers” (quarter and annual reports of 21 real estate investment funds, around 100,000 copies)
            </p>
            <p>
              - Planning and team coordination (20+ people including fund managers, asset managers, accountants, lawyers)
            </p>
          </div>
          <button className="btn btn-sm disabled">Project Management</button>
          <button className="btn btn-sm">Team Coordination</button>
          <button className="btn btn-sm">Communication</button>
          <button className="btn btn-sm">Time Management</button>
        </div>

    </div>
    
  );
}

export default WorkHistory;
