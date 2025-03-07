import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './styles/app.css';
import Welcome from './pages/Welcome';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
            </Routes>
        </Router>
    )
}

export default App;