import { ArrowRight, Download, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero-shell" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="signal-pill"><Sparkles size={16} /> ProofOS / Full Stack + Cloud + AI</div>
          <h1>Venktesh Sharma</h1>
          <p className="hero-kicker">Full Stack Software Engineer</p>
          <p className="hero-lead">
            I build enterprise web applications, AI-enabled business workflows, real-time systems,
            and cloud-native delivery pipelines across finance, healthcare, and retail domains.
          </p>
          <div className="hero-actions">
            <a href="#resume" className="btn primary">Explore Resume <ArrowRight size={18} /></a>
            <button className="btn secondary" onClick={() => window.print()}>Save PDF <Download size={18} /></button>
          </div>
        </div>

        <aside className="proof-card hero-card" aria-label="Candidate profile card">
          <span className="status-dot" /> Available for high-impact engineering roles
          <div className="card-title">Candidate Snapshot</div>
          <div className="metric-grid">
            <div><strong>5+</strong><span>Years</span></div>
            <div><strong>React</strong><span>Frontend</span></div>
            <div><strong>AWS</strong><span>Cloud</span></div>
            <div><strong>AI</strong><span>Enterprise</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
