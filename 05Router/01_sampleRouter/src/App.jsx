import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home';
import About from './components/About';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
