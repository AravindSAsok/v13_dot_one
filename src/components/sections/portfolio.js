import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { withPrefix } from 'gatsby';
import { email } from '@config';
import './portfolio.css';

const featuredProjects = [
  {
    title: 'EvidencePilot',
    category: 'Research & RAG',
    maturity: 'Research application',
    lead: 'A document research workspace for finding evidence, generating cited answers, and reviewing claims.',
    summary: 'Combines page-aware PDF extraction, chunking, keyword and semantic retrieval, Gemini responses, citation review, and retrieval evaluation tools.',
    stack: ['Python', 'Streamlit', 'Gemini', 'pypdf', 'NumPy', 'Supabase'],
    repoName: 'AravindSAsok/EvidencePilot',
    repo: 'https://github.com/AravindSAsok/EvidencePilot',
    live: 'https://evidencepilot.streamlit.app/',
    caseStudy: '/case-studies/evidencepilot/',
  },
  {
    title: 'TrackCake',
    category: 'Full-Stack Applications',
    maturity: 'Deployed application',
    lead: 'A food diary with manual, text-assisted, and photo-assisted meal logging.',
    summary: 'Uses multiple LLM providers for nutrition estimates, validates structured suggestions, and lets users review and edit foods before saving to local or Supabase-backed diaries.',
    stack: ['Astro 5', 'TypeScript', 'Supabase', 'PostgreSQL', 'Groq', 'Gemini', 'OpenRouter'],
    repoName: 'AravindSAsok/tracKcake',
    repo: 'https://github.com/AravindSAsok/tracKcake',
    live: 'https://trackcake.vercel.app/',
    caseStudy: '/case-studies/trackcake/',
  },
  {
    title: 'Maplewood AI Front Desk',
    category: 'AI & Agents',
    maturity: 'Synthetic-data prototype',
    lead: 'A deterministic-first MCP agent prototype for a fictional clinic inbox.',
    summary: 'Combines explicit emergency, identity, refill, and scheduling policies with MCP tools, structured actions, and tests for privacy boundaries and prompt-injection handling.',
    stack: ['Python', 'MCP', 'FastMCP', 'pytest'],
    repoName: 'AravindSAsok/maplewood-ai-front-desk',
    repo: 'https://github.com/AravindSAsok/maplewood-ai-front-desk',
    caseStudy: '/case-studies/maplewood/',
  },
  {
    title: 'Hourly',
    category: 'Backend Engineering',
    maturity: 'Deployed application',
    lead: 'A timestamp-first work tracker with explicit break accounting.',
    summary: 'Derives gross time, deducted breaks, and net work from recorded timestamps, with shared calculations across dashboard, history, reports, and CSV export.',
    stack: ['Next.js 16', 'TypeScript', 'Supabase Auth', 'PostgreSQL', 'Node tests'],
    repoName: 'AravindSAsok/hourly',
    repo: 'https://github.com/AravindSAsok/hourly',
    live: 'https://hourly-psi.vercel.app/dashboard',
    caseStudy: '/case-studies/hourly/',
  },
  {
    title: 'ClashCommand',
    category: 'Backend Engineering',
    maturity: 'Application source + tests',
    lead: 'An authenticated operations dashboard for clans, players, memberships, and war history.',
    summary: 'Uses a relational PostgreSQL model, Drizzle ORM, role-aware operations, validated APIs, and a controlled local synchronization workflow for external game data.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Drizzle', 'NextAuth', 'Zod'],
    repoName: 'AravindSAsok/ClashCommand',
    repo: 'https://github.com/AravindSAsok/ClashCommand',
    caseStudy: '/case-studies/clashcommand/',
  },
  {
    title: 'Openfolio',
    category: 'Developer Tools',
    maturity: 'Early MVP; hosted OAuth needs operator setup',
    lead: 'A self-hostable developer portfolio platform powered by public GitHub work.',
    summary: 'Combines GitHub OAuth, curated portfolio content, Cloudflare D1 persistence, optional R2 image storage, and server-rendered public profile pages.',
    stack: ['React 19', 'Vite', 'TypeScript', 'Cloudflare Workers', 'D1', 'R2', 'Drizzle'],
    repoName: 'AravindSAsok/openfolio',
    repo: 'https://github.com/AravindSAsok/openfolio',
    caseStudy: '/case-studies/openfolio/',
  },
];

const archiveProjects = [
  {
    title: 'ProfBot AI',
    language: 'Python',
    year: '2026',
    description: 'Document QA with a CLI and Streamlit UI, BM25-style retrieval, validated citations, Argon2id authentication, and usage controls.',
    repo: 'https://github.com/AravindSAsok/ProfBot',
  },
  {
    title: 'ACME Salary Management',
    language: 'JavaScript',
    year: '2026',
    description: 'A React and Express HR dashboard with SQLite-backed employee search, pagination, salary updates, and summary endpoints.',
    repo: 'https://github.com/AravindSAsok/acme-salary-management',
  },
  {
    title: 'LineSplit',
    language: 'JavaScript',
    year: '2026',
    description: 'A local-first Chrome extension and web app for splitting long clipboard text into copy-ready chunks.',
    repo: 'https://github.com/AravindSAsok/LineSplit',
    live: 'https://aravindsasok.github.io/LineSplit/',
  },
  {
    title: 'Profdoc AI V2',
    language: 'Python',
    year: '2026',
    description: 'A document research assistant built with Streamlit, Gemini, and Supabase.',
    repo: 'https://github.com/AravindSAsok/profdoc_ai_v2',
    live: 'https://profdocai.streamlit.app/',
  },
  {
    title: 'PhD Research Chat',
    language: 'Python',
    year: '2026',
    description: 'A Streamlit MVP for asking questions about uploaded PDF, DOCX, and TXT research documents.',
    repo: 'https://github.com/AravindSAsok/phd-research-chat-mvp',
    live: 'https://phd-research-chat-mvp-puchki.streamlit.app/',
  },
  {
    title: 'Mini RAG',
    language: 'Python',
    year: '2026',
    description: 'A retrieval-focused demo that returns relevant passages with source names and similarity scores.',
    repo: 'https://github.com/AravindSAsok/mini-rag',
    live: 'https://exo-rag.streamlit.app/',
  },
  {
    title: 'DevFlow API',
    language: 'Python',
    year: '2026',
    description: 'Python API backend for a developer workflow tool.',
    repo: 'https://github.com/AravindSAsok/devflow-api',
  },
  {
    title: 'YT Clone',
    language: 'JavaScript',
    year: '2023',
    repo: 'https://github.com/AravindSAsok/ytclone',
  },
  {
    title: 'Todo App with Node',
    language: 'JavaScript',
    year: '2022',
    repo: 'https://github.com/AravindSAsok/todoappwithnode',
  },
  {
    title: 'Sequelize Association Migration',
    language: 'JavaScript',
    year: '2022',
    description: 'A practical Sequelize association, migration, and seed example.',
    repo: 'https://github.com/AravindSAsok/sequelize--association-migraton-and-seed',
  },
];

const projectNumber = index => String(index + 1).padStart(2, '0');
const archiveNumber = index => String(index + 7).padStart(2, '0');

const Portfolio = () => {
  const [indexOpen, setIndexOpen] = useState(false);
  const [graphFailed, setGraphFailed] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
    });

    return () => lenis.destroy();
  }, []);

  const handleContactSubmit = event => {
    event.preventDefault();

    const formData = new window.FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const sender = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = 'Portfolio enquiry from ' + name;
    const body = 'Name: ' + name + '\nEmail: ' + sender + '\n\n' + message;

    window.location.href =
      'mailto:' +
      email +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);
  };

  return (
    <div className="portfolio mni-site" id="top">
      <a className="mni-skip-link" href="#main-content">Skip to content</a>

      <header className="mni-header" aria-label="Portfolio navigation">
        <div className="mni-header-stack">
          <span className="mni-header-label">Role</span>
          <span>AI & Backend Engineer | Full-Stack Software Engineer</span>
        </div>

        <div className="mni-header-profile">
          <span className="mni-header-label">Profile</span>
          <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">
            github.com/aravindsasok
          </a>
          <a href="https://www.linkedin.com/in/aravind-asok/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>

        <a className="mni-header-contact" href="#contact">Contact</a>
      </header>

      <main className="mni-main" id="main-content">
        <section className="mni-hero" aria-labelledby="hero-title">
          <div className="mni-hero-grid" aria-hidden="true" />

          <h1 id="hero-title">Aravind S Asok</h1>
          <p className="mni-hero-role">AI &amp; Backend Engineer <span>·</span> Full-Stack Software Engineer</p>

          <p className="mni-hero-scroll">
            <span aria-hidden="true" />
            <small>Scroll</small>
          </p>

          <p className="mni-hero-statement">
            I build reliable backend systems, practical AI-powered applications and full-stack products.
          </p>
          <nav className="mni-hero-actions" aria-label="Primary actions">
            <a className="mni-action-primary" href="#projects">View selected work <span aria-hidden="true">↘</span></a>
            <a href={withPrefix('/resume.pdf')} download>Download résumé <span aria-hidden="true">↓</span></a>
            <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/aravind-asok/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="#contact">Contact ↘</a>
          </nav>

          <figure className="mni-profile-figure">
            <img
              src="https://avatars.githubusercontent.com/u/69244672?v=4"
              alt="Aravind S Asok"
              width="88"
              height="88"
              loading="eager"
              decoding="async"
            />
            <figcaption>Fig. 1</figcaption>
          </figure>

          <a
            className="mni-github-mark"
            href="https://github.com/aravindsasok"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aravind S Asok on GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.09 5.49.4.35.76 1.02.76 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          <div className="mni-index-rail">
            <button
              type="button"
              onClick={() => setIndexOpen(open => !open)}
              aria-expanded={indexOpen}
              aria-controls="mni-index-panel">
              <span className="mni-index-crosshair" aria-hidden="true">⊕</span>
              <span>00&nbsp; Index</span>
            </button>
          </div>

          {indexOpen && (
            <nav className="mni-index-panel" id="mni-index-panel" aria-label="Page index">
              <a href="#experience" onClick={() => setIndexOpen(false)}><span>01</span> Experience</a>
              <a href="#capabilities" onClick={() => setIndexOpen(false)}><span>02</span> Capabilities</a>
              <a href="#projects" onClick={() => setIndexOpen(false)}><span>03</span> Selected work</a>
              {featuredProjects.map((project, index) => (
                <a
                  key={project.title}
                  href={'#project-' + (index + 1)}
                  onClick={() => setIndexOpen(false)}>
                  <span>{projectNumber(index)}</span>{project.title}
                </a>
              ))}
              <a href="#archive" onClick={() => setIndexOpen(false)}><span>04</span> More projects</a>
              <a href="#activity" onClick={() => setIndexOpen(false)}><span>05</span> Activity</a>
              <a href="#contact" onClick={() => setIndexOpen(false)}><span>06</span> Contact</a>
            </nav>
          )}
        </section>

                <section className="mni-section mni-experience" id="experience" aria-labelledby="experience-title">
          <div className="mni-section-kicker">
            <span>(00)</span>
            <span>Profile & experience</span>
          </div>
          <div className="mni-experience-intro">
            <div>
              <h2 id="experience-title">Engineering with context.</h2>
              <p>I'm Aravind S Asok, a software engineer with 5+ years of experience building backend services, APIs, and full-stack products. My recent work combines Node.js and TypeScript systems with practical AI applications, retrieval workflows, and agent integrations.</p>
            </div>
            <div className="mni-experience-links">
              <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/aravind-asok/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href={'mailto:' + email}>Email ↗</a>
              <a href={withPrefix('/resume/')}>View résumé ↗</a>
              <a href={withPrefix('/resume.pdf')} download>Download résumé PDF ↗</a>
            </div>
          </div>
          <ol className="mni-experience-list">
            <li><span>2026 — Present</span><div><strong>Software Engineer</strong><small>AINEX Software Solutions</small><p>Backend services and REST APIs, relational data, access control, integrations, and AI-enabled workflows.</p></div></li>
            <li><span>2025 — 2026</span><div><strong>Backend Developer</strong><small>Independent / Freelance</small><p>Backend systems for finance, healthcare, and research workflows, including APIs, data models, and AI integrations.</p></div></li>
            <li><span>2021 — 2025</span><div><strong>Software Engineer</strong><small>Revyrie Global · Technopark</small><p>Node.js and Python services, SQL data models, external integrations, authentication, and delivery workflows.</p></div></li>
            <li><span>2020 — 2021</span><div><strong>Jr. Software Engineer</strong><small>GDS Technologies Limited</small><p>Backend services, REST APIs, relational data operations, debugging, and application testing.</p></div></li>
          </ol>
        </section>

        <section className="mni-section mni-capabilities" id="capabilities" aria-labelledby="capabilities-title">
          <div className="mni-section-kicker"><span>(01)</span><span>Engineering capabilities</span></div>
          <h2 id="capabilities-title">What I work with.</h2>
          <div className="mni-capability-grid">
            <article><span>01 / Backend</span><h3>Systems & APIs</h3><p>Node.js, NestJS, Express, REST APIs, PostgreSQL, MySQL, MongoDB, data modelling, authentication and authorization.</p></article>
            <article><span>02 / Applied AI</span><h3>LLMs & retrieval</h3><p>LLM integrations, RAG, hybrid retrieval, citation validation, document processing, MCP and agent workflows.</p></article>
            <article><span>03 / Full-stack</span><h3>Product engineering</h3><p>JavaScript, TypeScript, React, Next.js, Astro, API integration and responsive application interfaces.</p></article>
            <article><span>04 / Delivery</span><h3>Quality & operations</h3><p>Automated testing, input validation, security boundaries, Docker, CI/CD, AWS, GCP and debugging.</p></article>
          </div>
        </section>

        <section className="mni-projects" id="projects" aria-labelledby="projects-title" style={{ "--project-count": visibleProjects.length }}>
          <h2 className="mni-visually-hidden" id="projects-title">Selected projects</h2>
          <nav className="mni-filter-bar" aria-label="Filter selected projects">
            {['All', 'AI & Agents', 'Backend Engineering', 'Full-Stack Applications', 'Research & RAG', 'Developer Tools'].map(filter => (
              <button key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </nav>
          <ol className="mni-project-list">
            {visibleProjects.map((project, index) => {
              const projectIndex = featuredProjects.findIndex(item => item.title === project.title);
              const number = projectNumber(projectIndex);
              const openUrl = project.live || project.repo;

              return (
                <li
                  className="mni-project-card"
                  id={'project-' + (projectIndex + 1)}
                  key={project.title}
                  style={{ zIndex: projectIndex + 1 }}
                  aria-labelledby={'project-title-' + (projectIndex + 1)}>
                  <div className="mni-project-meta">
                    <span>(02) <strong>Selected work</strong></span>
                    <span>{number} / 06</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="mni-project-title" id={'project-title-' + (projectIndex + 1)}>
                    <a href={openUrl} target="_blank" rel="noopener noreferrer">
                      {project.title}<span aria-hidden="true"> ↗</span>
                      <span className="mni-visually-hidden"> — open project</span>
                    </a>
                  </h3>

                  <p className="mni-project-number" aria-hidden="true">{number}</p>

                  <div className="mni-project-content">
                    <p className="mni-project-lead">{project.lead}</p>
                    {project.summary && <p className="mni-project-summary">{project.summary}</p>}

                    <dl className="mni-project-facts">
                      <div>
                        <dt>Stack</dt>
                        <dd>{project.stack.join(' · ')}</dd>
                      </div>
                      <div>
                        <dt>Maturity</dt>
                        <dd>{project.maturity}</dd>
                      </div>
                    </dl>

                    <ul className="mni-project-links">
                      {project.live && (
                        <li>
                          <span>Live site</span>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            {project.live.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          </a>
                        </li>
                      )}
                      <li>
                        <span>Source</span>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          {project.repoName}
                        </a>
                      </li>
                      <li>
                        <span>Engineering notes</span>
                        <a href={withPrefix(project.caseStudy)}>Read case study ↗</a>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mni-section mni-archive" id="archive" aria-labelledby="archive-title">
          <div className="mni-section-kicker">
            <span>(03)</span>
            <span>Archive, {archiveProjects.length}</span>
          </div>
          <h2 id="archive-title">More projects</h2>

          <ol className="mni-archive-list" start="7">
            {archiveProjects.map((project, index) => (
              <li key={project.title}>
                <span className="mni-archive-number">{archiveNumber(index)}</span>
                <div className="mni-archive-name">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    {project.title}<span aria-hidden="true"> ↗</span>
                  </a>
                  {project.description && <p>{project.description}</p>}
                </div>
                <span className="mni-archive-language">{project.language}</span>
                <span className="mni-archive-year">{project.year}</span>
                <div className="mni-archive-links">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">Source</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live site</a>
                  )}
                  {project.reference && (
                    <a href={project.reference} target="_blank" rel="noopener noreferrer">Training</a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mni-section mni-activity" id="activity" aria-labelledby="activity-title">
          <div className="mni-section-kicker">
            <span>(04)</span>
            <span>Activity · Nov 2025 to Nov 2026</span>
          </div>
          <h2 className="mni-visually-hidden" id="activity-title">GitHub activity</h2>

          <div className="mni-activity-summary">
            <div className="mni-activity-total">
              <strong>134</strong>
              <span>contributions in the last year</span>
            </div>

            <dl className="mni-activity-stats">
              <div><dt>Active days</dt><dd>14</dd></div>
              <div><dt>Busiest week</dt><dd>112</dd></div>
              <div><dt>Longest run</dt><dd>3 days</dd></div>
            </dl>
          </div>

          <p className="mni-activity-snapshot">
            Archived reference audit snapshot · November 2025 to November 2026 (captured November 14, 2026). These figures are historical, not live.
          </p>

          {!graphFailed ? (
            <figure className="mni-contribution-figure">
              <img
                src={withPrefix('/projects/github-activity-snapshot.png')}
                alt="Archived GitHub contribution calendar for Aravind S Asok, covering November 2025 to November 2026."
                loading="eager"
                decoding="async"
                width="1354"
                height="240"
                onError={() => setGraphFailed(true)}
              />
              <figcaption>
                <span>Public contribution graph</span>
                <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">
                  View current GitHub profile ↗
                </a>
              </figcaption>
            </figure>
          ) : (
            <div className="mni-contribution-fallback">
              <p>The contribution image is unavailable at the moment.</p>
              <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">
                View current GitHub activity ↗
              </a>
            </div>
          )}
        </section>

        <section className="mni-section mni-contact" id="contact" aria-labelledby="contact-title">
          <div className="mni-section-kicker"><span>(05)</span></div>
          <h2 id="contact-title">Contact</h2>

          <div className="mni-contact-grid">
            <div className="mni-contact-social">
              <p>Write to me directly, or find me here</p>
              <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">
                <strong>GitHub</strong>
                <span>github.com/aravindsasok</span>
              </a>
              <a className="mni-contact-email" href="https://www.linkedin.com/in/aravind-asok/" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a className="mni-contact-email" href={'mailto:' + email}>{email}</a>
            </div>

            <form className="mni-contact-form" onSubmit={handleContactSubmit}>
              <p>Write a message</p>
              <div className="mni-contact-fields">
                <label>
                  <span>Name</span>
                  <input name="name" type="text" placeholder="Jane Recruiter" autoComplete="name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
                </label>
              </div>
              <label className="mni-message-field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell me about the role / project..."
                  required
                />
              </label>
              <button type="submit">Send message</button>
              <small>
                This opens a prefilled email in your email application. The site does not send or store messages.
              </small>
            </form>
          </div>
        </section>

        <footer className="mni-footer">
          <h2>Aravind S Asok</h2>
          <div className="mni-footer-meta">
            <span>© 2026 Aravind S Asok</span>
            <a href="#top">Back to top ↑</a>
            <span>Backend Engineering · Applied AI</span>
          </div>
          <div className="mni-footer-social">
            <a href="https://github.com/AravindSAsok" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/aravind-asok/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={'mailto:' + email}>Email ↗</a>
                      </div>
        </footer>
      </main>

      <a className="mni-contact-launcher" href="#contact" aria-label="Jump to contact form">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.4-3.1A7.5 7.5 0 1 1 20 11.5Z" />
        </svg>
      </a>
    </div>
  );
};

export default Portfolio;
