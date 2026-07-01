import { useState } from 'react';
import { projects } from '../data/resume';

const filters = ['All', 'AI', 'Full Stack', 'Cloud', 'Frontend'] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="section-wrap" id="projects">
      <div className="section-heading split-heading">
        <div>
          <span className="section-label">Project Proof</span>
          <h2>Resume work reframed as portfolio systems.</h2>
          <p>Each project card connects business value to engineering execution.</p>
        </div>
        <div className="filter-row">
          {filters.map((item) => <button className={filter === item ? 'active' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article className="proof-card project-card" key={project.title}>
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <ul>{project.proof.map((point) => <li key={point}>{point}</li>)}</ul>
            <div className="tag-cloud">{project.stack.map((tool) => <em key={tool}>{tool}</em>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
