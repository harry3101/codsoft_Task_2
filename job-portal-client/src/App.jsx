import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the child routes */}
    </>
  );
}

export default App;
