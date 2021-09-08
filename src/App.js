import React from 'react';
import './App.css';
import NavBar from './Components/Utilities/NavBar/NavBar';
import Routes from './Routes';
import Footer from './Components/Utilities/Footer/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App;
