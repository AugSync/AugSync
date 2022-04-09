import {
  IAllArticles,
  IPageSeo,
  ISite,
  makeRequest,
} from 'lib/dato-cms-service';
import { metaTagsFragment } from 'lib/graph-fragments';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import Blog from 'views/Blog';

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        blog {
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

      ${metaTagsFragment}
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
  } = { data: subscription.initialData };

  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Blog allArticles={allArticles} />
    </>
  );
}
