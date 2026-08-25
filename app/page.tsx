import Image from "next/image";
import NotifyForm from "./notify-form";
import { SPEAKING } from "./speaking-data";
import {
  BUY_HEADLINE,
  BUY_STATUS,
  DISCUSSION_QUESTIONS,
  LINKS,
  POSTS,
  PRAISE,
  RETAILERS,
  SHOW_PRAISE,
  SHOW_SPEAKING,
  SITE,
} from "./site";

const NAV = [
  { href: "#book", label: "The Book" },
  { href: "#excerpt", label: "Excerpt" },
  ...(SHOW_PRAISE ? [{ href: "#praise", label: "Praise" }] : []),
  { href: "#author", label: "Author" },
  { href: "#writing", label: "Writing" },
];

const STATS = [
  { num: "7", label: "Acts" },
  { num: "56", label: "Chapters" },
  { num: "649", label: "Pages" },
  { num: "2026", label: "First edition" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>

      <header className="header">
        <a className="header__mark" href="#top">
          {SITE.title}
        </a>
        <nav className="header__nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} className="header__link" href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="header__cta" href="#buy">
            Get the Book
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero ------------------------------------------------------------ */}
        <section className="hero">
          <div className="hero__copy">
            <p className="hero__kicker">{SITE.subtitle}</p>
            <h1 className="serif hero__title">{SITE.title}</h1>
            <p className="serif hero__tagline">
              Some doors aren&rsquo;t locked. They&rsquo;re just the ones we stopped opening.
            </p>
            <p className="hero__byline">
              {SITE.author} &nbsp;·&nbsp; {SITE.edition}
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold" href="#buy">
                Where to buy
              </a>
              <a className="btn btn--ghost" href="#excerpt">
                Read the opening
              </a>
            </div>
          </div>
          <div className="hero__cover">
            <Image
              src="/images/book-cover.jpg"
              alt={`${SITE.title} — front cover`}
              width={900}
              height={1352}
              priority
            />
          </div>
        </section>

        {/* About the book -------------------------------------------------- */}
        <section id="book" className="section">
          <div className="shell">
            <p className="eyebrow book__eyebrow">About the Book</p>
            <p className="serif book__lead">
              For decades, the systems that run the world were built to last, and to stay
              closed.
            </p>
            <div className="book__cols">
              <div className="book__col">
                <p>Reliable. Controlled. Predictable. But as the world changed, the systems didn&rsquo;t.</p>
                <p>
                  An enterprise architect looks back on a career spent inside one of the last
                  closed enterprises: an industrial giant whose success was built on certainty,
                  and whose survival now depends on giving some of it up.
                </p>
              </div>
              <div className="book__col">
                <p>
                  The story runs through projects, budgets, hallway conversations, and a few
                  decisions nobody thought were decisions at the time.
                </p>
                <p>
                  It is about technology, but mostly it is about incentives, inertia, and who
                  carries the risk when nothing changes.{" "}
                  <em>Nothing is the expensive option.</em>
                </p>
              </div>
            </div>
            <div className="stats">
              {STATS.map((stat) => (
                <div key={stat.label} className="stat">
                  <p className="serif stat__num">{stat.num}</p>
                  <p className="stat__label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Excerpt --------------------------------------------------------- */}
        <section id="excerpt" className="excerpt">
          <div className="excerpt__inner">
            <p className="excerpt__eyebrow">Read the Opening</p>
            <h2 className="serif excerpt__title">Chapter 1: Before</h2>
            <div className="excerpt__body">
              <p>
                <span className="serif excerpt__drop">T</span>he thing I remember most clearly
                is that nobody in the room reacted.
              </p>
              <p>
                It was a Tuesday afternoon, sometime in the spring, in a conference room on the
                kind of floor that has its own coffee machine and a view of a parking lot. Seven
                of us. A status review. The slide on the screen showed a capability we had been
                preparing to scope for the next quarter: architecture diagrams, vendor shortlist,
                three internal teams aligning calendars to align other calendars. A respectable
                enterprise effort.
              </p>
              <p>
                While the meeting was happening, on a second monitor I had not bothered to close,
                a notification surfaced from a public repository I had been following out of
                professional curiosity. Someone I had never met, in a city I could not have placed
                on a map, had merged a pull request that did roughly what our slide proposed. Not
                the enterprise-grade version. Not the one with the audit hooks and the regional
                failover. But the working core of it. In an afternoon. With three other people he
                appeared to know only through their handles.
              </p>
              <p>I closed the laptop and went back to the meeting.</p>
              <p>
                That is the part I want to be honest about. I did not say anything. I did not
                point at the screen and say, look at this, the world we are pricing for next
                quarter just shipped for free while we were discussing the procurement path. I sat
                there and nodded at the right moments, because the meeting was real and the people
                in it were good at their jobs and the work we were debating was, by every measure
                we had been trained to apply, the correct work to be doing.
              </p>
              <p>But something in me had moved a quarter inch, and I knew it.</p>
            </div>
            <div className="excerpt__foot">
              <p>The chapter continues for another nine pages.</p>
              <a className="btn btn--dark" href="#buy">
                Get the full book
              </a>
            </div>
          </div>
        </section>

        {/* Praise ---------------------------------------------------------- */}
        {SHOW_PRAISE && PRAISE.length > 0 && (
          <section id="praise" className="section">
            <div className="shell">
              <div className="praise__head">
                <p className="eyebrow" style={{ margin: 0 }}>
                  Early Praise
                </p>
              </div>
              <div className="praise__grid">
                {PRAISE.map((entry) => (
                  <blockquote key={entry.attribution} className="quote">
                    <p>{entry.quote}</p>
                    <footer>{entry.attribution}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Where to buy ---------------------------------------------------- */}
        <section id="buy" className="section section--alt">
          <div className="shell buy__grid">
            <div>
              <p className="eyebrow">Where to Buy</p>
              <h2 className="serif section-title">{BUY_HEADLINE}</h2>
              <p className="buy__note">
                Paperback, hardcover, and Kindle edition. Audiobook and Barnes &amp; Noble to
                follow.
              </p>
              <div className="buy__list">
                {RETAILERS.map((retailer) => {
                  const status = retailer.status ?? BUY_STATUS;
                  if (retailer.status) {
                    return (
                      <div key={retailer.name} className="buy__row buy__row--planned">
                        <span className="buy__name">{retailer.name}</span>
                        <span className="buy__status">{status}</span>
                      </div>
                    );
                  }
                  return (
                    <a
                      key={retailer.name}
                      className="buy__row buy__row--live"
                      href={retailer.url ?? "#notify"}
                      {...(retailer.url ? { target: "_blank", rel: "noopener" } : {})}
                    >
                      <span className="buy__name">{retailer.name}</span>
                      <span className="buy__status">{status}</span>
                    </a>
                  );
                })}
              </div>
              <p className="mono buy__isbn">
                ISBN (paperback) {SITE.isbn} · retailer links pending
              </p>
            </div>

            <div id="notify" className="notify">
              <p className="notify__eyebrow">Publication List</p>
              <h3 className="serif notify__title">Know the day it&rsquo;s available</h3>
              <NotifyForm />
            </div>
          </div>
        </section>

        {/* Author ---------------------------------------------------------- */}
        <section id="author" className="section">
          <div className="shell author__grid">
            <div>
              <Image
                className="author__photo"
                src="/images/eddie-wassef.jpg"
                alt={SITE.author}
                width={815}
                height={540}
              />
              <p className="mono author__caption">{SITE.author}</p>
            </div>
            <div>
              <p className="eyebrow">The Author</p>
              <h2 className="serif author__title">
                Twenty years inside the rooms this book is set in.
              </h2>
              <div className="author__bio">
                <p>
                  Eddie Wassef is an enterprise architect who has spent his career building and
                  modernizing the systems that run industry: the ones with procurement cycles,
                  architecture boards, and a good reason behind every control they carry.
                </p>
                <p>
                  He writes about platform engineering, inner source, AI, and architecture
                  modernization at{" "}
                  <a href={LINKS.publication} target="_blank" rel="noopener">
                    Archetypical Software
                  </a>
                  , on topics from the end of the traditional SDLC to how AI agents get governed
                  once they reach real production.
                </p>
                <p>
                  <em>{SITE.title}</em> is his first novel. It is fiction and the characters are
                  invented. The meetings are not.
                </p>
                <p>
                  Over twenty years in and around enterprise technology have taught him that the
                  hardest systems to change are rarely the technical ones.
                </p>
              </div>
              <div className="chips">
                <a className="chip" href={LINKS.medium} target="_blank" rel="noopener">
                  Medium
                </a>
                <a className="chip" href={LINKS.archetypical} target="_blank" rel="noopener">
                  Archetypical Software
                </a>
                <a className="chip" href={LINKS.linkedin} target="_blank" rel="noopener">
                  LinkedIn
                </a>
                <a className="chip" href={LINKS.twitter} target="_blank" rel="noopener">
                  @ewassef
                </a>
                <a className="chip" href={LINKS.github} target="_blank" rel="noopener">
                  GitHub
                </a>
                <a className="chip" href={LINKS.sessionize} target="_blank" rel="noopener">
                  Sessionize
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Writing --------------------------------------------------------- */}
        <section id="writing" className="section">
          <div className="shell">
            <div className="split-head">
              <div>
                <p className="eyebrow" style={{ marginBottom: 16 }}>
                  From the Blog
                </p>
                <h2 className="serif section-title" style={{ marginBottom: 0 }}>
                  Latest at Archetypical Software
                </h2>
              </div>
              <a
                className="split-head__more"
                href={LINKS.publication}
                target="_blank"
                rel="noopener"
              >
                All posts →
              </a>
            </div>
            <div className="card-rail">
              {POSTS.map((post) => (
                <a key={post.url} className="card" href={post.url} target="_blank" rel="noopener">
                  <span className="card__meta">{post.meta}</span>
                  <span className="card__title">{post.title}</span>
                  <span className="card__blurb">{post.blurb}</span>
                  <span className="card__more">Read on Medium →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Reading groups -------------------------------------------------- */}
        <section id="clubs" className="section section--alt">
          <div className="shell clubs__grid">
            <div>
              <p className="eyebrow">Reading Groups</p>
              <h2 className="serif section-title" style={{ maxWidth: "24ch" }}>
                Discussion guide for teams and book clubs
              </h2>
              <p className="clubs__lead">
                Six questions to start with, whether you&rsquo;re reading it with an architecture
                guild, a leadership team, or a book club that just wants the argument.
              </p>
            </div>
            <ol className="clubs__questions">
              {DISCUSSION_QUESTIONS.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* Speaking -------------------------------------------------------- */}
        {SHOW_SPEAKING && (
          <section id="speaking" className="section">
            <div className="shell">
              <p className="eyebrow">Speaking &amp; Events</p>
              <h2 className="serif section-title" style={{ maxWidth: "26ch" }}>
                Talks, panels, and internal sessions
              </h2>
              <p className="speaking__lead">
                Available for conference talks, engineering all-hands, architecture guilds, and
                leadership offsites. Topics include platform engineering, inner source, cloud
                native security, AI governance, and what it actually takes to open a closed
                enterprise.
              </p>

              <div className="topics">
                {SPEAKING.topics.map((topic) => (
                  <span key={topic} className="topic">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="card-rail">
                {SPEAKING.talks.map((talk) => (
                  <a
                    key={talk.url}
                    className="card card--talk"
                    href={talk.url}
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="card__title">{talk.title}</span>
                    <span className="card__blurb">{talk.blurb}</span>
                    <span className="card__more">Session details →</span>
                  </a>
                ))}
              </div>

              <div className="speaking__foot">
                <div>
                  <p className="subhead">Stages</p>
                  <div className="events">
                    {SPEAKING.events.map((event) => (
                      <div key={event.name} className="event">
                        <span className="event__name">{event.name}</span>
                        <span className="event__when">
                          {event.date} · {event.place}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="subhead">Booking &amp; press</p>
                  <p className="booking__copy">
                    Invite me through Sessionize, or reach out directly on LinkedIn.
                  </p>
                  <div className="notify__links">
                    <a
                      className="btn btn--gold btn--sm"
                      href={LINKS.sessionize}
                      target="_blank"
                      rel="noopener"
                    >
                      Invite via Sessionize
                    </a>
                    <a
                      className="btn btn--ghost btn--sm"
                      href={LINKS.linkedin}
                      target="_blank"
                      rel="noopener"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <p className="mono" style={{ marginTop: 22 }}>
                    Sessions and stages from sessionize.com/eddie-wassef · last updated{" "}
                    {SPEAKING.updated}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Closing --------------------------------------------------------- */}
        <section className="closing">
          <div className="closing__inner">
            <p className="serif closing__quote">
              The real danger isn&rsquo;t change. It&rsquo;s choosing not to.
            </p>
            <p className="closing__attr">
              {SITE.title} · {SITE.author}
            </p>
            <a className="btn btn--gold" href="#buy">
              Get the book
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="mono" style={{ margin: 0 }}>
          © 2026 {SITE.author} · All rights reserved
        </p>
        <div className="footer__links">
          <a href={LINKS.publication} target="_blank" rel="noopener">
            Medium
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href={LINKS.twitter} target="_blank" rel="noopener">
            @ewassef
          </a>
          <a href={LINKS.sessionize} target="_blank" rel="noopener">
            Speaking
          </a>
          <a href={LINKS.archetypical} target="_blank" rel="noopener">
            Archetypical
          </a>
          <a href="#buy">Buy</a>
        </div>
      </footer>
    </>
  );
}
