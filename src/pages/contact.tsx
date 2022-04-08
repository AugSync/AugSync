import { IPageSeo, ISite, makeRequest } from 'lib/dato-cms-service';
import Head from 'next/head';
import { renderMetaTags, useQuerySubscription } from 'react-datocms';
import Contact from 'views/Contact';

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        contact {
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

export default function ContactPage({ subscription }) {
  const {
    data: { site, contact },
  }: {
    data: { site: ISite; contact: IPageSeo };
  } = useQuerySubscription(subscription);

  const metaTags = contact.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Contact />
    </>
  );
}
