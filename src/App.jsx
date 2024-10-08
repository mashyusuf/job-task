import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <Router>
      <div className="container mx-auto
      ">
        <Navbar />
        {/* Other components */}
      </div>
    </Router>
  );
}

export default App;
