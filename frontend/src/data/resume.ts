export type SkillGroup = {
  title: string;
  signal: string;
  skills: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  domain: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export type Project = {
  title: string;
  category: 'AI' | 'Full Stack' | 'Cloud' | 'Frontend';
  summary: string;
  proof: string[];
  stack: string[];
};

export const profile = {
  name: 'Venktesh Sharma',
  location: 'Dallas, TX',
  phone: '(469) 708-8895',
  email: 'venktesharma.19@gmail.com',
  title: 'Full Stack Software Engineer',
  certification: 'AWS Certified Solutions Architect - Associate',
  education: "Master's in Computer and Information Science",
  summary:
    'Full Stack Software Engineer with 5+ years of experience building and scaling enterprise-grade web applications across financial services, healthcare, and retail domains. Strong experience with React.js, Node.js, TypeScript, Python, REST/GraphQL APIs, Socket.io, AWS, Azure, Docker, Kubernetes, Jenkins, and Terraform.',
};

export const skillGroups: SkillGroup[] = [
  { title: 'Programming', signal: 'Core languages', skills: ['JavaScript', 'TypeScript', 'Python'] },
  { title: 'Frontend', signal: 'Product UI', skills: ['React.js', 'Redux', 'Redux Toolkit', 'HTML5', 'CSS3', 'Material-UI', 'Axios', 'Figma'] },
  { title: 'Backend', signal: 'API systems', skills: ['Node.js', 'Express.js', 'Flask', 'Socket.io', 'REST APIs', 'GraphQL', 'Mongoose', 'RabbitMQ'] },
  { title: 'Databases', signal: 'Data layer', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Microsoft SQL Server', 'Redis', 'AWS Aurora'] },
  { title: 'Cloud & DevOps', signal: 'Delivery', skills: ['AWS Lambda', 'API Gateway', 'S3', 'EC2', 'Azure', 'OpenShift', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI'] },
  { title: 'Testing', signal: 'Quality', skills: ['Jest', 'Selenium', 'Supertest'] },
  { title: 'Monitoring', signal: 'Reliability', skills: ['Grafana', 'ELK Stack', 'Prometheus'] },
  { title: 'Security & Tools', signal: 'Enterprise', skills: ['Git', 'Agile', 'Scrum', 'Stripe API', 'OAuth 2.0', 'JWT', 'RBAC', 'MinIO', 'AWS S3'] },
];

export const roleSignals = [
  'Enterprise AI onboarding workflows',
  'React + TypeScript UI systems',
  'REST/GraphQL API engineering',
  'Real-time Socket.io platforms',
  'AWS/Azure cloud-native delivery',
  'Docker, Kubernetes, Terraform, Jenkins',
  'RBAC, audit logging, governance, validation',
];
