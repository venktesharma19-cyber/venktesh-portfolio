import { Hero } from './components/Hero';
import { ProfileSections } from './components/ProfileSections';
import { Experience } from './components/Experience';
import { AIWork } from './components/AIWork';
import { SkillsDashboard } from './components/SkillsDashboard';
import { Projects } from './components/Projects';
import { RoleMatch } from './components/RoleMatch';
import { Contact } from './components/Contact';
import { useState } from 'react';

export default function App() {
  const [light, setLight] = useState(false);
  return (
    <main data-mode={light ? 'light' : 'dark'}>
      <nav className="top-nav">
        <a href="#home" className="brand">VS<span>ProofOS</span></a>
        <div>
          <a href="#resume">Resume</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button className="mode-toggle" onClick={() => setLight(!light)}>{light ? 'Dark' : 'Light'}</button>
        </div>
      </nav>
      <Hero />
      <ProfileSections />
      <Experience />
      <AIWork />
      <SkillsDashboard />
      <Projects />
      <RoleMatch />
      <Contact />
    </main>
  );
}
