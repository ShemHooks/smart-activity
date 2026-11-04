"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Compass,
  Factory,
  HeartPulse,
  Hotel,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Plane,
  School,
  ShoppingBag,
  Utensils,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { copy, partnerOrganizations, type Locale } from "@/lib/content";

const anchors = [
  "home",
  "about",
  "services",
  "industries",
  "partners",
  "contact",
];
const sectorIcons: LucideIcon[] = [
  Landmark,
  HeartPulse,
  Network,
  Building2,
  School,
  Factory,
  Utensils,
  Hotel,
  Building2,
  ShoppingBag,
  Plane,
  School,
];
const valueImages = [
  "/images/values/trust.png",
  "/images/values/innovation.png",
  "/images/values/results.png",
  "/images/values/quality.png",
  "/images/values/collaboration.png",
];
const serviceNums = ["01", "02", "03", "04", "05"];
const serviceVideos = [
  "/videos/services/recruitment.mp4",
  "/videos/services/telecommunications.mp4",
  "/videos/services/project-management.mp4",
  "/videos/services/marketing-design.mp4",
  "/videos/services/financial-consulting.mp4",
];

const sectorImages = [
  "/images/industries/government.jpg",
  "/images/industries/healthcare.jpg",
  "/images/industries/telecommunications.jpg",
  "/images/industries/contracting.jpg",
  "/images/industries/universities.jpg",
  "/images/industries/factories.jpg",
  "/images/industries/restaurants.jpg",
  "/images/industries/hotels.jpg",
  "/images/industries/real-estate.jpg",
  "/images/industries/shopping-malls.jpg",
  "/images/industries/airports.jpg",
  "/images/industries/schools.jpg",
];

export default function Site() {
  const [locale, setLocale] = useState<Locale>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [service, setService] = useState(0);
  const [valuesExpanded, setValuesExpanded] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const rootRef = useRef<HTMLDivElement>(null);
  const t = copy[locale];
  const rtl = locale === "ar";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [locale, rtl]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.15,
        },
      );
      gsap.to(".hero-orbit", {
        rotation: 360,
        duration: 85,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
      gsap.fromTo(
        ".nav-logo",
        { scale: 0.7, opacity: 0, rotation: -18 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.1,
          ease: "back.out(1.7)",
        },
      );
      gsap.to(".hero-mark", {
        y: -18,
        rotation: 3,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });
      gsap.to(".hero-art", {
        yPercent: 17,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [locale]);

  function sendInquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Smart Activity Inquiry — ${form.service || t.allServices}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service || t.allServices}\n\n${form.message}`;
    window.location.href = `mailto:customersupport@smartactivity.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div ref={rootRef} className="site" dir={rtl ? "rtl" : "ltr"}>
      <header className="site-header">
        <a
          href="#home"
          className="brand"
          aria-label="Smart Activity home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            className="nav-logo"
            src="/images/sa-mark.png"
            alt="Smart Activity SA mark"
            width={56}
            height={56}
            priority
          />
          <span className="brand-name">
            SMART <em>ACTIVITY</em>
            <small>FOR BUSINESS SOLUTIONS</small>
          </span>
        </a>
        <nav
          className={`nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {anchors.map((id, i) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {t.nav[i]}
            </a>
          ))}
          <button
            className="mobile-lang"
            onClick={() => {
              setLocale(rtl ? "en" : "ar");
              setMenuOpen(false);
            }}
          >
            {t.switchLabel}
          </button>
        </nav>
        <div className="header-actions">
          <button
            className="lang-btn"
            onClick={() => setLocale(rtl ? "en" : "ar")}
            aria-label="Change language"
          >
            {t.switchLabel}
          </button>
          <a className="header-cta" href="#contact">
            {t.inquiry}
            <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            poster="/images/riyadh-hero-poster.jpg"
          >
            <source src="/videos/riyadh-corporate-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-shade" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-art" aria-hidden="true">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-core">
              <Image
                src="/images/sa-mark.png"
                alt=""
                width={360}
                height={360}
                priority
                className="hero-mark"
              />
            </div>
            <div className="art-glow" />
            <div className="hero-particles">
              {Array.from({ length: 18 }, (_, i) => (
                <i key={i} style={{ "--i": i } as React.CSSProperties} />
              ))}
            </div>
          </div>
          <div className="container hero-content">
            <div className="eyebrow hero-reveal">
              <span className="orange-line" />
              {t.eyebrow}
            </div>
            <h1 className="hero-title hero-reveal">
              <span>{t.hero1}</span>
              <strong>{t.hero2}</strong>
            </h1>
            <p className="hero-description hero-reveal">{t.heroBody}</p>
            <div className="hero-buttons hero-reveal">
              <a className="btn btn-primary" href="#services">
                {t.explore}
                <ArrowUpRight size={18} />
              </a>
              <a className="btn btn-ghost" href="#about">
                {t.discover}
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>{t.scroll}</span>
            <div className="scroll-line" />
            <span>01 — 07</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-top reveal">
              <span className="eyebrow">{t.aboutLabel}</span>
              <span className="section-marker">SMART ACTIVITY / 2026</span>
            </div>
            <div className="about-layout">
              <div className="reveal">
                <h2 className="section-title">
                  {t.aboutTitle}
                  <br />
                  <em>{t.aboutTitle2}</em>
                </h2>
                <div className="about-visual about-video-wrap">
                  <video
                    className="about-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/about-company-poster.jpg"
                    aria-hidden="true"
                  >
                    <source src="/videos/about-company.mp4" type="video/mp4" />
                  </video>
                  <div className="about-video-shade" aria-hidden="true" />
                </div>
              </div>
              <div className="about-right reveal">
                <p className="lead">{t.aboutText}</p>
                <p className="muted">{t.aboutText2}</p>
                <div className="statement">
                  <span>01</span>
                  <div>
                    <h3>{t.vision}</h3>
                    <p>{t.visionText}</p>
                  </div>
                </div>
                <div className="statement">
                  <span>02</span>
                  <div>
                    <h3>{t.mission}</h3>
                    <p>{t.missionText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-top reveal">
              <span className="eyebrow">{t.servicesLabel}</span>
              <span className="section-marker">05 CORE DISCIPLINES</span>
            </div>
            <div className="section-heading reveal">
              <h2 className="section-title">
                {t.servicesTitle}
                <br />
                <em>{t.servicesTitle2}</em>
              </h2>
              <p>{t.servicesIntro}</p>
            </div>
            <div className="services-layout">
              <div className="service-list reveal">
                {t.services.map((s, i) => (
                  <button
                    key={i}
                    className={`service-tab ${service === i ? "active" : ""}`}
                    onClick={() => setService(i)}
                    aria-pressed={service === i}
                  >
                    <span className="service-number">{serviceNums[i]}</span>
                    <span>{s.title}</span>
                    <ArrowUpRight size={20} />
                  </button>
                ))}
              </div>
              <div
                className="service-detail reveal"
                key={`${locale}-${service}`}
              >
                <div className="service-detail-top">
                  <span>SMART ACTIVITY / {serviceNums[service]}</span>
                  <Zap size={25} />
                </div>
                <div className="service-video-wrap">
                  <video
                    key={service}
                    className="service-video"
                    src={serviceVideos[service]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${t.services[service].title} service footage`}
                  />
                  <div className="service-video-overlay" aria-hidden="true" />
                  <span className="service-video-index">
                    {serviceNums[service]}
                  </span>
                </div>
                <div className="service-detail-content">
                  <span className="orange-text">{t.services[service].sub}</span>
                  <h3>{t.services[service].title}</h3>
                  <p>{t.services[service].desc}</p>
                  <div className="tags">
                    {t.services[service].tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectors-section" id="industries">
          <div className="container">
            <div className="section-top reveal">
              <span className="eyebrow">{t.sectorsLabel}</span>
              <span className="section-marker">12 INDUSTRIES</span>
            </div>
            <div className="section-heading reveal">
              <h2 className="section-title">
                {t.sectorsTitle}
                <br />
                <em>{t.sectorsTitle2}</em>
              </h2>
              <p>{t.sectorsIntro}</p>
            </div>

            <div className="industries-grid">
              {t.sectors.map((name, i) => {
                const Icon = sectorIcons[i];

                return (
                  <article className="industry-card reveal" key={i}>
                    <Image
                      src={sectorImages[i]}
                      alt={name}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                      className="industry-card-photo"
                    />

                    <div className="industry-card-overlay" />

                    <div className="industry-card-top">
                      <Icon size={28} strokeWidth={1.7} />
                      <span>{String(i + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="industry-card-bottom">
                      <h3>{name}</h3>
                      <ArrowUpRight size={20} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section values-section">
          <div className="container">
            <div className="section-top reveal">
              <span className="eyebrow">{t.valuesLabel}</span>
              <span className="section-marker">OUR FOUNDATION / 05</span>
            </div>

            <div className="values-heading reveal">
              <h2 className="section-title">{t.valuesTitle}</h2>
              <p>
                The principles that shape our decisions, strengthen our
                partnerships, and drive everything we do.
              </p>
            </div>

            <div className="values-premium-grid">
              {t.values.map((name, i) => {
                const images = [
                  "/images/values/trust.png",
                  "/images/values/innovation.png",
                  "/images/values/results.png",
                  "/images/values/quality.png",
                  "/images/values/collaboration.png",
                ];

                return (
                  <article className="values-premium-card reveal" key={i}>
                    <div className="values-premium-top">
                      <span>0{i + 1}</span>
                      <span className="values-premium-symbol">✦</span>
                    </div>

                    <div className="values-premium-art">
                      <Image
                        src={images[i]}
                        alt={name}
                        width={320}
                        height={240}
                        className="values-premium-image"
                      />
                    </div>

                    <div className="values-premium-bottom">
                      <h3>{name}</h3>
                      <div className="values-premium-line" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container why-layout">
            <div className="reveal">
              <span className="eyebrow">{t.whyLabel}</span>
              <h2 className="section-title">
                {t.whyTitle}
                <br />
                <em>{t.whyTitle2}</em>
              </h2>
              <p className="lead">{t.whyBody}</p>
              <a href="#contact" className="text-link">
                {t.inquiry}
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="reasons reveal">
              {t.reasons.map((reason, i) => (
                <div key={i}>
                  <span>0{i + 1}</span>
                  <h3>{reason}</h3>
                  <ArrowUpRight size={20} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section partners-section" id="partners">
          <div className="container">
            <div className="section-top reveal">
              <span className="eyebrow">{t.partnersLabel}</span>
            </div>
            <div className="section-heading reveal">
              <h2 className="section-title">
                {t.partnersTitle}
                <br />
                <em>{t.partnersTitle2}</em>
              </h2>
              <p>{t.partnersBody}</p>
            </div>

            <div className="partner-marquee">
              <div className="partner-track">
                {[...partnerOrganizations, ...partnerOrganizations].map(
                  (partner, i) => (
                    <div
                      className="partner-card"
                      key={`${partner.name}-${i}`}
                      aria-hidden={i >= partnerOrganizations.length}
                    >
                      <div className="partner-image-wrap">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={200}
                          height={160}
                          className="partner-image"
                          sizes="200px"
                        />
                      </div>
                      <span className="partner-name">{partner.name}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-top reveal">
              <span className="eyebrow">{t.contactLabel}</span>
            </div>
            <div className="contact-layout">
              <div className="reveal">
                <h2 className="section-title">
                  {t.contactTitle}
                  <br />
                  <em>{t.contactTitle2}</em>
                </h2>
                <p className="contact-intro">{t.contactBody}</p>
                <div className="contact-items">
                  <a
                    href="mailto:customersupport@smartactivity.net
"
                  >
                    <Mail size={21} />
                    <span>
                      <small>{t.email}</small>customersupport@smartactivity.net
                    </span>
                    <ArrowUpRight size={18} />
                  </a>
                  <a href="tel:+966530492568">
                    <Phone size={21} />
                    <span>
                      <small>{t.phone}</small>+966 53 049 2568
                    </span>
                    <ArrowUpRight size={18} />
                  </a>
                  <div>
                    <MapPin size={21} />
                    <span>
                      <small>{t.address}</small>
                      {t.addressValue}
                    </span>
                  </div>
                </div>
              </div>
              <form className="contact-form reveal" onSubmit={sendInquiry}>
                <div className="form-head">
                  <span>SMART ACTIVITY</span>
                  <ArrowUpRight />
                </div>
                <label>
                  {t.formName}
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.formName}
                  />
                </label>
                <label>
                  {t.formEmail}
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="name@company.com"
                  />
                </label>
                <label>
                  {t.formService}
                  <div className="select-wrap">
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                    >
                      <option value="">{t.allServices}</option>
                      {t.services.map((s, i) => (
                        <option key={i} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} />
                  </div>
                </label>
                <label>
                  {t.formMessage}
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder={t.formMessage}
                  />
                </label>
                <button className="btn btn-primary form-submit" type="submit">
                  {t.formSend}
                  {rtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                </button>
                <p className="form-note">{t.formNote}</p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
