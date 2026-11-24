import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Plus, MapPin } from 'lucide-react';
import Photo from './ui/Photo';
import { photos } from '../data/media';
import { services } from '../data/services';
import { serviceHref } from '../data/serviceLinks';
import cityPages from '../data/cityPages';
import { usStates, stateHref } from '../data/usStates';
import { gsap, prefersReducedMotion } from '../motion/gsap';
import './header.css';

const TOP_SERVICES = [
  { id: 'structural-engineering', photo: photos.steelBridge, tone: 'sky' },
  { id: 'architectural-design', photo: photos.whiteTerraces, tone: 'volt' },
  { id: 'mep-engineering', photo: photos.officeNight, tone: 'spark' },
  { id: 'civil-engineering', photo: photos.forestBridge, tone: 'ink' },
].map((t) => ({ ...t, s: services.find((x) => x.id === t.id) })).filter((t) => t.s);

const MORE_SERVICES = services.filter((s) => !TOP_SERVICES.some((t) => t.id === s.id));

const CITIES = Object.entries(cityPages).map(([slug, c]) => ({ slug, city: c.city }));

const navItems = [
  { to: '/portfolio', label: 'Projects' },
  { to: '/about', label: 'About' },
];

const blurb = (t) => (t.length > 78 ? `${t.slice(0, 76).replace(/\s+\S*$/, '')}…` : t);

export default function Header({ onOpenConsultation, onOpenProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(null); // 'services' | 'areas' | null
  const [showMore, setShowMore] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const drawerRef = useRef(null);
  const location = useLocation();

  // Close menus on route change (adjusted during render, no effect needed)
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setIsOpen(false);
    setMenu(null);
    setShowMore(false);
    setMobileSub(null);
  }

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        if (Math.abs(y - last) > 6) {
          setHidden(y > last && y > 400);
          last = y;
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('pc-menu-open', isOpen);
    if (isOpen) {
      window.__lenis?.stop();
      if (drawerRef.current && !prefersReducedMotion()) {
        gsap.fromTo(
          drawerRef.current.querySelectorAll('.pc-drawer__link, .pc-drawer__cta > *'),
          { yPercent: 60, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.05, delay: 0.15 },
        );
      }
    } else {
      window.__lenis?.start();
    }
    return () => {
      document.body.classList.remove('pc-menu-open');
      window.__lenis?.start();
    };
  }, [isOpen]);

  // Close an open menu on Escape or a click/tap outside the bar
  const barRef = useRef(null);
  useEffect(() => {
    if (!menu) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') { setMenu(null); setShowMore(false); } };
    const onDown = (e) => { if (barRef.current && !barRef.current.contains(e.target)) { setMenu(null); setShowMore(false); } };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [menu]);

  const open = (m) => setMenu(m);
  const close = () => { setMenu(null); setShowMore(false); };
  const solid = location.pathname !== '/';
  const dark = !solid && !scrolled && !isOpen;

  return (
    <header className={`pc-nav ${scrolled || solid ? 'is-scrolled' : ''} ${hidden && !menu && !isOpen ? 'is-hidden' : ''} ${isOpen ? 'is-open' : ''} ${dark ? 'is-dark' : ''}`}>
      <div className="pc-nav__bar" ref={barRef} onMouseLeave={close}>
        <Link to="/" className="pc-nav__logo" aria-label="PRIMECOST — home">
          <img src={dark ? '/logo-mark-white.webp' : '/logo-mark.webp'} alt="PRIMECOST Engineering Services" width="322" height="150" fetchPriority="high" />
        </Link>

        <nav className="pc-nav__links" aria-label="Primary">
          <button
            type="button"
            className={`pc-nav__link ${location.pathname.startsWith('/services') || menu === 'services' ? 'is-active' : ''}`}
            aria-expanded={menu === 'services'}
            aria-haspopup="true"
            onMouseEnter={() => open('services')}
            onClick={() => setMenu('services')}
          >
            Services <Plus size={13} strokeWidth={2} className={`pc-nav__plus ${menu === 'services' ? 'is-open' : ''}`} />
          </button>

          <NavLink to="/portfolio" onMouseEnter={close} className={({ isActive }) => `pc-nav__link ${isActive ? 'is-active' : ''}`}>Projects</NavLink>

          <button
            type="button"
            className={`pc-nav__link ${location.pathname.startsWith('/service-areas') || location.pathname.startsWith('/structural-engineer') || menu === 'areas' ? 'is-active' : ''}`}
            aria-expanded={menu === 'areas'}
            aria-haspopup="true"
            onMouseEnter={() => open('areas')}
            onClick={() => setMenu('areas')}
          >
            Areas Covered <Plus size={13} strokeWidth={2} className={`pc-nav__plus ${menu === 'areas' ? 'is-open' : ''}`} />
          </button>

          <NavLink to="/about" onMouseEnter={close} className={({ isActive }) => `pc-nav__link ${isActive ? 'is-active' : ''}`}>About</NavLink>
        </nav>

        <div className="pc-nav__actions" onMouseEnter={close}>
          <a href="tel:+18322346456" className="pc-nav__phone" aria-label="Call PRIMECOST at (832) 234-6456">
            <span className="pc-live" /> (832) 234-6456
          </a>
          <button type="button" onClick={onOpenProposal} className="pc-btn pc-btn--accent pc-btn--sm" data-magnetic>
            Get a Proposal
            <span className="pc-btn__icon"><ArrowUpRight size={16} strokeWidth={2} /></span>
          </button>
        </div>

        <button
          type="button"
          className={`pc-nav__toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span /><span />
        </button>

        {/* ───── Services: top 4 stacked, more below ───── */}
        <div className={`pc-mega ${menu === 'services' ? 'is-open' : ''}`} role="menu" aria-hidden={menu !== 'services'}>
          <div className="pc-mega__inner pc-mega__inner--svc">
            <div className="pc-stack">
              <span className="pc-eyebrow">Most requested</span>
              <ol className="pc-stack__list">
                {TOP_SERVICES.map((t, i) => (
                  <li key={t.id} style={{ '--i': i }}>
                    <Link to={serviceHref(t.id)} className={`pc-stack__card is-${t.tone}`} role="menuitem" tabIndex={menu === 'services' ? 0 : -1}>
                      <span className="pc-stack__img"><Photo photo={t.photo} width={900} sizes="120px" alt="" /></span>
                      <span className="pc-stack__body">
                        <strong>{t.s.title}</strong>
                        <span>{blurb(t.s.outcome)}</span>
                      </span>
                      <span className="pc-stack__meta">
                        <em>From {t.s.startingFrom}</em>
                        <span className="pc-stack__go"><ArrowUpRight size={18} strokeWidth={2} /></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>

              <button type="button" className="pc-stack__more" onClick={() => setShowMore((v) => !v)} aria-expanded={showMore} tabIndex={menu === 'services' ? 0 : -1}>
                <Plus size={16} strokeWidth={2} className={`pc-nav__plus ${showMore ? 'is-open' : ''}`} />
                {showMore ? 'Show less' : `${MORE_SERVICES.length} more services`}
              </button>
              <div className={`pc-stack__extra ${showMore ? 'is-open' : ''}`}>
                <ul>
                  {MORE_SERVICES.map((s) => (
                    <li key={s.id}>
                      <Link to={serviceHref(s.id)} tabIndex={menu === 'services' && showMore ? 0 : -1}>
                        {s.title} <ArrowUpRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to="/services" className="pc-mega__card" tabIndex={menu === 'services' ? 0 : -1} data-cursor="Explore">
              <Photo photo={photos.glassCorner} width={900} sizes="320px" className="pc-mega__img" />
              <div className="pc-mega__card-body">
                <span className="pc-chip"><span className="pc-live" /> {services.length} disciplines</span>
                <p>Every service, scope and starting price in one place.</p>
                <span className="pc-mega__card-cta">All services <ArrowRight size={16} /></span>
              </div>
            </Link>
          </div>
        </div>

        {/* ───── Areas covered ───── */}
        <div className={`pc-mega ${menu === 'areas' ? 'is-open' : ''}`} role="menu" aria-hidden={menu !== 'areas'}>
          <div className="pc-mega__inner pc-mega__inner--areas">
            <Link to="/service-areas" className="pc-areas__hero" tabIndex={menu === 'areas' ? 0 : -1}>
              <span className="pc-eyebrow on-dark is-volt">Nationwide</span>
              <strong>49</strong>
              <span>states where our engineers seal drawings</span>
              <span className="pc-areas__go">See every state <ArrowRight size={16} /></span>
            </Link>
            <div className="pc-areas__list">
              <span className="pc-eyebrow">Greater Houston — local engineers</span>
              <ul className="pc-areas__cities">
                {CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link to={`/structural-engineer/${c.slug}`} tabIndex={menu === 'areas' ? 0 : -1}>
                      <MapPin size={14} strokeWidth={1.75} /> {c.city}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pc-areas__states-head">
                <span className="pc-eyebrow">All {usStates.length} states</span>
                <Link to="/service-areas" className="pc-areas__all" tabIndex={menu === 'areas' ? 0 : -1}>
                  State requirements <ArrowUpRight size={14} />
                </Link>
              </div>
              <ul className="pc-areas__states" data-lenis-prevent>
                {usStates.map((st) => (
                  <li key={st.code}>
                    <Link to={stateHref(st.name)} tabIndex={menu === 'areas' ? 0 : -1}>
                      <b>{st.code}</b> {st.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ───── Mobile drawer ───── */}
      <div className={`pc-drawer ${isOpen ? 'is-open' : ''}`} ref={drawerRef} aria-hidden={!isOpen} data-lenis-prevent>
        <nav className="pc-drawer__nav" aria-label="Mobile">
          <button type="button" className="pc-drawer__link" onClick={() => setMobileSub((v) => (v === 'services' ? null : 'services'))} aria-expanded={mobileSub === 'services'} tabIndex={isOpen ? 0 : -1}>
            Services <Plus size={26} strokeWidth={1.5} className={`pc-nav__plus ${mobileSub === 'services' ? 'is-open' : ''}`} />
          </button>
          {mobileSub === 'services' && (
            <ol className="pc-drawer__sub">
              {TOP_SERVICES.map((t) => (
                <li key={t.id}><Link to={serviceHref(t.id)} className="is-top">{t.s.title}</Link></li>
              ))}
              {MORE_SERVICES.map((s) => (
                <li key={s.id}><Link to={serviceHref(s.id)}>{s.title}</Link></li>
              ))}
              <li><Link to="/services" className="pc-drawer__all">All services <ArrowUpRight size={16} /></Link></li>
            </ol>
          )}
          <Link to="/portfolio" className="pc-drawer__link" tabIndex={isOpen ? 0 : -1}>Projects</Link>
          <button type="button" className="pc-drawer__link" onClick={() => setMobileSub((v) => (v === 'areas' ? null : 'areas'))} aria-expanded={mobileSub === 'areas'} tabIndex={isOpen ? 0 : -1}>
            Areas Covered <Plus size={26} strokeWidth={1.5} className={`pc-nav__plus ${mobileSub === 'areas' ? 'is-open' : ''}`} />
          </button>
          {mobileSub === 'areas' && (
            <ol className="pc-drawer__sub">
              {CITIES.map((c) => (
                <li key={c.slug}><Link to={`/structural-engineer/${c.slug}`}>{c.city}, TX</Link></li>
              ))}
              {usStates.map((st) => (
                <li key={st.code}><Link to={stateHref(st.name)}><span className="pc-mega__num">{st.code}</span>{st.name}</Link></li>
              ))}
              <li><Link to="/service-areas" className="pc-drawer__all">State requirements <ArrowUpRight size={16} /></Link></li>
            </ol>
          )}
          {navItems.slice(1).map(({ to, label }) => (
            <Link key={to} to={to} className="pc-drawer__link" tabIndex={isOpen ? 0 : -1}>{label}</Link>
          ))}

          <div className="pc-drawer__cta">
            <button type="button" className="pc-btn pc-btn--accent" tabIndex={isOpen ? 0 : -1} onClick={() => { setIsOpen(false); onOpenProposal(); }}>
              Get a Proposal <span className="pc-btn__icon"><ArrowRight size={16} strokeWidth={2} /></span>
            </button>
            <button type="button" className="pc-btn pc-btn--ghost-light" tabIndex={isOpen ? 0 : -1} onClick={() => { setIsOpen(false); onOpenConsultation(); }}>
              Schedule a Consultation
            </button>
            <a href="tel:+18322346456" className="pc-drawer__phone" tabIndex={isOpen ? 0 : -1}>
              <span className="pc-live" /> (832) 234-6456
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
