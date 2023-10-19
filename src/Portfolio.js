import React from 'react';
import './Portfolio.css';
import NavBar from './components/NavBar';
import Left from './components/Left';
import Right from './components/Right';

function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <NavBar />
        <Left />
        <Right />
      </div>   
    </div>
  );
}

export default Portfolio;
