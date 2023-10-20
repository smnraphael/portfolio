import React from 'react';
import chain from '../assets/chain.png';

function Education() {
  return (
  <div id="education" className="education">

    <p className="hidden-title">EDUCATION</p>

    <a className="external-link" href="https://mba.nucba.ac.jp/en/" target="_blank" rel="noopener noreferrer">
      <div className="section section-active section-button">
        <div className="d-flex justify-content-between">
          <p className="title">
            Nagoya University of Commerce & Business
          </p>
          <div className="icon-small-container">
            <img className="icon-small" src={chain} alt="chain" />
          </div>
        </div>
        <p className="date">
          September 2021 - September 2022
        </p>
        <p className="diploma">
            M.Sc. in Business Administration
        </p>
        <div className="text">
          <p>
            - #1 MBA in Japan
          </p>
          <p>
            - International double degree with NEOMA Business School
          </p>
        </div>
      </div>
    </a>

    <a className="external-link" href="https://neoma-bs.com" target="_blank" rel="noopener noreferrer">
      <div className="section section-active section-button">
        <div className="d-flex justify-content-between">
          <p className="title">
            NEOMA Business School
          </p>
          <div className="icon-small-container">
            <img className="icon-small" src={chain} alt="github" />
          </div>
        </div>
        <p className="date">
          September 2019 - September 2022
        </p>
        <p className="diploma">
          M.Sc. in Management
        </p>
        <div className="text">
          <p>
            - International double degree with Nagoya University of Commerce & Business
          </p>
        </div>
      </div>
    </a>

    <a className="external-link" href="https://english.sufe.edu.cn" target="_blank" rel="noopener noreferrer">
      <div className="section section-active section-button">
        <div className="d-flex justify-content-between">
          <p className="title">
            Shanghai University of Finance & Economics
          </p>
          <div className="icon-small-container">
            <img className="icon-small" src={chain} alt="github" />
          </div>
        </div>
        <p className="date">
          January 2021 - June 2021
        </p>
        <p className="diploma">
          Semester Abroad, Economics
        </p>
        <div className="text">
          <p>
            - Semester abroard with NEOMA Business School
          </p>
        </div>
      </div>
    </a>

    <a className="external-link" href="https://www.univ-ubs.fr/en/index.html" target="_blank" rel="noopener noreferrer">
      <div className="section section-active section-button section-five">
        <div className="d-flex justify-content-between">
          <p className="title">
            Southern Brittany University
          </p>
          <div className="icon-small-container">
            <img className="icon-small" src={chain} alt="github" />
          </div>
        </div>
        <p className="date">
          September 2014 - June 2019
        </p>
        <p className="diploma">
          B.A. in Legal Studies
        </p>
      </div>
    </a>

  </div>
  );
}

export default Education;
