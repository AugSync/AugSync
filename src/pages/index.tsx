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
import { metaTagsFragment } from 'lib/graph-fragments';

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
        allArticles(first: 10) {
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
          }
          _allContentLocales {
            locale
          }
        }
        allProjects(first: 10) {
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
