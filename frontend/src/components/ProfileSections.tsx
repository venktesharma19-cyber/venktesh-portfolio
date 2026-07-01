import { Award, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { profile, roleSignals } from '../data/resume';

export function ProfileSections() {
  return (
    <section className="section-wrap" id="resume">
      <div className="section-heading">
        <span className="section-label">Identity Layer</span>
        <h2>Not a resume page. A proof system for who you are.</h2>
        <p>
          The layout turns your resume into scan-friendly evidence: summary, target role fit,
          certification, education, and role signals recruiters can understand fast.
        </p>
      </div>

      <div className="profile-grid">
        <article className="proof-card profile-summary-card">
          <span className="micro-label">Professional Summary</span>
          <h3>{profile.title}</h3>
          <p>{profile.summary}</p>
          <div className="identity-row">
            <span><MapPin size={16} /> {profile.location}</span>
            <span><Mail size={16} /> {profile.email}</span>
            <span><Phone size={16} /> {profile.phone}</span>
          </div>
        </article>

        <article className="proof-card credential-card">
          <div className="credential-item"><Award size={22} /><div><strong>Certification</strong><span>{profile.certification}</span></div></div>
          <div className="credential-item"><GraduationCap size={22} /><div><strong>Education</strong><span>{profile.education}</span></div></div>
        </article>

        <article className="proof-card signal-card">
          <span className="micro-label">Recruiter Signal Stack</span>
          <div className="signal-list">
            {roleSignals.map((signal) => <span key={signal}>{signal}</span>)}
          </div>
        </article>
      </div>
    </section>
  );
}
