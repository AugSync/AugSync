import { IPageSeo, ISite, makeRequest } from 'lib/dato-cms-service';
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
      }
    `,
  };

  return {
    props: {
      subscription: {
        enabled: false,
        initialData: await makeRequest(graphqlRequest),
      },
    },
    revalidate: 3600,
  };
}

export default function PortfolioPage({ subscription }) {
  const {
    data: { site, portfolio },
  }: {
    data: { site: ISite; portfolio: IPageSeo };
  } = useQuerySubscription(subscription);

  const metaTags = portfolio.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Portfolio />
    </>
  );
}
