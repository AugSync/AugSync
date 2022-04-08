import tiny from 'tiny-json-http';

export type IMakeRequest = {
  query: string;
  variables?: { [key: string]: any };
  preview?: boolean;
};

export type IArticle = {
  id: string;
  _createdAt: string;
  title: string;
  seo: ISeo;
  openGraph: IOpenGraph;
  _allContentLocales: ILang[];
};

export type ILang = {
  locale: string;
};

export type IOpenGraph = {
  id: string;
  url: string;
  alt: string;
};

export type ISeo = {
  description: string;
  title: string;
};

export type IAllArticles = IArticle[];

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
