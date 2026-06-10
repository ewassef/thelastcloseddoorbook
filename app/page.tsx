"use client";

import Image from "next/image";
import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";

const themes = [
  {
    number: "01",
    title: "The Risk Illusion",
    text: "The company believed proprietary software reduced risk and open source increased it. The story asks what happens when the opposite becomes true.",
  },
  {
    number: "02",
    title: "The Inner Source Bridge",
    text: "Before the company could trust the outside world, it had to learn how to trust itself. Inner sourcing became the hallway where unlikely allies met.",
  },
  {
    number: "03",
    title: "The Council of Doubt",
    text: "The skeptics were not blockers. They were protectors shaped by old scars, old outages, old audits, and old promises.",
  },
  {
    number: "04",
    title: "The Fellowship",
    text: "Not heroes. Practitioners. The people close enough to the work to see the future arriving before the dashboards showed it.",
  },
  {
    number: "05",
    title: "AI's Quiet Pressure",
    text: "AI did not start the crisis. It made the existing delays impossible to hide.",
  },
  {
    number: "06",
    title: "The Talent Signal",
    text: "When modern builders leave, they rarely say the architecture is the reason. But it usually is.",
  },
];

const readers = [
  "Technology executives trying to modernize without breaking trust.",
  "Enterprise architects who see the gap between strategy decks and delivery reality.",
  "Platform engineers building the roads others will travel.",
  "Security, legal, and risk leaders asked to protect a company that must also move faster.",
  "Product leaders tired of explaining why simple things take months.",
  "Anyone who has ever sat in a meeting and realized the process was safer than the outcome.",
];

const praise = [
  "A rare enterprise technology story that understands both the boardroom and the build pipeline.",
  "This is the transformation story many companies are living but few are willing to say out loud.",
  "Not another AI book. Not another open source manifesto. Something more useful: a story about why change is so hard.",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = sampleOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sampleOpen]);

  function tiltCover(event: MouseEvent<HTMLDivElement>) {
    const element = coverRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.transform = `perspective(1100px) rotateY(${x * 7}deg) rotateX(${-y * 6}deg) translateY(-8px)`;
  }

  function resetCover() {
    if (coverRef.current) coverRef.current.style.transform = "";
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="The Last Closed Door home">
          <span className="door-mark" />
          <span>The Last Closed Door</span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#themes" onClick={closeMenu}>Themes</a>
          <a href="#praise" onClick={closeMenu}>Praise</a>
          <a href="#author" onClick={closeMenu}>Author</a>
          <a href="#updates" onClick={closeMenu}>Updates</a>
          <a href="#speaking" onClick={closeMenu}>Speaking</a>
        </nav>
        <a className="button button-small header-cta" href="#updates">Get Updates</a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy reveal">
          <p className="eyebrow">A novel of enterprise transformation</p>
          <h1>The Last<br /><em>Closed Door</em></h1>
          <p className="hero-tagline">
            A story about what happens when the systems that made a company successful
            become the very things holding it back.
          </p>
          <p className="hero-description">
            A narrative about enterprise technology, open source, AI, and the quiet courage
            required to change before the market forces the issue.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#updates">Join the Launch List <ArrowIcon /></a>
            <button className="button button-secondary" type="button" onClick={() => setSampleOpen(true)}>
              Read a Sample
            </button>
          </div>
          <p className="hero-audience">
            For technology leaders, architects, builders, and executives navigating the
            shift from closed systems to open ecosystems.
          </p>
        </div>
        <div className="cover-stage reveal" onMouseMove={tiltCover} onMouseLeave={resetCover}>
          <div className="cover-halo" />
          <div className="book-cover" ref={coverRef}>
            <Image
              src="/images/book-cover.png"
              alt="Book cover for The Last Closed Door by Eddie Wassef"
              width={1024}
              height={1536}
              priority
            />
          </div>
          <p className="cover-caption"><span>Written by</span> Eddie Wassef</p>
        </div>
      </section>

      <section className="positioning section-pad">
        <div className="section-intro reveal">
          <p className="eyebrow">The story beneath the strategy</p>
          <h2>Part enterprise transformation story.<br />Part technology memoir. <em>Part warning signal.</em></h2>
        </div>
        <div className="position-grid">
          <article className="position-card reveal">
            <span>01</span>
            <h3>Open Source as Strategy</h3>
            <p>Not a tooling choice. A different operating model.</p>
          </article>
          <article className="position-card reveal">
            <span>02</span>
            <h3>AI as a Forcing Function</h3>
            <p>The accelerator that exposes every delay, dependency, and illusion of control.</p>
          </article>
          <article className="position-card reveal">
            <span>03</span>
            <h3>Talent as the Signal</h3>
            <p>The best people do not just leave jobs. They leave operating models.</p>
          </article>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-heading reveal">
          <p className="eyebrow">Inside the story</p>
          <h2>About<br /><em>the Book</em></h2>
          <div className="rule" />
          <p className="about-pull">Neither side was wrong.<br />That was the problem.</p>
        </div>
        <div className="about-copy reveal">
          <p className="lead">The Last Closed Door follows a large enterprise at the moment its confidence begins to fracture.</p>
          <p>For years, the company believed its proprietary systems were a source of safety. They had contracts, controls, support agreements, and processes tuned over decades. On paper, it looked responsible. In practice, it had become slow.</p>
          <p>Then the market changed.</p>
          <p>AI-native competitors began moving faster than anyone expected. Vendors that once sold certainty began pivoting toward open source. Engineers quietly left for companies where the tools felt modern and the work felt alive. Customers stopped asking for roadmaps and started asking why everything took so long.</p>
          <p>Inside the company, two groups began to form.</p>
          <p>One was the <strong>Council of Doubt</strong>: experienced leaders who had spent their careers protecting the enterprise from risk.</p>
          <p>The other was the <strong>Fellowship</strong>: builders, operators, product thinkers, and engineers who had found each other through inner sourcing and knew the old model was breaking.</p>
          <p>This is not a story about heroes defeating villains. It is a story about incentives, fear, trust, legacy, and the difficult work of opening the last closed door.</p>
        </div>
      </section>

      <section className="themes section-pad" id="themes">
        <div className="section-intro reveal">
          <p className="eyebrow">Six currents</p>
          <h2>The forces moving<br /><em>behind the walls.</em></h2>
        </div>
        <div className="theme-grid">
          {themes.map((theme) => (
            <article className="theme-card reveal" key={theme.title}>
              <span>{theme.number}</span>
              <h3>{theme.title}</h3>
              <p>{theme.text}</p>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="pull-quote">
        <div className="quote-window" />
        <blockquote className="reveal">
          <span className="quote-mark">“</span>
          The hardest part of transformation is not convincing people that the future is
          coming. It is helping them grieve the systems that once made them successful.
        </blockquote>
      </section>

      <section className="readers section-pad">
        <div className="readers-heading reveal">
          <p className="eyebrow">Who this book is for</p>
          <h2>For those asked to<br /><em>protect and progress.</em></h2>
        </div>
        <div className="reader-list">
          {readers.map((reader, index) => (
            <div className="reader-item reveal" key={reader}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{reader}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="praise section-pad" id="praise">
        <div className="section-intro reveal">
          <p className="eyebrow">Advance praise</p>
          <h2>Early words from<br /><em>inside the industry.</em></h2>
          <p className="section-deck">Endorsements coming soon from technology leaders, open source practitioners, platform engineers, and executives who have lived this story from the inside.</p>
        </div>
        <div className="praise-grid">
          {praise.map((quote) => (
            <figure className="praise-card reveal" key={quote}>
              <blockquote>“{quote}”</blockquote>
              <figcaption>Coming Soon</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="author section-pad" id="author">
        <div className="author-portrait reveal" aria-label="Author portrait placeholder">
          <span>EW</span>
          <small>Author portrait forthcoming</small>
        </div>
        <div className="author-copy reveal">
          <p className="eyebrow">A note from the author</p>
          <h2>Architecture is<br /><em>also about trust.</em></h2>
          <p>I have spent much of my career in the space between enterprise control and open source possibility.</p>
          <p>I understand why large organizations protect what they have. I also understand what happens when protection becomes paralysis.</p>
          <p>This book came from years of watching talented people struggle inside systems that were built for a different era. Some of those systems were technical. Most were human.</p>
          <p><em>The Last Closed Door</em> is fiction, but it is built from patterns that will feel familiar to anyone who has worked inside a large technology organization during a platform shift.</p>
          <p>It is a story about architecture, yes. But more than that, it is a story about trust.</p>
          <a className="text-link" href="#updates">Follow the Journey <ArrowIcon /></a>
        </div>
      </section>

      <section className="updates section-pad" id="updates">
        <div className="updates-copy reveal">
          <p className="eyebrow">Keep the door open</p>
          <h2>Join the<br /><em>Launch List</em></h2>
          <p>Get updates as the book moves toward release, including sample chapters, behind-the-scenes notes, launch announcements, and practical reflections on open source, AI, platform engineering, and enterprise transformation.</p>
          <div className="bonus-grid">
            {[
              ["Sample Chapter", "A first look at the opening crisis."],
              ["Reader Notes", "Behind-the-scenes reflections on the themes."],
              ["Launch Updates", "Release date, pre-order links, and events."],
              ["Discussion Guide", "For technology leadership teams and book clubs."],
            ].map(([title, text]) => (
              <div className="bonus" key={title}><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
        <div className="form-panel reveal">
          {submitted ? (
            <div className="success-message" role="status">
              <span className="success-icon">✓</span>
              <h3>You’re on the list.</h3>
              <p>Thank you. The next note will arrive when there is something worth opening.</p>
            </div>
          ) : (
            <form onSubmit={submitForm}>
              <div className="field-row">
                <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
                <label>Email<input name="email" type="email" placeholder="you@company.com" required /></label>
              </div>
              <label>Role
                <select name="role" defaultValue="">
                  <option value="" disabled>Select your role</option>
                  <option>Executive</option>
                  <option>Architect</option>
                  <option>Engineer</option>
                  <option>Product Leader</option>
                  <option>SRE / Operations</option>
                  <option>Security / Risk / Legal</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>Send me occasional updates about the book and related essays.</span>
              </label>
              <button className="button button-primary form-button" type="submit">Join the List <ArrowIcon /></button>
              <p className="form-note">Quiet updates only. No noise, no list sharing.</p>
            </form>
          )}
        </div>
      </section>

      <section className="speaking section-pad" id="speaking">
        <div className="speaking-copy reveal">
          <p className="eyebrow">Speaking & workshops</p>
          <h2>Bring the conversation<br /><em>to your organization.</em></h2>
          <p>The themes in <em>The Last Closed Door</em> are already showing up inside leadership offsites, architecture reviews, platform strategy sessions, and AI governance conversations.</p>
          <a className="button button-primary" href="mailto:hello@example.com?subject=Speaking inquiry">Request a Conversation <ArrowIcon /></a>
        </div>
        <div className="topic-list reveal">
          {[
            "Open source as enterprise strategy",
            "AI as a forcing function for modernization",
            "Platform engineering and the future SDLC",
            "The talent cost of legacy technology",
            "Vendor lock-in and ecosystem resilience",
            "Inner sourcing as a cultural bridge",
          ].map((topic, index) => <div key={topic}><span>{index + 1}</span>{topic}</div>)}
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div>
            <p className="footer-title">The Last<br />Closed Door</p>
            <p className="footer-author">A novel by Eddie Wassef</p>
          </div>
          <div className="footer-links">
            <a href="#about">About the Book</a>
            <a href="#author">About the Author</a>
            <a href="#updates">Newsletter</a>
          </div>
          <div className="footer-links">
            <a href="#" aria-label="LinkedIn placeholder">LinkedIn</a>
            <a href="mailto:hello@example.com">Contact</a>
            <a href="#" aria-label="Privacy policy placeholder">Privacy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>The Last Closed Door is a work of fiction grounded in real enterprise patterns.</p>
          <p>© {new Date().getFullYear()} Eddie Wassef</p>
        </div>
      </footer>

      <a className="mobile-cta" href="#updates">Join the Launch List <ArrowIcon /></a>

      {sampleOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSampleOpen(false)}>
          <div className="sample-modal" role="dialog" aria-modal="true" aria-labelledby="sample-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close sample" onClick={() => setSampleOpen(false)}>×</button>
            <p className="eyebrow">An opening glimpse</p>
            <h2 id="sample-title">The first warning<br /><em>didn’t look like one.</em></h2>
            <div className="sample-copy">
              <p className="dropcap">The meeting had been scheduled for forty-five minutes, which meant no one expected anything to change.</p>
              <p>Outside the glass, the last light settled over the refinery. Inside, twelve people studied a slide titled <strong>Modernization Readiness</strong>, each waiting for someone else to say what the numbers already had.</p>
              <p>The company was not failing. Its systems were stable. Its vendors were trusted. Its controls had passed every audit.</p>
              <p>And yet, somewhere beyond those walls, the market had begun moving without them.</p>
            </div>
            <p className="sample-note">Sample text for preview. Final chapter excerpt coming soon.</p>
            <a className="button button-primary" href="#updates" onClick={() => setSampleOpen(false)}>Get the Full Sample <ArrowIcon /></a>
          </div>
        </div>
      )}
    </main>
  );
}
