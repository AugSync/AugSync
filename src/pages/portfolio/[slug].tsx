import {
  IAllProjects,
  IProject,
  ISite,
  makeRequest,
} from 'lib/dato-cms-service';
import { metaTagsFragment, responsiveImageFragment } from 'lib/graph-fragments';
import Error from 'next/error';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import Project from 'views/Portfolio/Project';

export default function ProjectView({ subscription }) {
  const {
    data: { project, site },
  }: {
    data: { project: IProject; site: ISite };
  } = { data: subscription.initialData };

  if (project === null) {
    return <Error statusCode={404} />;
  }

  const metaTags = project.seoTags.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Project project={project} />
    </>
  );
}

export async function getStaticPaths() {
  const { allProjects }: { allProjects: IAllProjects } = await makeRequest({
    query: `{ allProjects { slug } }`,
  });

  return {
    paths: allProjects.map((post) => `/portfolio/${post.slug}`),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const graphqlRequest = {
    query: `
      query ProjectBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        project(filter: {slug: {eq: $slug}}) {
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
          seeInOperationUrl
          githubUrl
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
