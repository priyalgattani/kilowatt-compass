import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import TripPlanner from './components/TripPlanner';
import ContactUs from './components/ContactUs';
import './App.css';
import NavTop from './components/NavTop';
import HelpCenter from './components/HelpCenter';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <>
      <NavTop/>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/trip-planner" element={<TripPlanner/>}/>
          <Route path="/help-center" element={<HelpCenter/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
