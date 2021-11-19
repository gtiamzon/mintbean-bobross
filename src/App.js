import './App.css';
import React from 'react';
import AppRoutes from './config/routes';
import Navbar from './components/Navbar/navbar';


function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
