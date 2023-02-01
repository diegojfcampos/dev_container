import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/layout/Footer'
import Banner from './components/layout/Banner'


function App() {
  return (
    <body className='body'>
    <Router>
      <NavBar/>
      <Banner  title="Blog"/>
      <Routes>  
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />     
      </Routes>   
      <Footer />
    </Router>
    </body>
  );
}

export default App;
