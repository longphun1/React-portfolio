import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.component';
import Intro from './components/intro/intro.component';
import Skills from './components/skills/skills.component';
import Projects from './components/projects/projects.component';
import Button from './components/button/button.component';
import './App.css';

class App extends Component {
  render() {
      return (
      <div className="body">
        <Navbar />
        <Intro />
        <div className='background-image'>
          <Skills />
          <Projects />
        </div>
        <Button />
      </div>
    );
  }
}

export default App;
