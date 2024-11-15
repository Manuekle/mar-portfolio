import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ProjectsPage from '../Pages/ProjectsPage';

function Base() {
  return (
    <div className="bg-[#F4E5D2] w-auto h-auto container mx-auto p-8">
      <Router>
        <header className="flex flex-row justify-between items-center">
          <span className="text-black text-sm flex flex-row gap-2 items-center">
            <h4 className="font-semibold">maryi</h4>
            <h4 className="font-semibold">~~~</h4>
            <Link to="/" className="font-semibold underline">
              home
            </Link>
          </span>
          <Link
            to="projects"
            className="text-black underline text-sm font-semibold"
          >
            proyects
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Base;
