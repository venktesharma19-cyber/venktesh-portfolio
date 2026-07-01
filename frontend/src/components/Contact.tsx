import { FormEvent, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { profile } from '../data/resume';
import { sendContact } from '../services/api';

export function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const response = await sendContact({
        name: String(form.get('name')),
        email: String(form.get('email')),
        company: String(form.get('company') || ''),
        message: String(form.get('message')),
      });
      setStatus(response.message || 'Message captured successfully.');
      event.currentTarget.reset();
    } catch {
      setStatus('Could not send the message. Check backend deployment or API URL.');
    }
  }

  return (
    <section className="section-wrap" id="contact">
      <div className="contact-grid">
        <article className="proof-card contact-copy">
          <span className="section-label">Contact Layer</span>
          <h2>Make the next step obvious.</h2>
          <p>
            Recruiters should not have to hunt. This panel gives them a clear path to email,
            review your work, and contact you for Full Stack, Frontend, Cloud, DevOps, or AI platform roles.
          </p>
          <a className="mail-link" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
        </article>
        <form className="proof-card contact-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" required placeholder="Recruiter / Hiring Manager" /></label>
          <label>Email<input name="email" type="email" required placeholder="name@company.com" /></label>
          <label>Company<input name="company" placeholder="Company name" /></label>
          <label>Message<textarea name="message" required placeholder="Tell me about the opportunity..." /></label>
          <button className="btn primary" type="submit"><Send size={18} /> Send message</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
