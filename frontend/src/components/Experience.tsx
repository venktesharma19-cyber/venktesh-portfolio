import { ChevronDown, BriefcaseBusiness } from 'lucide-react';
import { experiences } from '../data/resume';

export function Experience() {
  return (
    <section className="section-wrap" id="experience">
      <div className="section-heading">
        <span className="section-label">Experience Evidence</span>
        <h2>Career proof cards pulled from your resume.</h2>
        <p>
          Each card is written like a project case file: business domain, engineering work,
          technical stack, and expandable proof points.
        </p>
      </div>
      <div className="experience-stack">
        {experiences.map((item, index) => (
          <details className="experience-card proof-card" key={item.company} open={index === 0}>
            <summary>
              <div className="experience-main">
                <div className="experience-icon"><BriefcaseBusiness size={22} /></div>
                <div>
                  <span>{item.period}</span>
                  <h3>{item.company}</h3>
                  <p>{item.role} • {item.domain}</p>
                </div>
              </div>
              <ChevronDown className="chevron" />
            </summary>
            <div className="experience-body">
              <p className="experience-summary">{item.summary}</p>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="tag-cloud">
                {item.stack.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
