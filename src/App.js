import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <NavBar />

        //If you remove here will render
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
     
      
    </Router>
  );
}

export default App;
