/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import { LangBadge /* , ReactionsBadge */ } from 'components/Badges';
import { IArticle } from 'lib/dato-cms-service';
import { getLang } from 'utils';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { capitalize, truncate } from 'lodash';
import { Image } from 'react-datocms';

interface ProjectPreviewProps {
  article: IArticle;
}

export default function ProjectPreview({ article }: ProjectPreviewProps) {
  return (
    <div>
      <Link
        href={`/blog/${article.slug}`}
        className="relative z-0 block w-full transition bg-green-dark h-96 ring-blue-light hover:ring-4 hover:z-10 hover:shadow-2xl"
        passHref
      >
        <Image
          data={{
            ...article.openGraph.responsiveImage,
            alt: `Cover Image for ${article.title}`,
          }}
          className="w-full h-full"
          pictureStyle={{ objectFit: 'cover' }}
        />
        <div className="absolute flex justify-between w-auto top-4 right-4">
          {article._allContentLocales.map((lang) => (
            <LangBadge
              key={lang.locale}
              lang={getLang(lang.locale)}
              containerStyle="py-2"
            />
          ))}
          {/* For now ill not use this component */}
          {/* <ReactionsBadge reactions={reactions} containerStyle="py-2" /> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full p-5 bg-green-dark bg-opacity-80">
          <h2 className="text-xl text-blue font-play">{article.title}</h2>
          <p className="text-base text-orange font-ubuntu">
            {truncate(article.seo.description, { length: 90 })}
          </p>
          <p className="mt-2 text-sm text-white font-ubuntu">
            {capitalize(
              format(new Date(article._createdAt), 'MMMM dd yyyy', {
                locale: es,
              })
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}
