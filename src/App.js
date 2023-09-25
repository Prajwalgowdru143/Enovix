import React from 'react'
import NavBar from './Components/NavBar'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home'


function App() {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
