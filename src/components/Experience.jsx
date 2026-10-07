const experience = [
  {
    role: 'Software Engineer II',
    company: 'Digital Run Ltd.',
    date: 'Sep 2024 — Present',
    bullets: [
      'Assist in system architecture design and technology selection to ensure scalability and maintainability.',
      'Developed and optimized backend modules, database queries, and APIs to improve application performance and reliability.',
      'Collaborated with cross-functional teams in an agile development environment to deliver scalable and high-quality software solutions.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Excel IT AI LTD',
    date: 'Apr 2023 — May 2024',
    bullets: [
      'Collaborated with frontend developers and designers to build responsive and user-friendly web applications.',
      'Improved coding quality by building modular components and enhanced functionality by refactoring code and user experience of web applications.',
      'Conducted code reviews and mentored junior developers to improve coding standards and development practices.'
    ]
  },
  {
    role: 'Jr. Software Developer',
    company: 'OneIxchange Limited',
    date: 'Jan 2020 — Aug 2022',
    bullets: [
      'Collaborated with senior developers and project managers to implement new features and functionality in web applications.',
      'Implemented new features and resolved application bugs in collaboration with senior developers and QA teams.',
      'Coordinated and contributed across the development lifecycle to deliver dependable web application updates.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
        Roles, responsibilities and highlights from the last few years.
      </p>

      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item.company}>
            <div className="timeline-meta">
              <div>
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-company">{item.company}</div>
              </div>
              <div className="timeline-date">{item.date}</div>
            </div>
            <ul>
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
