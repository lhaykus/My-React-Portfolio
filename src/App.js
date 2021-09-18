import React from 'react';
//import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Used to get rid of the padding and gaps above the nav bar
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
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
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path = '/' exact component ={Header} />
        <Route path = '/aboutme' exact component = {AboutMe} />
        <Route path = '/projects' exact component = {Projects} />
        <Route path = '/contactme' exact component = {ContactMe} />

      </Switch>
      

    </Router>
    <Scroll showBelow={250} />
   
    </>
    
  );
}

export default App;



 {/*}
    <main>
      <>
     
      <CssBaseline />
      <Navbar />
      <Header />
      <Parallax bgImage={lines} strength={600} bgImageStyle={{height:'800px', width:'2050px'}}>
        <div style={{height: 500}}>
        </div>
      </Parallax>
      <AboutMe />
      <Parallax bgImage={lines} strength={500} bgImageStyle={{height:'750px', width:'2050px'}}>
        <div style={{height: 500}}>
        </div>
      </Parallax>
      <Projects />
      <Parallax bgImage={lines} strength={500} bgImageStyle={{height:'750px', width:'2050px'}}>
        <div style={{height: 500}}>
        </div>
      </Parallax>
      <Skills />
      <Parallax bgImage={lines} strength={500} bgImageStyle={{height:'750px', width:'2050px'}}>
        <div style={{height: 500}}>
        </div>
      </Parallax>
      <ContactMe />
      <Scroll showBelow={250}/>
      </>
     
    </main>
  {*/}