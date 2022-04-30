import tiny from 'tiny-json-http';
import { IResponsiveImage } from './graph-fragments';

export type IMakeRequest = {
  query: string;
  variables?: { [key: string]: any };
  preview?: boolean;
};

export type IArticle = {
  id: string;
  slug: string;
  _createdAt: string;
  title: string;
  content: string;
  seo: ISeo;
  seoTags: IAttribute[];
  tags: ITag[];
  openGraph: IOpenGraph;
  _allContentLocales: ILang[];
};

export type IProject = {
  id: string;
  slug: string;
  _createdAt: string;
  title: string;
  content: string;
  seo: ISeo;
  seoTags: IAttribute[];
  tags: ITag[];
  openGraph: IOpenGraph;
  _allContentLocales: ILang[];
  seeInOperationUrl: string;
  githubUrl: string;
  isFullHeight: boolean;
};

export type ITag = {
  id: string;
  title: string;
};

export type ILang = {
  locale: string;
};

export type IOpenGraph = {
  id: string;
  url: string;
  alt: string;
  responsiveImage: IResponsiveImage;
};

export type ISeo = {
  description: string;
  title: string;
};

export type IAllArticles = IArticle[];
export type IAllProjects = IProject[];

export type IPageSeo = {
  title: string;
  seo: IAttribute[];
};

export type ISite = {
  favicon: IAttribute[];
};

export type IAttribute = {
  attributes: {
    sizes: string;
    type: string;
    rel: string;
    href: string;
  };
  content: null;
  tag: string;
};

export async function makeRequest({ query, variables, preview }: IMakeRequest) {
  let endpoint = 'https://graphql.datocms.com';

  /* if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.NEXT_DATOCMS_ENVIRONMENT}`;
  } */

  if (preview) {
    endpoint += `/preview`;
  }

  const { body } = await tiny.post({
    url: endpoint,
    headers: {
      authorization: `Bearer ${process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN}`,
    },
    data: {
      query,
      variables,
    },
  });

  if (body.errors) {
    console.error('Ouch! The query has some errors!');
    throw body.errors;
  }

  return body.data;
}
