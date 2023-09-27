import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './VendingMachine'
import './App.css'
import Skittles from './Skittles';
import HotDog from './HotDog';
import Jerky from './Jerky';

function App() {

  return (
    
    <BrowserRouter>
      <Routes className="routeButtons">
        <Route path='/' exact element={<VendingMachine />} />
        <Route path='/skittles' exact element={<Skittles />} />
        <Route path='/jerky' exact element={<Jerky />} />
        <Route path='/hotdog' exact element={<HotDog />} />
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
