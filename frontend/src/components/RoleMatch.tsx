import { useEffect, useState } from 'react';
import { Bot, Copy } from 'lucide-react';
import { getRoleMatch } from '../services/api';

const roles = [
  { value: 'fullstack', label: 'Full Stack Engineer' },
  { value: 'frontend', label: 'Frontend React Engineer' },
  { value: 'cloud', label: 'Cloud / DevOps Engineer' },
  { value: 'ai', label: 'AI Platform Engineer' },
];

export function RoleMatch() {
  const [role, setRole] = useState('fullstack');
  const [result, setResult] = useState<{ score: number; matched: string[]; message: string } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getRoleMatch(role).then(setResult).catch(() => setResult(null));
  }, [role]);

  const pitch = `Venktesh Sharma is a ${result?.score || 0}% match for ${roles.find((r) => r.value === role)?.label}. Key signals: ${(result?.matched || []).join(', ')}.`;

  async function copyPitch() {
    await navigator.clipboard.writeText(pitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="section-wrap" id="role-match">
      <div className="role-match proof-card">
        <div>
          <span className="section-label">Role-Match Assistant</span>
          <h2>One-page proof for chaotic job markets.</h2>
          <p>
            Select a target role and the app creates a quick recruiter-facing signal summary.
            On GitHub Pages it runs locally. With the backend deployed, it can come from the API.
          </p>
        </div>
        <div className="match-panel">
          <Bot size={32} />
          <label>
            Target role
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              {roles.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
          <div className="score-ring"><strong>{result?.score ?? '--'}%</strong><span>fit signal</span></div>
          <p>{result?.message || 'Calculating role match...'}</p>
          <button className="btn secondary" onClick={copyPitch}><Copy size={18} /> {copied ? 'Copied' : 'Copy recruiter pitch'}</button>
        </div>
      </div>
    </section>
  );
}
