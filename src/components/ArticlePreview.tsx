import Image from 'next/image';
import Link from 'next/link';
import { LangBadge /* , ReactionsBadge */ } from 'components/Badges';
import { IArticle, ILang } from 'lib/dato-cms-service';
import { getLang } from 'utils';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { capitalize } from 'lodash';

interface ProjectPreviewProps {
  article: IArticle;
}

export default function ProjectPreview({ article }: ProjectPreviewProps) {
  return (
    <div>
      <Link href={`/blog/${article.slug}`}>
        <a className="relative z-0 block w-full transition bg-green-dark h-96 ring-blue-light hover:ring-4 hover:z-10 hover:shadow-2xl">
          <Image
            src={article.openGraph.url}
            alt={article.openGraph.alt}
            layout="fill"
            objectFit="cover"
            className="z-0"
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
              {article.seo.description}
            </p>
            <p className="mt-2 text-sm text-white font-ubuntu">
              {capitalize(
                format(new Date(article._createdAt), 'MMMM dd yyyy', {
                  locale: es,
                })
              )}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
