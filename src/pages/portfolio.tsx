import {
  IAllProjects,
  IPageSeo,
  ISite,
  makeRequest,
} from 'lib/dato-cms-service';
import { metaTagsFragment, responsiveImageFragment } from 'lib/graph-fragments';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import Portfolio from 'views/Portfolio';

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        portfolio {
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
        allProjects(orderBy: _createdAt_DESC) {
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

export default function PortfolioPage({ subscription }) {
  const {
    data: { site, portfolio, allProjects },
  }: {
    data: { site: ISite; portfolio: IPageSeo; allProjects: IAllProjects };
  } = { data: subscription.initialData };

  const metaTags = portfolio.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Portfolio allProjects={allProjects} />
    </>
  );
}
