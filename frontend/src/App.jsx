import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services'
import Upload from './pages/Upload'
import Payment from './pages/Payment'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'


//Navigation
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">

          <Link className="navbar-brand" to="/">
            ShopVibe
          </Link>

          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <Link className="nav-link" to="/services">
              Services
            </Link>

            <Link className="nav-link" to="/upload">
              Upload Products
            </Link>
            <Link className="btn btn-success" to="/payment">
              Pay Now
            </Link>
          </div>

        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/upload" element={<Upload />}  />
        <Route path="/payment" element={<Payment />}  />
      </Routes>



    </div>


  );
}

export default App;
