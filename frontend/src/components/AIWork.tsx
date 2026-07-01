import { BrainCircuit, GaugeCircle } from 'lucide-react';
import { aiSignals } from '../data/resume';

export function AIWork() {
  return (
    <section className="section-wrap ai-section" id="ai">
      <div className="section-heading">
        <span className="section-label">AI-Era Engineering</span>
        <h2>AI experience shown as enterprise product capability.</h2>
        <p>
          This is positioned carefully: not pretending to be only an ML engineer, but showing
          real AI platform, governance, data, onboarding, and product engineering exposure.
        </p>
      </div>
      <div className="ai-grid">
        <article className="proof-card ai-hero-card">
          <BrainCircuit size={42} />
          <h3>AI + Full Stack + Governance</h3>
          <p>
            Your strongest 2026 market signal is the combination of product UI, backend APIs,
            cloud deployment, AI model onboarding, artifact handling, and governance workflows.
          </p>
        </article>
        {aiSignals.map((item) => (
          <article className="proof-card ai-signal-card" key={item.title}>
            <GaugeCircle size={24} />
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
