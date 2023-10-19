import React from 'react';
import About from './About';
import WorkHistory from './WorkHistory';
import Education from './Education';
import Certifications from './Certifications';
import Projects from './Projects';
import Contact from './Contact';

function Right() {
  return (
    <div className="col-lg-7 col-md-12 right">
        <About />
        <WorkHistory />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
    </div>
  );
}

export default Right;
