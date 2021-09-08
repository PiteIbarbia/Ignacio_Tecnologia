import React from 'react';
import './App.css';
import NavBar from './Components/Utilities/NavBar/NavBar';
import Routes from '../src/Routes';
import Footer from './Components/Utilities/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
