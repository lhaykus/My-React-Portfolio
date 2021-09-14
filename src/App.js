import React from 'react';
//Used to get rid of the padding and gaps above the nav bar
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <main>
      <>
      <CssBaseline />
      <Navbar />
      <Header />
      <AboutMe />
      </>
    </main>
  );
}

export default App;
