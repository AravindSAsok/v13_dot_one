import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
          }
        }
      }
    `,
  );

  const { defaultTitle, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname.replace(/^\/v13_dot_one(?=\/|$)/, '')}`,
  };
  const titleTemplate = seo.title === defaultTitle ? '%s' : `%s | ${defaultTitle}`;
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aravind S Asok',
    jobTitle: 'AI & Backend Engineer',
    url: 'https://aravindsasok.github.io/v13_dot_one/',
    sameAs: ['https://github.com/AravindSAsok', 'https://www.linkedin.com/in/aravind-asok/'],
    knowsAbout: ['Node.js', 'NestJS', 'Python', 'Backend Engineering', 'Applied AI', 'Retrieval-Augmented Generation', 'Model Context Protocol', 'PostgreSQL', 'TypeScript', 'React'],
  };

  return (
    <Helmet title={seo.title} defaultTitle={defaultTitle} titleTemplate={titleTemplate}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="author" content="Aravind S Asok" />
      <link rel="canonical" href={seo.url} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aravind S Asok" />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
