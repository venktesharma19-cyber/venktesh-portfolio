import { profile, skillGroups } from '../data/resume';

const API_BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '');

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function sendContact(payload: ContactPayload) {
  if (!API_BASE) {
    return {
      ok: true,
      mode: 'static',
      message: 'Static GitHub Pages mode: connect backend URL to send real emails.',
    };
  }
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error('Contact request failed');
  return response.json();
}

export async function getRoleMatch(role: string) {
  if (!API_BASE) {
    const skills = skillGroups.flatMap((group) => group.skills);
    const roleMap: Record<string, string[]> = {
      fullstack: ['React.js', 'Node.js', 'TypeScript', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'AWS'],
      frontend: ['React.js', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'Material-UI', 'Figma'],
      cloud: ['AWS Lambda', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'OpenShift'],
      ai: ['Python', 'MinIO', 'OpenShift', 'Kubernetes', 'REST APIs', 'RBAC', 'AWS S3'],
    };
    const wanted = roleMap[role] || roleMap.fullstack;
    const matched = wanted.filter((skill) => skills.includes(skill));
    return {
      role,
      score: Math.round((matched.length / wanted.length) * 100),
      matched,
      message: `${profile.name} is a strong ${role} match based on ${matched.slice(0, 5).join(', ')}.`,
    };
  }
  const response = await fetch(`${API_BASE}/api/role-match`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ role }),
  });
  if (!response.ok) throw new Error('Role match failed');
  return response.json();
}
