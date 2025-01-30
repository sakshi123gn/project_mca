import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add a default route to handle 404 or home page */}
        <Route path="/" element={<Login />} /> {/* Change this to your home route */}
      </Routes>
    </Router>
  );
}

export default App;
