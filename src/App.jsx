import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './pages/shared/Navbar';
import Banner from './pages/banner/Banner';
import AboutMe from './pages/aboutMe/AboutMe';
import Services from './pages/services/Services';

function App() {
  return (
    <Router>
      <div className="container mx-auto
      ">
        <Navbar />
        <main>
          <Banner />
          <AboutMe />
          <Services />
        </main>
      </div>
    </Router>
  );
}

export default App;
