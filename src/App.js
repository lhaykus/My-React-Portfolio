import React from 'react';
//import { Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Used to get rid of the padding and gaps above the nav bar
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Parallax } from 'react-parallax';
import lines from './assets/lines.jpg';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Scroll from './components/Scroll';



function App() {
  return (
    <>
    
  
   
      <div>
        <nav>
          <ul id='nav'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/aboutme'>About Me</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contactme'>Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
  
      <Switch>
        <Route exact path='/'> <Home /></Route>
        <Route exact path='/aboutme'> <AboutMe /></Route>
        <Route exact path='/projects'> <Projects /></Route>
        <Route exact path='/contactme'> <ContactMe /></Route>
      </Switch>
      <Scroll showBelow={250} />

    </>

  );
}

export default App;
