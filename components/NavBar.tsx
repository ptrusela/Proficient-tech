"use client";
import { useEffect, useState } from "react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label="Proficient home">
          <img className="mark" src="/assets/pt-mark.svg" alt="Proficient mark" />
          <span className="word">PROFICIENT</span>
        </a>
        <nav className="nav-links">
          <a className="link" href="#services">Services</a>
          <a className="link" href="#industries">Industries</a>
          <a className="link" href="#partners">Partners</a>
          <a className="link" href="/medusa">Medusa.js</a>
          <a className="link" href="/blog">Blog</a>
          <a className="link" href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}
