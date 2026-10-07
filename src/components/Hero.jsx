export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div>
          <h1>
            Hi, I'm <span className="gradient-text">Mollah Fahim Ul Islam</span>.<br />
            I build reliable web apps that scale.
          </h1>
          <p className="lead">
            Mid-level software engineer with 5+ years of experience shipping
            production features across the stack — React JS, Laravel
            and MySQL. I care about clean code, thoughtful design and
            developer experience.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-card" aria-hidden="true">
          <div className="code-header">
            <span className="code-dot" />
            <span className="code-dot" />
            <span className="code-dot" />
          </div>
          <div className="code-line">
            <span className="code-com">// engineer.js</span>
          </div>
          <div className="code-line">
            <span className="code-kw">const</span> engineer = {'{'}
          </div>
          <div className="code-line">
            {'  '}name: <span className="code-str">'Mollah Fahim Ul Islam'</span>,
          </div>
          <div className="code-line">
            {'  '}role: <span className="code-str">'Software Engineer II'</span>,
          </div>
          <div className="code-line">
            {'  '}stack: [<span className="code-str">'Laravel'</span>,{' '}
            <span className="code-str">'React JS'</span>,{' '}
            <span className="code-str">'MySQL'</span>],
          </div>
          <div className="code-line">
            {'  '}
            <span className="code-fn">ship</span>() {'{'}{' '}
            <span className="code-kw">return</span>{' '}
            <span className="code-str">'🚀'</span>; {'}'}
          </div>
          <div className="code-line">{'}'};</div>
        </div>
      </div>
    </section>
  );
}
