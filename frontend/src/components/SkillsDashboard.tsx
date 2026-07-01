import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { skillGroups } from '../data/resume';

export function SkillsDashboard() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return skillGroups;
    return skillGroups
      .map((group) => ({ ...group, skills: group.skills.filter((skill) => skill.toLowerCase().includes(q) || group.title.toLowerCase().includes(q)) }))
      .filter((group) => group.skills.length > 0);
  }, [query]);

  return (
    <section className="section-wrap" id="skills">
      <div className="section-heading split-heading">
        <div>
          <span className="section-label">Skills Dashboard</span>
          <h2>Searchable technical signal map.</h2>
          <p>Recruiters can scan by category. Engineers can search for specific tools.</p>
        </div>
        <label className="search-box">
          <Search size={18} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search React, AWS, Terraform..." />
        </label>
      </div>
      <div className="skill-grid">
        {filtered.map((group) => (
          <article className="proof-card skill-card" key={group.title}>
            <span>{group.signal}</span>
            <h3>{group.title}</h3>
            <div className="tag-cloud">{group.skills.map((skill) => <em key={skill}>{skill}</em>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
