import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import Loader from './components/Loader';

// Lazy load sections below the fold
const About = React.lazy(() => import('./sections/About'));
const Experience = React.lazy(() => import('./sections/Experience'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Skills = React.lazy(() => import('./sections/Skills'));
const Certifications = React.lazy(() => import('./sections/Certifications'));
const Contact = React.lazy(() => import('./sections/Contact'));

const Home = () => (
  <>
    <Hero />
    <Suspense fallback={<Loader />}>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </Suspense>
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
