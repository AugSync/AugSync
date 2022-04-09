import { IPageSeo, ISite, makeRequest } from 'lib/dato-cms-service';
import { metaTagsFragment } from 'lib/graph-fragments';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import Contact from 'views/Contact';

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        contact {
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
      }

      ${metaTagsFragment}
    `,
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

export default function ContactPage({ subscription }) {
  const {
    data: { site, contact },
  }: {
    data: { site: ISite; contact: IPageSeo };
  } = { data: subscription.initialData };

  const metaTags = contact.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Contact />
    </>
  );
}
