import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Head } from '@components';
import { GlobalStyle, theme } from '@styles';

const Resume = styled.main`
  min-height: 100vh;
  padding: 44px 24px 80px;
  background: #f5f4ef;
  color: #172334;
  font-family: Arial, sans-serif;
  .sheet { width: min(900px, 100%); margin: 0 auto; padding: clamp(28px, 6vw, 64px); background: #fff; box-shadow: 0 18px 70px rgba(15,25,40,.08); }
  .actions { display: flex; justify-content: space-between; gap: 16px; width: min(900px, 100%); margin: 0 auto 18px; }
  .actions a, .actions button { border: 1px solid #cbd2d9; background: #fff; color: #172334; padding: 10px 14px; cursor: pointer; font-size: 12px; text-decoration: none; }
  h1 { margin: 0; font-size: clamp(34px, 6vw, 48px); letter-spacing: -.05em; }
  .role { margin: 5px 0 10px; color: #47745d; font-size: 13px; font-weight: 700; letter-spacing: .12em; }
  .contact { color: #536173; font-size: 12px; line-height: 1.7; }
  .contact a { color: inherit; }
  section { margin-top: 25px; }
  h2 { margin: 0 0 10px; padding-bottom: 6px; border-bottom: 1px solid #d8dee5; color: #47745d; font-size: 12px; letter-spacing: .13em; text-transform: uppercase; }
  p { margin: 4px 0; font-size: 13px; line-height: 1.6; }
  .entry { margin: 12px 0 14px; }
  .entry-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; font-size: 14px; font-weight: 700; }
  .entry-sub { margin-top: 2px; color: #5d6877; font-size: 12px; }
  ul { margin: 7px 0 0; padding-left: 18px; }
  li { margin: 3px 0; font-size: 12px; line-height: 1.5; }
  .skills { display: grid; grid-template-columns: 1fr 1fr; gap: 14px 26px; }
  .skills p { font-size: 12px; }
  .project-title { font-weight: 700; }
  @media(max-width:600px) { .sheet { padding: 25px 20px; } .skills { grid-template-columns: 1fr; } }
  @media print {
    @page { size: A4; margin: 12mm; }
    body, html { background: #fff !important; }
    .actions { display: none !important; }
    .sheet { width: 100%; padding: 0; box-shadow: none; }
    section { break-inside: avoid; }
    a { color: inherit !important; text-decoration: none; }
  }
`;

const ResumePage = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Head title="Resume — Aravind S Asok" description="Backend / AI Engineer with 5+ years of experience in Node.js, NestJS, Python, applied AI, and backend systems." />
      <Helmet><meta name="robots" content="noindex,follow" /></Helmet>
      <div className="resume-page">
        <div className="actions">
          <a href="/">← Back to portfolio</a>
          <button type="button" onClick={() => window.print()}>Print / Save as PDF ↗</button>
        </div>
        <Resume>
          <div className="sheet">
            <h1>Aravind S Asok</h1>
            <p className="role">BACKEND / AI ENGINEER</p>
            <p className="contact">+91 9746671395 · aravindsasok@outlook.com · Trivandrum, Kerala, India<br />
              <a href="https://www.linkedin.com/in/aravind-asok/">LinkedIn</a> · <a href="https://github.com/AravindSAsok">GitHub</a> · <a href="https://aravindsasok.netlify.app/">Portfolio</a>
            </p>

            <section>
              <h2>Summary</h2>
              <p>Backend / AI Engineer with 5+ years building production systems in Node.js, NestJS and Python. Currently building AI-powered features on AWS (Amazon Bedrock) with containerized services. Hands-on experience with multi-LLM integrations (OpenAI, Claude), RAG, agentic workflows and MCP.</p>
            </section>

            <section>
              <h2>Experience</h2>
              <div className="entry">
                <div className="entry-head"><span>Software Engineer · AINEX</span><span>2026 – Present</span></div>
                <p className="entry-sub">Trivandrum, India (Onsite)</p>
                <ul>
                  <li>Re-engineered high-throughput REST APIs and PostgreSQL data pipelines using query optimization, targeted indexing, and improved data-access patterns.</li>
                  <li>Build and maintain Node.js / NestJS backend services, containerized with Docker and deployed on AWS.</li>
                  <li>Develop AI-powered features using Amazon Bedrock and large language models to automate business workflows.</li>
                  <li>Collaborate on architecture, code reviews, and production releases.</li>
                </ul>
              </div>
              <div className="entry">
                <div className="entry-head"><span>Software Engineer · Revyrie Global</span><span>2021 – 2025</span></div>
                <p className="entry-sub">Technopark, Trivandrum, India</p>
                <ul>
                  <li>Built and maintained Node.js and Python backend services and REST APIs powering production applications.</li>
                  <li>Integrated Stripe payments and third-party APIs; implemented authentication and role-based access control.</li>
                  <li>Designed PostgreSQL / MySQL schemas, optimized SQL queries, containerized services with Docker, and supported CI/CD.</li>
                </ul>
              </div>
              <div className="entry">
                <div className="entry-head"><span>Jr. Software Engineer · GDS Technologies Limited</span><span>2020 – 2021</span></div>
                <p className="entry-sub">Trivandrum, India</p>
                <ul>
                  <li>Built Node.js backend services and REST APIs connecting frontend interfaces to application logic.</li>
                  <li>Designed relational schemas, wrote SQL queries, and contributed to testing and code reviews.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2>Selected projects</h2>
              <div className="entry">
                <p className="project-title">Multi-Agent Workflow Automation Platform · Python, FastAPI, LangChain, MCP, OpenAI, Claude</p>
                <p>Built an orchestration engine coordinating multiple LLM agents for multi-step business tasks via MCP tool servers; designed schema and APIs for an agent-run monitoring dashboard.</p>
              </div>
              <div className="entry">
                <p className="project-title">AI-Powered Practice Management Suite · Node.js, NestJS, PostgreSQL, Stripe, LLM APIs</p>
                <p>Built the backend and database layer for a SaaS platform for CA/accounting firms; designed REST APIs and an AI agent for financial-document extraction, with Stripe billing.</p>
              </div>
            </section>

            <section>
              <h2>Technical skills</h2>
              <div className="skills">
                <p><b>AI / LLM</b><br />Amazon Bedrock, OpenAI, Anthropic Claude, RAG, LangChain, agentic workflows, MCP, prompt engineering</p>
                <p><b>Languages</b><br />TypeScript, JavaScript, Python, SQL</p>
                <p><b>Backend</b><br />Node.js, NestJS, Express, FastAPI, Flask, REST APIs</p>
                <p><b>Databases</b><br />PostgreSQL, MySQL, MongoDB</p>
                <p><b>Cloud & DevOps</b><br />AWS, GCP, Docker, GitHub Actions, CI/CD</p>
                <p><b>Integrations & Frontend</b><br />Stripe, OAuth, React, Next.js, Redux</p>
              </div>
            </section>

            <section>
              <h2>Education</h2>
              <p><b>Bachelor's Degree in Computer Science</b> · University of Kerala · 2017–2020</p>
              <p><b>Diploma in Computer Application</b> · CDIT</p>
            </section>
          </div>
        </Resume>
      </div>
    </>
  </ThemeProvider>
);

export default ResumePage;
