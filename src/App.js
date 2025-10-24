import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CalculoRemuneracion from './pages/calculadora';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/calculadora' element={<CalculoRemuneracion/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
