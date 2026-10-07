const projects = [
  {
    icon: '🏠',
    title: 'Real Estate CRM',
    description:
      'Engineered a secure, scalable customer relationship management system tailored for the real estate sector. Implemented modules for property listings, client management, deal pipelines, and communication workflows.',
    tags: ['Laravel', 'Sanctum', 'MySQL', 'Queue Jobs', 'Spatie', 'RESTful APIs'],
    demo: '#',
    repo: '#'
  },
  {
    icon: '🏥',
    title: 'Healthcare Management System',
    description:
      'Client project (USA) for a multi-specialty clinic. Built a modular Laravel platform to manage patient data, doctor schedules, billing, and access control. Delivered secure RESTful APIs for a doctor-facing mobile app and integrated OnlyOffice for secure document upload, preview, and management.',
    tags: [
      'Laravel',
      'MySQL',
      'Sanctum',
      'Spatie',
      'Blade',
      'AJAX',
      'jQuery',
      'OnlyOffice',
      'Bootstrap'
    ],
    demo: '#',
    repo: '#'
  },
  {
    icon: '🩺',
    title: 'Hospital Management System',
    description:
      'Manage Front Desk, OPD, IPD, Appointments, Pharmacy, Billing & Reports — with secure, role-based access.',
    tags: ['Laravel', 'MySQL', 'Spatie', 'Blade', 'Bootstrap'],
    demo: '#',
    repo: '#'
  }
];

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <h2 className="section-title">Selected projects</h2>
      <p className="section-subtitle">
        A few things I've built recently — a mix of work, side projects and
        open source.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Demo ↗
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Code ↗
                </a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-tags">
              {project.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
