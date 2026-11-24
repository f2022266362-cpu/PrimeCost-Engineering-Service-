import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ArrowLeft, Star, MapPin, Check } from 'lucide-react';
import SchemaManager from '../components/SchemaManager';
import Photo from '../components/ui/Photo';
import SplitWords, { ScrubWords } from '../motion/SplitWords';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../motion/gsap';

import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faq';
import { partners, certifications } from '../data/partners';
import { serviceHref } from '../data/serviceLinks';
import { photos } from '../data/media';
import cityPages from '../data/cityPages';
import { usStates, stateHref } from '../data/usStates';

const TOP = [
  { id: 'structural-engineering', photo: photos.steelBridge, tone: 'sky' },
  { id: 'architectural-design', photo: photos.whiteTerraces, tone: 'volt' },
  { id: 'mep-engineering', photo: photos.officeNight, tone: 'spark' },
  { id: 'civil-engineering', photo: photos.forestBridge, tone: 'ink' },
].map((t) => ({ ...t, s: services.find((x) => x.id === t.id) })).filter((t) => t.s);

const MORE = services.filter((s) => !TOP.some((t) => t.id === s.id));
const CITIES = Object.entries(cityPages).map(([slug, c]) => ({ slug, city: c.city }));

const STAGES = [
  { k: '01', t: 'Survey & scope', d: 'We log your drawings, site conditions and the code path before a single line is drawn.', photo: photos.deskDrafting },
  { k: '02', t: 'Design & calculate', d: 'Load paths, member sizing and MEP layouts are modelled together — so nothing clashes later.', photo: photos.structureLines },
  { k: '03', t: 'Check & seal', d: 'An independent engineer reviews the set, then a PE licensed in your state signs and stamps it.', photo: photos.facadeGrid },
  { k: '04', t: 'Permit & build', d: 'We answer plan-review comments with the jurisdiction until the permit is issued.', photo: photos.blueTower },
];

const PROCESS = [
  { step: '01', title: 'Consultation & Scoping', desc: 'Our intake team logs your drawings and schedules a scoping call to map tolerances and the code path.' },
  { step: '02', title: 'Design & Calculations', desc: 'Structural and MEP designers develop member sizing, load paths and system layouts in a coordinated Revit model.' },
  { step: '03', title: 'Independent QA / QC', desc: 'A senior checking engineer runs clash detection and an independent review before anything is sealed.' },
  { step: '04', title: 'State-Licensed Seal', desc: 'A Professional Engineer licensed in your state reviews, signs and stamps the permit set.' },
  { step: '05', title: 'Permit Support', desc: 'Our permitting desk answers plan-review comments and handles resubmittals with the jurisdiction.' },
];

const MARQUEE = ['Structural', 'Architectural', 'MEP', 'Civil', 'Geotechnical', 'BIM & CAD', 'Permit Correction', 'Sign & Stamp', 'Inspection', 'Surveying'];

const titleCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function Spark() {
  return (
    <svg className="pc-spark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0Z" />
    </svg>
  );
}

export default function Home({ onOpenConsultation, onOpenProposal }) {
  const root = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stage, setStage] = useState(0);
  const turnaround = services[0].timeline.replace(/days/i, '').replace(/\s*-\s*/, '–').trim();

  /* ---------------- Motion choreography ---------------- */
  useEffect(() => {
    const el = root.current;
    if (!el) return undefined;
    const reduce = prefersReducedMotion();
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set('.pc-hero .rv-w > span', { yPercent: 0, y: 0 });
        gsap.set('.pc-hero [data-hero], .pc-hero__float', { opacity: 1, y: 0 });
        return;
      }
      const wait = Math.max(0, ((window.__pcReadyAt || 0) - performance.now()) / 1000);

      /* HERO intro */
      gsap.timeline({ delay: wait })
        .fromTo('.pc-hero__title .rv-w > span', { yPercent: 115, y: 0 }, { yPercent: 0, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.06 })
        .fromTo('.pc-hero [data-hero]', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, 0.35)
        .fromTo('.pc-hero__window-inner', { clipPath: 'inset(100% 0% 0% 0% round 40px)' }, { clipPath: 'inset(0% 0% 0% 0% round 40px)', duration: 1.6, ease: 'expo.inOut' }, 0.2)
        .fromTo('.pc-hero__window-inner img', { scale: 1.35 }, { scale: 1.08, duration: 2.2, ease: 'expo.out' }, 0.3)
        .fromTo('.pc-hero__float', { opacity: 0, y: 40, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'back.out(1.6)', stagger: 0.12 }, 1.1);

      /* HERO window opens to full bleed */
      gsap.fromTo('.pc-hero__window', { clipPath: 'inset(0% 4% 0% 4% round 40px)' }, {
        clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none',
        scrollTrigger: { trigger: '.pc-hero__window', start: 'top 85%', end: 'top 5%', scrub: true },
      });
      gsap.to('.pc-hero__bgimg img', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '.pc-hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.pc-hero__window-inner img', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.pc-hero__window', start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.to('.pc-hero__float--a', { yPercent: -60, ease: 'none', scrollTrigger: { trigger: '.pc-hero__window', start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.to('.pc-hero__float--b', { yPercent: -120, ease: 'none', scrollTrigger: { trigger: '.pc-hero__window', start: 'top bottom', end: 'bottom top', scrub: true } });

      /* Tape marquee drifts with scroll */
      gsap.fromTo('.pc-tape--a .pc-tape__inner', { xPercent: 0 }, { xPercent: -10, ease: 'none', scrollTrigger: { trigger: '.pc-tapes', start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.fromTo('.pc-tape--b .pc-tape__inner', { xPercent: -10 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: '.pc-tapes', start: 'top bottom', end: 'bottom top', scrub: true } });

      /* SERVICES — stacked cards (desktop/tablet): earlier cards shrink + dim as the next covers them */
      mm.add('(min-width: 900px)', () => {
        const cards = gsap.utils.toArray('.pc-deck__card');
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          gsap.fromTo(card, { scale: 1, filter: 'brightness(1)' }, {
            scale: 0.92 + i * 0.015,
            filter: 'brightness(0.86)',
            ease: 'none',
            scrollTrigger: { trigger: cards[i + 1], start: 'top 85%', end: 'top 25%', scrub: true },
          });
        });
        gsap.utils.toArray('.pc-deck__photo img').forEach((img) => {
          gsap.fromTo(img, { scale: 1.2 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'top 30%', scrub: true } });
        });
      });

      /* DRAWING → BUILDING — pinned photo story */
      mm.add('(min-width: 900px)', () => {
        const frames = gsap.utils.toArray('.pc-stage__shot');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.pc-stage',
            start: 'top top',
            end: '+=260%',
            pin: '.pc-stage__pin',
            scrub: 0.8,
            onUpdate: (st) => setStage(Math.min(STAGES.length - 1, Math.floor(st.progress * STAGES.length * 0.999))),
          },
        });
        frames.forEach((f, i) => {
          if (i === 0) return;
          tl.fromTo(f, { clipPath: 'circle(0% at 70% 60%)' }, { clipPath: 'circle(130% at 70% 60%)', duration: 1, ease: 'power2.inOut' }, i - 0.6);
          tl.fromTo(f.querySelector('img'), { scale: 1.3 }, { scale: 1, duration: 1, ease: 'none' }, i - 0.6);
        });
        tl.fromTo('.pc-stage__progress i', { scaleX: 0 }, { scaleX: 1, duration: frames.length - 0.6, ease: 'none' }, 0);
        return () => tl.scrollTrigger?.kill();
      });

      /* PROJECTS — horizontal gallery (pinned on desktop) */
      mm.add('(min-width: 900px)', () => {
        const track = el.querySelector('.pc-hgal__track');
        if (!track) return undefined;
        const dist = () => track.scrollWidth - window.innerWidth + 64;
        const tween = gsap.to(track, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: { trigger: '.pc-hgal', start: 'top top', end: () => `+=${dist()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true },
        });
        gsap.utils.toArray('.pc-hcard__media img').forEach((img) => {
          gsap.fromTo(img, { xPercent: -8 }, {
            xPercent: 8, ease: 'none',
            scrollTrigger: { trigger: img.closest('.pc-hcard'), containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
          });
        });
        gsap.to('.pc-hgal__bar i', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.pc-hgal', start: 'top top', end: () => `+=${dist()}`, scrub: true } });
        return undefined;
      });

      /* AREAS — big number + pills */
      gsap.fromTo('.pc-areas-sec__pill', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.05, duration: 0.9, ease: 'expo.out',
        scrollTrigger: { trigger: '.pc-areas-sec__pills', start: 'top 85%', once: true },
      });

      /* PROCESS — progress rail + active steps */
      gsap.fromTo('.pc-steps__rail i', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.pc-steps', start: 'top 60%', end: 'bottom 60%', scrub: true } });
      gsap.utils.toArray('.pc-step').forEach((s) => {
        ScrollTrigger.create({ trigger: s, start: 'top 62%', end: 'bottom 62%', toggleClass: { targets: s, className: 'is-active' } });
      });

      /* STATS tiles float up at different speeds */
      gsap.utils.toArray('.pc-bento__tile').forEach((t, i) => {
        gsap.fromTo(t, { y: 60 + (i % 3) * 30 }, { y: 0, ease: 'none', scrollTrigger: { trigger: '.pc-bento', start: 'top bottom', end: 'center center', scrub: true } });
      });
    }, el);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 8000);
    return () => clearInterval(t);
  }, []);

  const tm = testimonials[activeTestimonial];
  const prevT = () => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);
  const nextT = () => setActiveTestimonial((p) => (p + 1) % testimonials.length);

  return (
    <div className="pc-home" ref={root}>
      <SchemaManager
        title="Structural Engineering & PE Stamped Drawings | PRIMECOST"
        description="Houston structural engineering firm licensed in 49 states: PE-stamped drawings, MEP, architectural design and permit corrections. Quotes in 24 hours."
        schemaType="FAQ"
        schemaData={{ questions: faqs }}
      />

      {/* ───────────── 1. HERO (ink stage) ───────────── */}
      <section className="pc-hero" aria-labelledby="pc-hero-title">
        <div className="pc-hero__bgimg" aria-hidden="true">
          <Photo photo={photos.cityDown} width={1800} sizes="65vw" eager alt="" />
        </div>
        <div className="pc-hero__glow" aria-hidden="true" />
        <div className="pc-wrap">
          <div className="pc-hero__top">
            <span className="pc-chip pc-chip--dark" data-hero><span className="pc-live" /> PE-stamped drawings in 49 states</span>
            <span className="pc-hero__meta pc-mono" data-hero>Structural · Civil · MEP · Architecture</span>
          </div>

          <h1 id="pc-hero-title" className="pc-hero__title">
            <span className="sr-only">Licensed Structural &amp; MEP Engineering — PE-Stamped Drawings in 49 States. </span>
            <span className="pc-hero__l1" aria-hidden="true"><SplitWords text="We engineer" /></span>
            <span className="pc-hero__l2" aria-hidden="true">
              <span className="rv-w"><span className="serif-i pc-hero__serif">structures</span></span>
            </span>
            <span className="pc-hero__l3" aria-hidden="true"><SplitWords text="built to" /> <span className="rv-w"><span className="pc-hero__hl">last.</span></span></span>
          </h1>

          <div className="pc-hero__row">
            <p className="pc-hero__lede" data-hero>
              A licensed engineering practice delivering sealed structural, MEP, civil and architectural
              drawings for contractors, architects and developers — coordinated in-house and prepared to
              clear plan review.
            </p>
            <div className="pc-hero__cta" data-hero>
              <button type="button" className="pc-btn pc-btn--accent" onClick={onOpenProposal} data-magnetic>
                Get a Proposal <span className="pc-btn__icon"><ArrowUpRight size={18} strokeWidth={2} /></span>
              </button>
              <button type="button" className="pc-btn pc-btn--ghost-light" onClick={onOpenConsultation}>
                Book a Consultation
              </button>
            </div>
            <div className="pc-hero__badge" data-hero aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs><path id="pc-badge-circle" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1 -92 0" /></defs>
                <text><textPath href="#pc-badge-circle">LICENSED · INSURED · PE STAMPED · 49 STATES ·</textPath></text>
              </svg>
              <Spark />
            </div>
          </div>
        </div>

        <div className="pc-hero__window" data-cursor="Scroll">
          <div className="pc-hero__window-inner">
            <Photo photo={photos.glassCorner} width={1800} sizes="100vw" eager />
          </div>

          <div className="pc-hero__float pc-hero__float--a">
            <span className="pc-hero__float-img"><Photo photo={photos.deskDrafting} width={900} sizes="300px" alt="" /></span>
            <div className="pc-hero__mini-cap">
              <span className="pc-mono"><span className="pc-live" /> Sealed &amp; stamped</span>
              <strong>Permit-ready sets</strong>
            </div>
          </div>

          <div className="pc-hero__float pc-hero__float--b">
            <span className="pc-mono">Typical turnaround</span>
            <strong>{turnaround} <small>days</small></strong>
            <span className="pc-hero__bar"><i /></span>
          </div>
        </div>
      </section>

      {/* ───────────── 2. TAPES ───────────── */}
      <section className="pc-tapes" aria-label="Disciplines and clients">
        <div className="pc-tape pc-tape--a">
          <div className="pc-tape__inner">
            <div className="pc-tape__track">
              {[0, 1].map((k) => (
                <div className="pc-tape__set" key={k} aria-hidden={k === 1}>
                  {MARQUEE.map((m) => <span key={m} className="pc-tape__item">{m}<Spark /></span>)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pc-tape pc-tape--b">
          <div className="pc-tape__inner">
            <div className="pc-tape__track is-reverse">
              {[0, 1].map((k) => (
                <div className="pc-tape__set" key={k} aria-hidden={k === 1}>
                  {partners.map((p) => <span key={p} className="pc-tape__client">{p}<span className="pc-tape__dot" /></span>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 3. STATEMENT ───────────── */}
      <section className="pc-section pc-statement">
        <div className="pc-wrap">
          <span className="pc-eyebrow" data-reveal>The practice</span>
          <p className="pc-statement__text" data-scrub-words>
            <ScrubWords text="We coordinate structure," />{' '}
            <span className="pc-inline-img"><Photo photo={photos.bridgeCables} width={900} sizes="180px" alt="" /></span>{' '}
            <ScrubWords text="building systems and permitting under one roof — so the set you submit is complete, consistent" />{' '}
            <span className="pc-inline-img is-round"><Photo photo={photos.deskDrafting} width={900} sizes="120px" alt="" /></span>{' '}
            <ScrubWords text="and ready to build." />
          </p>
          <div className="pc-statement__foot" data-reveal>
            <Link to="/about" className="pc-link">About the firm <ArrowRight size={16} /></Link>
            <ul className="pc-statement__creds">
              {certifications.map((c) => (
                <li key={c.name}><strong>{c.name}</strong><span>{c.desc}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── 4. NUMBERS BENTO ───────────── */}
      <section className="pc-section pc-bento-sec">
        <div className="pc-wrap">
          <div className="pc-bento">
            <div className="pc-bento__tile is-sky">
              <span className="pc-mono">PE licensure</span>
              <strong><span data-count="49">49</span></strong>
              <p>states where our engineers seal drawings</p>
            </div>
            <div className="pc-bento__tile is-photo">
              <Photo photo={photos.orangeTowers} width={1800} sizes="(max-width: 900px) 100vw, 50vw" data-parallax="0.08" />
              <span className="pc-chip"><span className="pc-live" /> Houston &amp; Sheridan offices</span>
            </div>
            <div className="pc-bento__tile is-volt">
              <span className="pc-mono">Disciplines in-house</span>
              <strong><span data-count={services.length}>{services.length}</span></strong>
              <p>coordinated in one model</p>
            </div>
            <div className="pc-bento__tile is-ink">
              <span className="pc-mono">Structural turnaround</span>
              <strong>{turnaround}<small> days</small></strong>
              <p>typical, from scoping call to sealed set</p>
            </div>
            <div className="pc-bento__tile is-spark">
              <span className="pc-mono">Starting from</span>
              <strong>{services[0].startingFrom}</strong>
              <p>published, fixed-scope structural packages</p>
              <Link to="/pricing" className="pc-link">See pricing <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 5. SERVICES — stacked deck ───────────── */}
      <section className="pc-section pc-deck-sec" id="services">
        <div className="pc-wrap">
          <div className="pc-head">
            <div>
              <span className="pc-eyebrow" data-reveal>Expertise</span>
              <h2 className="pc-h2" data-split>
                <SplitWords text="Every discipline a permit set needs —" />{' '}
                <span className="serif-i"><SplitWords text="delivered as one." /></span>
              </h2>
            </div>
            <Link to="/services" className="pc-btn pc-btn--outline" data-reveal>
              All {services.length} services <span className="pc-btn__icon"><ArrowUpRight size={16} /></span>
            </Link>
          </div>

          <ol className="pc-deck">
            {TOP.map((t, i) => (
              <li key={t.id} className={`pc-deck__card is-${t.tone}`} style={{ '--i': i }}>
                <Link to={serviceHref(t.id)} className="pc-deck__link" data-cursor="Open">
                  <div className="pc-deck__copy">
                    <span className="pc-deck__num">{String(i + 1).padStart(2, '0')} / {String(TOP.length).padStart(2, '0')}</span>
                    <h3 className="pc-deck__title">{t.s.title}</h3>
                    <p className="pc-deck__desc">{t.s.outcome}</p>
                    <ul className="pc-deck__list">
                      {t.s.deliverables.slice(0, 4).map((d) => <li key={d}><Check size={16} strokeWidth={2.5} /> {d}</li>)}
                    </ul>
                    <div className="pc-deck__foot">
                      <span className="pc-deck__tag">{t.s.timeline}</span>
                      <span className="pc-deck__tag">From {t.s.startingFrom}</span>
                      <span className="pc-deck__go">View service <ArrowUpRight size={18} /></span>
                    </div>
                  </div>
                  <div className="pc-deck__photo">
                    <Photo photo={t.photo} width={1800} sizes="(max-width: 900px) 100vw, 45vw" />
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          <div className="pc-more" data-reveal>
            <div className="pc-more__head">
              <span className="pc-eyebrow">More services</span>
              <Link to="/services" className="pc-link">Compare all <ArrowRight size={16} /></Link>
            </div>
            <ul className="pc-more__grid">
              {MORE.map((s, i) => (
                <li key={s.id}>
                  <Link to={serviceHref(s.id)} className="pc-more__item">
                    <span className="pc-more__n">{String(i + 5).padStart(2, '0')}</span>
                    <span className="pc-more__t">{s.title}</span>
                    <span className="pc-more__p">From {s.startingFrom}</span>
                    <ArrowUpRight size={18} className="pc-more__a" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── 6. DRAWING → BUILDING (pinned photos) ───────────── */}
      <section className="pc-stage" aria-label="From drawing to building">
        <div className="pc-stage__pin">
          <div className="pc-wrap pc-stage__grid">
            <div className="pc-stage__copy">
              <span className="pc-eyebrow is-sky on-dark">From drawing to building</span>
              <h2 className="pc-h2 on-dark">
                What leaves our office <span className="serif-i pc-c-volt">is what gets built.</span>
              </h2>
              <ol className="pc-stage__steps">
                {STAGES.map((s, i) => (
                  <li key={s.k} className={i === stage ? 'is-active' : i < stage ? 'is-done' : ''}>
                    <span className="pc-stage__k">{s.k}</span>
                    <div>
                      <strong>{s.t}</strong>
                      <p>{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="pc-stage__progress"><i /></div>
            </div>
            <div className="pc-stage__frame">
              {STAGES.map((s) => (
                <div key={s.k} className="pc-stage__shot">
                  <Photo photo={s.photo} width={1800} sizes="(max-width: 900px) 100vw, 55vw" />
                </div>
              ))}
              <span className="pc-stage__tag pc-mono">{STAGES[stage].k} · {STAGES[stage].t}</span>
            </div>
            <ol className="pc-stage__mlist">
              {STAGES.map((st) => (
                <li key={st.k} data-reveal>
                  <span className="pc-stage__mimg"><Photo photo={st.photo} width={900} sizes="100vw" /></span>
                  <span className="pc-stage__k">{st.k}</span>
                  <strong>{st.t}</strong>
                  <p>{st.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── 7. PROJECTS (horizontal, sky band) ───────────── */}
      <section className="pc-hgal" id="projects">
        <div className="pc-hgal__inner">
          <div className="pc-wrap pc-hgal__head">
            <div>
              <span className="pc-eyebrow">Selected work</span>
              <h2 className="pc-h2">Projects across Texas <span className="serif-i">and beyond.</span></h2>
            </div>
            <div className="pc-hgal__bar" aria-hidden="true"><i /></div>
          </div>
          <div className="pc-hgal__track">
            {projects.slice(0, 7).map((p) => (
              <Link to="/portfolio" key={p.id} className="pc-hcard" data-cursor="View">
                <div className="pc-hcard__media">
                  <img src={p.image.replace('-900.', '-1800.')} alt={p.name} width="1800" height="1200" loading="lazy" decoding="async" draggable="false" />
                  <span className="pc-hcard__cat">{titleCase(p.category)}</span>
                </div>
                <div className="pc-hcard__body">
                  <div className="pc-hcard__meta pc-mono"><span>{p.location}</span><span>{p.year}</span></div>
                  <h3 className="pc-hcard__title">{p.name}</h3>
                  <p className="pc-hcard__scope">{p.area} · {p.servicesUsed.slice(0, 2).join(' · ')}</p>
                </div>
              </Link>
            ))}
            <Link to="/portfolio" className="pc-hcard pc-hcard--more" data-cursor="All">
              <span className="pc-hcard__more-k pc-mono">Portfolio</span>
              <strong>See all {projects.length} projects</strong>
              <span className="pc-hcard__more-go"><ArrowUpRight size={28} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── 8. AREAS COVERED (spark band) ───────────── */}
      <section className="pc-areas-sec" aria-labelledby="pc-areas-title">
        <div className="pc-wrap pc-areas-sec__grid">
          <div className="pc-areas-sec__left">
            <span className="pc-eyebrow">Areas covered</span>
            <h2 id="pc-areas-title" className="pc-areas-sec__big">
              <span data-count="49">49</span><small>states</small>
            </h2>
            <p className="pc-areas-sec__lede">
              Licensed Professional Engineers seal drawings for projects nationwide — with local engineers
              across Greater Houston.
            </p>
            <Link to="/service-areas" className="pc-btn pc-btn--primary" data-magnetic>
              See every state <span className="pc-btn__icon"><ArrowRight size={16} /></span>
            </Link>
          </div>
          <div className="pc-areas-sec__right">
            <div className="pc-areas-sec__photo" data-clip="28">
              <Photo photo={photos.laSunset} width={1800} sizes="(max-width: 900px) 100vw, 50vw" />
              <span className="pc-chip"><MapPin size={14} /> Greater Houston</span>
            </div>
            <ul className="pc-areas-sec__pills">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/structural-engineer/${c.slug}`} className="pc-areas-sec__pill">
                    {c.city} <ArrowUpRight size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pc-wrap">
          <div className="pc-areas-sec__states">
            <div className="pc-areas-sec__states-head">
              <span className="pc-eyebrow">Every state we serve</span>
              <Link to="/service-areas" className="pc-link">State-by-state requirements <ArrowRight size={16} /></Link>
            </div>
            <ul>
              {usStates.map((st) => (
                <li key={st.code}>
                  <Link to={stateHref(st.name)} title={st.name} className="pc-areas-sec__state">
                    <b>{st.code}</b><span>{st.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── 9. PROCESS ───────────── */}
      <section className="pc-section pc-process">
        <div className="pc-wrap pc-process__grid">
          <div className="pc-process__aside">
            <span className="pc-eyebrow">Method</span>
            <h2 className="pc-h2" data-split>
              <SplitWords text="Five steps from scoping call" />{' '}
              <span className="serif-i"><SplitWords text="to sealed set." /></span>
            </h2>
            <p className="pc-process__lede" data-reveal>Every project follows the same documented workflow, with an independent check before any seal is applied.</p>
            <button type="button" className="pc-btn pc-btn--primary" onClick={onOpenConsultation} data-reveal data-magnetic>
              Start with a call <span className="pc-btn__icon"><ArrowRight size={16} /></span>
            </button>
          </div>
          <div className="pc-steps">
            <span className="pc-steps__rail" aria-hidden="true"><i /></span>
            <ol className="pc-steps__ol">
              {PROCESS.map((p) => (
                <li key={p.step} className="pc-step">
                  <span className="pc-step__dot" aria-hidden="true" />
                  <span className="pc-step__num">{p.step}</span>
                  <div>
                    <h3 className="pc-step__title">{p.title}</h3>
                    <p className="pc-step__desc">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── 10. TESTIMONIALS (volt card) ───────────── */}
      <section className="pc-voice" aria-roledescription="carousel" aria-label="Client testimonials">
        <div className="pc-voice__card">
          <div className="pc-voice__top">
            <span className="pc-eyebrow">Client voices</span>
            <div className="pc-voice__nav">
              <button type="button" onClick={prevT} aria-label="Previous testimonial"><ArrowLeft size={18} /></button>
              <span className="pc-mono">{String(activeTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
              <button type="button" onClick={nextT} aria-label="Next testimonial"><ArrowRight size={18} /></button>
            </div>
          </div>
          <figure className="pc-voice__fig" key={activeTestimonial} aria-live="polite">
            <div className="pc-voice__stars" role="img" aria-label={`${tm.stars} out of 5 stars`}>
              {Array.from({ length: tm.stars }).map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
            </div>
            <blockquote><p className="pc-voice__quote">“{tm.quote}”</p></blockquote>
            <figcaption>
              <span className="pc-voice__avatar">{tm.avatar}</span>
              <span>
                <span className="pc-voice__name">{tm.name}</span>
                <span className="pc-voice__role">{tm.role}, {tm.company}</span>
              </span>
            </figcaption>
          </figure>
          <div className="pc-voice__dots">
            {testimonials.map((_, i) => (
              <button key={i} type="button" aria-label={`Show testimonial ${i + 1}`} className={i === activeTestimonial ? 'is-on' : ''} onClick={() => setActiveTestimonial(i)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
