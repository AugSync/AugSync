import {
  IAllArticles,
  IPageSeo,
  ISite,
  makeRequest,
} from 'lib/dato-cms-service';
import Head from 'next/head';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import Blog from 'views/Blog';

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        blog {
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
        allArticles {
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

export default function BlogPage({ subscription }) {
  const {
    data: { allArticles, site, blog },
  }: {
    data: { allArticles: IAllArticles; site: ISite; blog: IPageSeo };
  } = useQuerySubscription(subscription);

  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Blog allArticles={allArticles} />
    </>
  );
}
