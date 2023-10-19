import React from 'react';
import About from './About';
import WorkHistory from './WorkHistory';
import Education from './Education';
import Certifications from './Certifications';
import Projects from './Projects';

function Right() {
  return (
    <div className="col-6 right overflow-auto">
        <About />
        <WorkHistory />
        <Education />
        <Certifications />
        <Projects />
    </div>
  );
}

export default Right;
