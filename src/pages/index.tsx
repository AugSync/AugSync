import Home from 'views/Home';
import { useQuerySubscription } from 'react-datocms';
import { makeRequest, IAllArticles } from 'lib/dato-cms-service';

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      {
        allArticles(first: 10) {
          id
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

    revalidate: 10,
  };
}

export default function HomePage({ subscription }) {
  const {
    data: { allArticles },
  }: { data: { allArticles: IAllArticles } } = useQuerySubscription(
    subscription
  );

  return <Home allArticles={allArticles} />;
}
