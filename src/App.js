import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/layout/Footer'
import Banner from './components/layout/Banner'
import SemanticResponsivity from './components/articles/SemanticResponsivity';


function App() {
  return (
    <div className='body'>
    <Router>
      <NavBar/>
      <Banner  title="Blog"/>
      <Routes>  
        <Route path="/" element={<Home/>} />
        <Route path="/SemanticResponsivity" element={<SemanticResponsivity/>} />
        <Route path="/about" element={<About/>} />     
      </Routes>   
      <Footer />
    </Router>
    </div>
  );
}

export default App;
