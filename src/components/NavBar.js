import React from 'react';

function NavBar() {
    return (
        <nav class="navbar navbar-expand justify-content-center">
            <a class="nav-link hidden-link" href="#about">About</a>
            <a class="nav-link hidden-link" href="#work-history">Work</a>
            <a class="nav-link hidden-link" href="#education">Education</a>
            <a class="nav-link hidden-link" href="#certifications">Certifications</a>
            <a class="nav-link hidden-link" href="#projects">Projects</a>
        </nav>
    );
}

export default NavBar;
