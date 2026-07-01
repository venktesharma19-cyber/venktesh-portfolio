const roleKeywords = {
  fullstack: ['React.js', 'Node.js', 'TypeScript', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'AWS'],
  frontend: ['React.js', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'Material-UI', 'Figma'],
  cloud: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'OpenShift'],
  ai: ['Python', 'MinIO', 'OpenShift', 'Kubernetes', 'REST APIs', 'RBAC', 'AWS'],
};

export function matchRole(role, skills) {
  const key = roleKeywords[role] ? role : 'fullstack';
  const wanted = roleKeywords[key];
  const matched = wanted.filter((item) => skills.includes(item));
  const score = Math.round((matched.length / wanted.length) * 100);
  return {
    role: key,
    score,
    matched,
    message: `Strong ${key} match based on ${matched.slice(0, 5).join(', ')}${matched.length > 5 ? ', and more' : ''}.`,
  };
}
