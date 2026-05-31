import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#servicios' },
  { label: 'Process', href: '#proceso' },
  { label: 'Results', href: '#resultados' },
  { label: 'Contact', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight transition-colors"
          style={{ color: scrolled ? '#0A0A0C' : '#FFFFFF' }}
        >
          NEXUS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="text-sm font-medium transition-colors hover:text-brand-600"
              style={{ color: scrolled ? '#6B6B78' : 'rgba(255,255,255,0.7)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleClick(e, '#contacto')}
            className="bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-button hover:bg-brand-700 hover:scale-[1.02] transition-all"
          >
            Let's talk
          </a>
        </div>

        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: scrolled ? '#0A0A0C' : '#FFFFFF' }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-dark z-40 flex flex-col items-center gap-8 pt-16">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="text-white text-2xl font-medium hover:text-brand-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleClick(e, '#contacto')}
            className="bg-brand-600 text-white font-semibold px-8 py-3 rounded-button hover:bg-brand-700 transition-colors"
          >
            Let's talk
          </a>
        </div>
      )}
    </nav>
  );
}
