import { Router } from 'express';
import { profile, skills, highlights } from '../data/resume.js';
import { matchRole } from '../utils/roleMatch.js';

export const profileRouter = Router();

profileRouter.get('/profile', (_req, res) => {
  res.json({ profile, skills, highlights });
});

profileRouter.get('/skills', (req, res) => {
  const q = String(req.query.q || '').toLowerCase();
  const result = q ? skills.filter((skill) => skill.toLowerCase().includes(q)) : skills;
  res.json({ count: result.length, skills: result });
});

profileRouter.post('/role-match', (req, res) => {
  const role = String(req.body?.role || 'fullstack');
  res.json(matchRole(role, skills));
});
