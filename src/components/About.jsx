export default function About() {
  return (
    <section className="section about container" id="about">
      <h2 className="section-title">About me</h2>
      <p className="section-subtitle">
        A quick introduction to my background and what I'm focused on today.
      </p>

      <div className="about-grid">
        <div>
          <p>
            Full-stack Software Engineer with 4+ years of experience building high-performance web applications using Laravel and React.js. Experienced in building enterprise management systems, optimizing backend performance, improving application scalability, and enhancing user experience.
          </p>

          <p>
            Contributed to the architecture and development of a scalable industry management platform used by multiple enterprise organizations to streamline operational workflows. Strong understanding of agile development, cross-functional collaboration, API integration, database management, and software engineering best practices.
          </p>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="stat-number gradient-text">5+</div>
            <div className="stat-label">Years of experience</div>
          </div>
          <div className="stat">
            <div className="stat-number gradient-text">40+</div>
            <div className="stat-label">Features shipped</div>
          </div>
          <div className="stat">
            <div className="stat-number gradient-text">12</div>
            <div className="stat-label">OSS contributions</div>
          </div>
          <div className="stat">
            <div className="stat-number gradient-text">3</div>
            <div className="stat-label">Mentees supported</div>
          </div>
        </div>
      </div>
    </section>
  );
}
