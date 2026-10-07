export default function Contact() {
  return (
    <section className="section container" id="contact">
      <div className="contact-card">
        <h2>
          Let's build something <span className="gradient-text">great</span>.
        </h2>
        <p>
          I'm currently open to mid-level engineering roles and interesting
          freelance projects. The fastest way to reach me is email.
        </p>
        <div className="contact-actions">
          <a href="mailto:fahim.code01@gmail.com" className="btn btn-primary">
            fahim.code01@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/in-fahim"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
