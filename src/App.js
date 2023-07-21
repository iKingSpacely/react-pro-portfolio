import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Home from './components/pages/Home';
import Nav from './components/pages/Nav';
import Projects from './components/pages/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/resume"
                        element={<Resume />}
                    />
                </Routes>
            </div>
        </Router>
    )
};