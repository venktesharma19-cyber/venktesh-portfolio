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


export const experiences: Experience[] = [
  {
    company: 'Bank of America',
    role: 'Full Stack Software Engineer',
    period: '04/2025 - Present',
    domain: 'Enterprise AI, intranet, governance, automation',
    summary:
      'Designed enterprise intranet portals and AI-enabled business applications using SharePoint Online, SPFx, React, TypeScript, Power Platform, Python, and REST APIs.',
    bullets: [
      'Built responsive SPFx web parts integrated with Microsoft Graph API, SharePoint REST API, and enterprise data sources.',
      'Developed AI/LLM onboarding workflows for model registration, metadata validation, deployment readiness, lifecycle management, and governance compliance.',
      'Integrated Hugging Face repositories, MinIO object storage, and internal enterprise systems for secure artifact ingestion and model distribution.',
      'Built Python microservices and RESTful APIs for packaging, validation, dependency verification, onboarding automation, and enterprise integrations.',
      'Supported containerized deployments in OpenShift and Kubernetes while improving runtime reliability and operational visibility.',
    ],
    stack: ['SPFx', 'React', 'TypeScript', 'Python', 'Power Platform', 'Hugging Face', 'MinIO', 'OpenShift', 'Kubernetes'],
  },
  {
    company: 'Floor & Décor',
    role: 'Frontend Developer',
    period: '04/2023 - 03/2025',
    domain: 'Retail commerce, payments, product/order systems',
    summary:
      'Worked on React, Node.js, and Express platforms incorporating payment integration, product management, order tracking, APIs, and production deployments.',
    bullets: [
      'Implemented secure payment gateway workflows using Stripe API for smooth and safe transactions.',
      'Designed RESTful APIs for product catalog, orders, and user authentication.',
      'Used MongoDB, AWS Aurora PostgreSQL, Redis, RabbitMQ, GraphQL, and third-party APIs for performance and real-time business flows.',
      'Managed CI/CD with Jenkins and GitLab CI, deployed using Docker and Kubernetes, and monitored with Grafana, Prometheus, and ELK.',
      'Applied Terraform, Ansible, Nginx, and AWS Auto Scaling for infrastructure automation and scalability.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Stripe', 'MongoDB', 'AWS Aurora', 'Redis', 'Docker', 'Kubernetes'],
  },
  {
    company: 'Baylor Scott & White Health',
    role: 'Full Stack Software Engineer',
    period: '02/2022 - 03/2023',
    domain: 'Healthcare real-time communication platform',
    summary:
      'Engineered a real-time patient-provider communication platform with Socket.io and Node.js for enterprise-grade clinical chat across departments.',
    bullets: [
      'Architected REST API endpoints for chat history, authentication, message status, payload validation, and role-based access control.',
      'Implemented Socket.io event-driven architecture with connection lifecycle, reconnection strategies, and message ordering under high concurrency.',
      'Built React + TypeScript chat components with Redux, Context API, user presence indicators, and notification badges.',
      'Designed MongoDB schemas and aggregation pipelines for high-throughput chat persistence and analytics workloads.',
      'Deployed services on Azure App Service and partnered with DevOps on Azure DevOps CI/CD pipelines.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'RBAC', 'Azure App Service', 'Azure DevOps'],
  },
  {
    company: 'Barclays Investment Bank',
    role: 'Software Engineer',
    period: '10/2020 - 10/2021',
    domain: 'Financial services invoicing and multi-currency billing',
    summary:
      'Enhanced an enterprise invoicing application to support multi-currency billing, real-time conversion, secure APIs, and AWS deployment workflows.',
    bullets: [
      'Implemented real-time currency conversion with Open Exchange Rates APIs, retry/fallback logic, and outage validation.',
      'Built React UI controls for currency selection and invoice preview with consistent formatting and accurate totals.',
      'Developed Node.js REST APIs for authentication and invoicing workflows with standardized error handling and input validation.',
      'Secured invoice data in PostgreSQL Aurora/RDS with encryption and access controls aligned with financial compliance.',
      'Deployed services on AWS EC2/S3 and used Lambda automation for invoice generation and notifications.',
    ],
    stack: ['React', 'Node.js', 'REST APIs', 'PostgreSQL', 'Aurora/RDS', 'AWS EC2', 'S3', 'Lambda'],
  },
];
