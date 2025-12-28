import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Info from './components/Info'
import Services from './components/Services'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My React Webpage</h1>
        <p className="description">
          Welcome to our website. Explore our information and services.
        </p>
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/info" className="nav-link">Info</Link>
          <Link to="/services" className="nav-link">Services</Link>
        </nav>
      </header>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </div>
  )
}

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Our Website</h2>
      <p>This is the home page. Use the navigation above to explore our Info and Services pages.</p>
    </div>
  )
}

export default App

