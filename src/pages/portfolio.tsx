import {
  IAllProjects,
  IPageSeo,
  ISite,
  makeRequest,
} from 'lib/dato-cms-service';
import Head from 'next/head';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import Portfolio from 'views/Portfolio';

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        portfolio {
          title
          seo: _seoMetaTags {
            attributes
            content
            tag
          }
        }
        site: _site {
          favicon: faviconMetaTags {
            attributes
            content
            tag
          }
        }
        allProjects {
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
  } = useQuerySubscription(subscription);

  const metaTags = portfolio.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Portfolio allProjects={allProjects} />
    </>
  );
}
