import Home from 'views/Home';
import { renderMetaTags } from 'react-datocms';
import {
  makeRequest,
  IAllArticles,
  ISite,
  IPageSeo,
  IAllProjects,
} from 'lib/dato-cms-service';
import Head from 'next/head';
import { metaTagsFragment, responsiveImageFragment } from 'lib/graph-fragments';

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        home {
          title
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        allArticles(first: 10, orderBy: _createdAt_DESC) {
          id
          slug
          _createdAt
          title
          seo {
            description
            title
          }
          openGraph {
            id
            url
            alt
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 800, h: 400 }) {
              ...responsiveImageFragment
            }
          }
          _allContentLocales {
            locale
          }
        }
        allProjects(first: 10, orderBy: _createdAt_DESC) {
          id
          slug
          _createdAt
          title
          seo {
            description
            title
          }
          openGraph {
            id
            url
            alt
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 800, h: 400 }) {
              ...responsiveImageFragment
            }
          }
          tags {
            id
            title
          }
          _allContentLocales {
            locale
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
  };

  let initialData = await makeRequest(graphqlRequest);

  initialData.allProjects = initialData.allProjects.map((project) => ({
    ...project,
    // Generate random boolean value
    isFullHeight: Boolean(Math.round(Math.random())),
  }));

  return {
    props: {
      subscription: {
        enabled: false,
        initialData,
      },
    },
    revalidate: 3600,
  };
}

export default function HomePage({ subscription }) {
  const {
    data: { allArticles, allProjects, site, home },
  }: {
    data: {
      allArticles: IAllArticles;
      allProjects: IAllProjects;
      site: ISite;
      home: IPageSeo;
    };
  } = { data: subscription.initialData };

  const metaTags = home.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Home allArticles={allArticles} allProjects={allProjects} />
    </>
  );
}
