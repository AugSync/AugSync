import { IArticle, ISite, makeRequest } from 'lib/dato-cms-service';
import { metaTagsFragment, responsiveImageFragment } from 'lib/graph-fragments';
import Error from 'next/error';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import Article from 'views/Blog/Article';

export default function Post({ subscription }) {
  const {
    data: { article, site },
  }: {
    data: { article: IArticle; site: ISite };
  } = { data: subscription.initialData };

  if (article === null) {
    return <Error statusCode={404} />;
  }

  const metaTags = article.seoTags.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Article article={article} />
    </>
  );
}

export async function getStaticPaths() {
  const { allArticles }: { allArticles: IArticle[] } = await makeRequest({
    query: `{ allArticles { slug } }`,
  });

  return {
    paths: allArticles.map((post) => `/blog/${post.slug}`),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const graphqlRequest = {
    query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        article(filter: {slug: {eq: $slug}}) {
          id
          title
          seo {
            description
          }
          content
          openGraph {
            url
            alt
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1920, h: 1080 }) {
              ...responsiveImageFragment
            }
          }
          _allContentLocales {
            locale
          }
          tags {
            id
            title
          }
          seoTags: _seoMetaTags {
            attributes
            content
            tag
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    variables: {
      slug: params.slug,
    },
  };

  const initialData = await makeRequest(graphqlRequest);

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
