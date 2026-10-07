const skillGroups = [
  {
    title: 'Languages',
    items: ['PHP', 'JavaScript']
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React JS', 'Bootstrap', 'Tailwind CSS', 'Inertia JS']
  },
  {
    title: 'Backend',
    items: ['Laravel', 'CodeIgniter', 'RESTful APIs']
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL']
  },
  {
    title: 'Caching & Queues',
    items: ['Laravel Cache', 'Queue Management']
  },
  {
    title: 'Testing & Version Control',
    items: ['Postman', 'PHPUnit', 'GitHub', 'GitLab']
  },
  {
    title: 'Task Management',
    items: ['Jira', 'ClickUp', 'Notion']
  }
];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <h2 className="section-title">Skills & tools</h2>
      <p className="section-subtitle">
        The stack I reach for most often. I'm comfortable across the full stack
        and pick up new tools quickly.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item} className="skill-chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
