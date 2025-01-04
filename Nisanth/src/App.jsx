import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

import logo from './assets/abc.jpg'; 

function App() {
    return (
        <Router>
            <header style={headerStyles}>
               
                <Link to="/" style={logoLinkStyles}>
                    
                    <img src={logo} alt="Logo" style={logoStyles} />
                </Link>

                <nav>
                    <ul style={navStyles}>
                        <li>
                            <Link to="/" style={linkStyles}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" style={linkStyles}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" style={linkStyles}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main style={mainStyles}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <footer style={footerStyles}>
                &copy; {new Date().getFullYear()} My Professional Website. All rights reserved.
            </footer>
        </Router>
    );
}

const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    background: '#282c34',
    color: 'white',
};

const logoTextStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
};

const logoStyles = {
    width: '50px',
    height: '50px',
};

const logoLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none', 
};

const navStyles = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
};

const linkStyles = {
    color: 'white',
    textDecoration: 'none',
};

const mainStyles = {
    padding: '2rem',
};

const footerStyles = {
    textAlign: 'center',
    padding: '1rem',
    background: '#282c34',
    color: 'white',
};

export default App;