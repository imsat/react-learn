import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import AppNavigator from './containers/AppNavigator'
import Pokedex from './containers/Pokedex'

export default function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokedex />} /> 
        </Routes>
     </BrowserRouter>
  )
}