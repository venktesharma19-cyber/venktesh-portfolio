import { Hero } from './components/Hero';
import { ProfileSections } from './components/ProfileSections';

export default function App() {
  return (
    <main>
      <nav className="top-nav">
        <a href="#home" className="brand">VS<span>ProofOS</span></a>
        <div>
          <a href="#resume">Resume</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <Hero />
      <ProfileSections />
    </main>
  );
}
