import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import AboutPage from './pages/about';
import PeoplePage from './pages/people';
import ResearchPage from './pages/research';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/people" element={<PeoplePage />} exact />
        <Route path="/research" element={<ResearchPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
