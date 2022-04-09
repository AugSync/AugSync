import Image from 'next/image';
import Link from 'next/link';
import { PoweredByBadge, ReactionsBadge } from 'components/Badges';
import { IProject, ITag } from 'lib/dato-cms-service';
import { capitalize, takeRight, truncate } from 'lodash';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ProjectPreviewProps {
  project: IProject;
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div>
      <Link href={`/portfolio/${project.slug}`}>
        <a
          className="relative z-0 flex-auto block w-full transition bg-green-dark ring-blue-light hover:ring-4 hover:z-10 hover:shadow-2xl"
          style={{
            height: project.isFullHeight ? '48rem' : '24rem',
          }}
        >
          <Image
            src={project.openGraph.url}
            alt={project.openGraph.alt}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute flex flex-wrap justify-end w-auto top-4 right-4">
            {project.tags.map((tag: ITag) => (
              <div key={tag.id} className="mb-3 ml-3">
                <PoweredByBadge languages={capitalize(tag.title)} />
              </div>
            ))}
            {/* For now this option is disabled */}
            {/* <ReactionsBadge reactions={reactions} containerStyle="py-2" /> */}
          </div>
          <div className="absolute bottom-0 left-0 right-0 w-full p-5 bg-green-dark bg-opacity-80">
            <h2 className="text-xl text-blue font-play">{project.title}</h2>
            <p className="text-base text-orange font-ubuntu">
              {!project.isFullHeight
                ? truncate(project.seo.description, { length: 90 })
                : project.seo.description}
            </p>
            <p className="mt-2 text-sm text-white font-ubuntu">
              {capitalize(
                format(new Date(project._createdAt), 'MMMM dd yyyy', {
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
