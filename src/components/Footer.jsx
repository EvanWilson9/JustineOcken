import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="kicker">Studio</p>
          <p className="footer-name">Justine Ocken</p>
          <p className="footer-copy">
            Colored pencil, paint, and sculpture from Indiana — work that holds a story.
          </p>
        </div>
        <div>
          <p className="kicker">Visit</p>
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Commission</Link>
          </nav>
        </div>
        <div>
          <p className="kicker">Follow</p>
          <a
            className="footer-social"
            href="https://www.instagram.com/art_justine58/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Justine Ocken</span>
        <span>People, plants, animals, and the land they live on.</span>
      </div>
    </footer>
  );
}

export default Footer;
