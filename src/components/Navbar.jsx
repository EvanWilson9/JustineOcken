import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
          <img
            className="wordmark-img"
            src="/images/justine-logo-removebg-preview.png"
            alt=""
          />
          <span>
            <span className="header-mark">Indiana · Fine Art</span>
            <span className="wordmark-text">Justine Ocken</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
              onClick={() => setOpen(false)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Commission
          </Link>
        </nav>
      </div>
    </header>
  );
}
