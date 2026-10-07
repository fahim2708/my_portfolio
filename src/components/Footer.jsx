export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div> © {new Date().getFullYear()} Fahim Ul Islam. Built with{' '}
          <span role="img" aria-label="love" style={{ color: '#e25555' }}>
            ❤️
          </span></div>
        <div className="socials">
          <a href="https://github.com/fahim2708" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/in-fahim"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
