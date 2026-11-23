import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap';
import { guardContrast } from './contrastGuard';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ROUTE_LABELS = [
  ['/services', 'Services'],
  ['/portfolio', 'Projects'],
  ['/about', 'About'],
  ['/founder', 'Leadership'],
  ['/career', 'Careers'],
  ['/blog', 'Insights'],
  ['/faq', 'FAQ'],
  ['/pricing', 'Pricing'],
  ['/service-areas', 'Service Areas'],
  ['/industries', 'Industries'],
  ['/structural-engineer', 'Local Engineering'],
  ['/privacy-policy', 'Privacy'],
  ['/terms-conditions', 'Terms'],
  ['/refund-policy', 'Refunds'],
];

const labelFor = (path) => {
  if (path === '/') return 'Home';
  const hit = ROUTE_LABELS.find(([p]) => path.startsWith(p));
  return hit ? hit[1] : 'PRIMECOST';
};

/* ------------------------------------------------------------------ */
/* Scroll-driven reveals, declared with data-attributes in the markup  */
/* ------------------------------------------------------------------ */
function scanAndAnimate(root) {
  const vh = window.innerHeight;

  // Masked word / line rise
  root.querySelectorAll('[data-split]').forEach((el) => {
    const targets = el.querySelectorAll('.rv-w > span, .rv-line > span');
    if (!targets.length) return;
    const delay = parseFloat(el.dataset.delay || '0');
    gsap.fromTo(
      targets,
      { yPercent: 110, y: 0 },
      {
        yPercent: 0,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.045,
        delay,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });

  // Fade + rise blocks (staggered when grouped)
  const reveals = gsap.utils.toArray(root.querySelectorAll('[data-reveal]'));
  ScrollTrigger.batch(reveals, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.08,
        delay: parseFloat(batch[0]?.dataset.delay || '0'),
      }),
  });

  // Rounded clip reveal for media
  root.querySelectorAll('[data-clip]').forEach((el) => {
    const r = el.dataset.clip || '28';
    const img = el.querySelector('img, video');
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    tl.fromTo(
      el,
      { clipPath: `inset(100% 0% 0% 0% round ${r}px)` },
      { clipPath: `inset(0% 0% 0% 0% round ${r}px)`, duration: 1.4, ease: 'expo.inOut' },
    );
    if (img) tl.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0);
  });

  // Parallax
  root.querySelectorAll('[data-parallax]').forEach((el) => {
    const s = parseFloat(el.dataset.parallax || '0.15');
    gsap.fromTo(
      el,
      { yPercent: -s * 100 },
      {
        yPercent: s * 100,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  // Counters
  root.querySelectorAll('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end,
      duration: 2,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.v).toString(); },
    });
  });

  // Words brighten while scrolling through a paragraph
  root.querySelectorAll('[data-scrub-words]').forEach((el) => {
    const words = el.querySelectorAll('.sw');
    gsap.fromTo(
      words,
      { opacity: 0.14 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
      },
    );
  });

  // Legacy pages: gentle entrance for sections below the fold
  if (!root.querySelector('.pc-home')) {
    root.querySelectorAll('main section, main > div > section').forEach((sec) => {
      if (sec.getBoundingClientRect().top < vh * 0.9) return;
      gsap.from(sec, {
        opacity: 0,
        y: 48,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: sec, start: 'top 92%', once: true },
      });
    });
  }
}

/* ------------------------------------------------------------------ */

export default function MotionLayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const curtainRef = useRef(null);
  const labelRef = useRef(null);
  const countRef = useRef(null);
  const cursorRef = useRef(null);
  const lenisRef = useRef(null);
  const busy = useRef(false);
  const first = useRef(true);
  const routePath = useRef(location.pathname);

  /* Smooth scroll (Lenis) wired into GSAP's ticker */
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
    lenisRef.current = lenis;
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  /* Route change: reset scroll, play curtain out, (re)build scroll animations */
  useIsoLayoutEffect(() => {
    routePath.current = location.pathname;
    const curtain = curtainRef.current;
    const reduce = prefersReducedMotion();
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);

    if (labelRef.current) labelRef.current.textContent = labelFor(location.pathname);

    const isFirst = first.current;
    first.current = false;
    const html = document.documentElement;
    const playIntro = isFirst && html.classList.contains('pc-intro');

    let tl;
    if (curtain && !reduce) {
      if (playIntro) {
        const counter = { v: 0 };
        tl = gsap.timeline({
          onComplete: () => {
            html.classList.remove('pc-intro');
            busy.current = false;
            window.dispatchEvent(new Event('pc:ready'));
          },
        });
        gsap.set(curtain, { yPercent: 0 });
        tl.to(counter, {
          v: 100,
          duration: 1.3,
          ease: 'power2.inOut',
          onUpdate: () => { if (countRef.current) countRef.current.textContent = String(Math.round(counter.v)); },
        }).to(curtain, { yPercent: -100, duration: 1.1, ease: 'expo.inOut' }, '+=0.1');
      } else if (!isFirst) {
        tl = gsap.timeline({
          onComplete: () => {
            busy.current = false;
            window.dispatchEvent(new Event('pc:ready'));
          },
        });
        gsap.set(curtain, { yPercent: 0 });
        if (countRef.current) countRef.current.textContent = '';
        tl.to(curtain, { yPercent: -100, duration: 1, ease: 'expo.inOut', delay: 0.15 });
      } else {
        gsap.set(curtain, { yPercent: 100 });
        html.classList.remove('pc-intro');
        requestAnimationFrame(() => window.dispatchEvent(new Event('pc:ready')));
      }
    } else {
      html.classList.remove('pc-intro');
      requestAnimationFrame(() => window.dispatchEvent(new Event('pc:ready')));
    }
    window.__pcReadyAt = performance.now() + (tl ? tl.duration() * 1000 * 0.55 : 0);

    // Build scroll animations once the new page is in the DOM
    const ctx = gsap.context(() => {});
    const raf = requestAnimationFrame(() => {
      guardContrast(document.body);
      ctx.add(() => {
        if (reduce) {
          document.querySelectorAll('[data-reveal],[data-clip]').forEach((el) => {
            el.style.opacity = 1;
            el.style.transform = 'none';
            el.style.clipPath = 'none';
          });
          return;
        }
        scanAndAnimate(document.body);
      });
      ScrollTrigger.refresh();
    });

    // Fonts/images can shift layout — refresh triggers when they settle
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    document.fonts?.ready?.then(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', onLoad);
      tl?.kill();
      ctx.revert();
    };
  }, [location.pathname]);

  /* Curtain IN on internal link clicks, then navigate */
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const raw = a.getAttribute('href') || '';
      if (!raw.startsWith('/') || raw.startsWith('//')) return; // external, tel:, mailto:, #hash
      const url = new URL(raw, window.location.origin);
      // Compare with the router's own location (not window.location) so this also
      // works when the app runs under a sub-path or an in-memory router.
      if (url.pathname === routePath.current) return; // same page — let the Link handle it
      if (prefersReducedMotion() || !curtainRef.current) return;
      e.preventDefault();
      if (busy.current) return;
      busy.current = true;
      // Safety net: never leave the curtain covering the page
      window.setTimeout(() => {
        if (!busy.current) return;
        busy.current = false;
        gsap.to(curtainRef.current, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' });
      }, 2500);
      if (labelRef.current) labelRef.current.textContent = labelFor(url.pathname);
      if (countRef.current) countRef.current.textContent = '';
      gsap.fromTo(
        curtainRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.75,
          ease: 'expo.inOut',
          onComplete: () => navigate(url.pathname + url.search + url.hash),
        },
      );
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [navigate]);

  /* Custom cursor + magnetic elements */
  useEffect(() => {
    const el = cursorRef.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion()) return undefined;
    const dot = el.querySelector('.pc-cursor__dot');
    const ring = el.querySelector('.pc-cursor__ring');
    const label = el.querySelector('.pc-cursor__label');
    const pos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let raf;
    let magnet = null;

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.16;
      ringPos.y += (pos.y - ringPos.y) * 0.16;
      dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const mx = (e.clientX - (r.left + r.width / 2)) * 0.3;
        const my = (e.clientY - (r.top + r.height / 2)) * 0.35;
        gsap.to(magnet, { x: mx, y: my, duration: 0.6, ease: 'power3.out' });
      }
    };

    const onOver = (e) => {
      const t = e.target.closest?.('[data-cursor], a, button, [role="slider"], input, textarea, select');
      el.classList.toggle('is-hover', !!t);
      const text = t?.closest('[data-cursor]')?.dataset.cursor;
      el.classList.toggle('is-label', !!text);
      label.textContent = text || '';
      const m = e.target.closest?.('[data-magnetic]');
      if (m !== magnet) {
        if (magnet) gsap.to(magnet, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
        magnet = m;
      }
    };
    const onLeaveWin = () => el.classList.add('is-hidden');
    const onEnterWin = () => el.classList.remove('is-hidden');

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeaveWin);
    document.documentElement.addEventListener('mouseenter', onEnterWin);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeaveWin);
      document.documentElement.removeEventListener('mouseenter', onEnterWin);
    };
  }, []);

  return (
    <>
      <div className="pc-curtain" ref={curtainRef} aria-hidden="true">
        <div className="pc-curtain__label">
          <span className="pc-live" />
          <span ref={labelRef}>PRIMECOST</span>
        </div>
        <span className="pc-curtain__brand">PRIMECOST · Engineering Services</span>
        <span className="pc-curtain__count" ref={countRef} />
      </div>
      <div className="pc-cursor" ref={cursorRef} aria-hidden="true">
        <div className="pc-cursor__ring"><span className="pc-cursor__label" /></div>
        <div className="pc-cursor__dot" />
      </div>
    </>
  );
}
