import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Head } from '@components';
import { GlobalStyle, theme } from '@styles';
import { ThemeProvider } from 'styled-components';

const Page = styled.main`
  min-height: 100vh;
  padding: 54px max(24px, calc((100vw - 980px) / 2)) 100px;
  background: #0a0a0a;
  color: #ece8df;
  font-family: 'Geist', system-ui, sans-serif;
  line-height: 1.7;
  .back { display: inline-flex; margin-bottom: 70px; color: #aaa69d; font: 12px ui-monospace, monospace; }
  .eyebrow { color: #a8b890; font: 12px ui-monospace, monospace; letter-spacing: .12em; text-transform: uppercase; }
  h1 { max-width: 850px; margin: 18px 0; font-size: clamp(42px, 8vw, 88px); line-height: 1; letter-spacing: -.06em; }
  .summary { max-width: 720px; color: #aaa69d; font-size: clamp(18px, 2vw, 22px); }
  .meta { display: flex; flex-wrap: wrap; gap: 10px; margin: 28px 0 50px; }
  .meta span { padding: 7px 10px; border: 1px solid rgba(236,232,223,.18); color: #c9c4b9; font: 11px ui-monospace, monospace; }
  .architecture { max-width: 900px; margin: 0 0 58px; }
  .architecture h2 { margin: 0 0 18px; font-size: 18px; }
  .flow { display: flex; flex-wrap: wrap; gap: 8px; }
  .flow button { border: 1px solid rgba(236,232,223,.2); background: transparent; color: #aaa69d; padding: 10px 12px; cursor: pointer; font: 11px ui-monospace, monospace; }
  .flow button[aria-pressed='true'] { border-color: #a8b890; color: #ece8df; background: rgba(168,184,144,.1); }
  .flow-detail { min-height: 54px; margin-top: 16px; padding: 14px 16px; border-left: 2px solid #a8b890; background: rgba(236,232,223,.035); color: #c9c4b9; }
  .actions { display: flex; flex-wrap: wrap; gap: 18px; margin-bottom: 64px; }
  .actions a { color: #ece8df; border-bottom: 1px solid rgba(236,232,223,.4); padding-bottom: 5px; }
  article { max-width: 760px; border-top: 1px solid rgba(236,232,223,.16); padding-top: 30px; }
  article h2 { margin: 38px 0 12px; color: #ece8df; font-size: 23px; letter-spacing: -.03em; }
  article p, article li { color: #aaa69d; font-size: 16px; }
  article ul { padding-left: 22px; }
  article a { color: #ece8df; text-decoration: underline; text-underline-offset: 4px; }
  .bottom { display: flex; justify-content: space-between; gap: 20px; max-width: 760px; margin-top: 70px; padding-top: 22px; border-top: 1px solid rgba(236,232,223,.16); font: 12px ui-monospace, monospace; }
  @media(max-width:600px) { padding-top: 30px; .back { margin-bottom: 48px; } .bottom { flex-direction: column; } }
`;

const CaseStudyTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const [activeStep, setActiveStep] = useState(0);
  const architecture = frontmatter.architecture || [];
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Head title={frontmatter.title} description={frontmatter.summary} />
        <Helmet><meta property="og:type" content="article" /></Helmet>
        <Page>
          <Link className="back" to="/">← Back to portfolio</Link>
          <p className="eyebrow">{frontmatter.category} / Case study</p>
          <h1>{frontmatter.title}</h1>
          <p className="summary">{frontmatter.summary}</p>
          <div className="meta">{frontmatter.stack.map(item => <span key={item}>{item}</span>)}</div>
          <section className="architecture" aria-labelledby="architecture-title">
            <h2 id="architecture-title">Architecture explorer</h2>
            <div className="flow">
              {architecture.map((step, index) => (
                <button key={step} type="button" aria-pressed={activeStep === index} onClick={() => setActiveStep(index)}>
                  {String(index + 1).padStart(2, '0')} / {step}
                </button>
              ))}
            </div>
            <p className="flow-detail" aria-live="polite">{architecture[activeStep] || 'Architecture notes are not available for this project.'}</p>
          </section>
          <div className="actions">
            <a href={frontmatter.repo} target="_blank" rel="noopener noreferrer">Source code ↗</a>
            {frontmatter.demo && <a href={frontmatter.demo} target="_blank" rel="noopener noreferrer">Live application ↗</a>}
          </div>
          <article dangerouslySetInnerHTML={{ __html: html }} />
          <div className="bottom">
            <span>{frontmatter.maturity}</span>
            <Link to="/">Return to selected work ↑</Link>
          </div>
        </Page>
      </>
    </ThemeProvider>
  );
};

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        summary
        stack
        repo
        demo
        maturity
        architecture
      }
    }
  }
`;
