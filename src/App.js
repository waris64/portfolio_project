import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Project from './routes/Project';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
