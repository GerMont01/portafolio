import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/home/home';
import Work from './pages/work/work';
import About from './pages/about/about';
import Project from './pages/project/project';
 
export default (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:name" element={<Project />} />
    </Routes>
);