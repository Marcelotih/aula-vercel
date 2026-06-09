import React, { useState } from 'react';


import HomeScreen from './screens/Homescreen';  
import AboutScreen from './screens/Aboutscreen';   
import StackScreen from './screens/Stackscreen';   
import ContactScreen from './screens/Contactscreen'; 
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');

  const screens = {
    home: <HomeScreen navigate={setPage} />,
    about: <AboutScreen />,
    stack: <StackScreen />,
    contact: <ContactScreen />,
  };

  return (
    <div className="app">
      <nav className="navbar">
        <span className="logo">marcelo<span className="logo-dot">.</span>dev</span>
        <div className="nav-links">
          {['home', 'about', 'stack', 'contact'].map((p) => (
            <button
              key={p}
              className={`nav-btn ${page === p ? 'active' : ''}`}
              onClick={() => setPage(p)}
            >
              {p === 'home' ? 'início' : p === 'about' ? 'sobre' : p === 'stack' ? 'stack' : 'contato'}
            </button>
          ))}
        </div>
      </nav>

      <main className="main">
        {screens[page]}
      </main>
    </div>
  );
}