import Home from 'views/Home';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import {
  makeRequest,
  IAllArticles,
  ISite,
  IPageSeo,
} from 'lib/dato-cms-service';
import Head from 'next/head';

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        home {
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

export default function HomePage({ subscription }) {
  const {
    data: { allArticles, site, home },
  }: {
    data: { allArticles: IAllArticles; site: ISite; home: IPageSeo };
  } = useQuerySubscription(subscription);

  const metaTags = home.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Home allArticles={allArticles} />
    </>
  );
}
