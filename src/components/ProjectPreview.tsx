import Image from 'next/image';
import Link from 'next/link';
import { PoweredByBadge, ReactionsBadge } from 'components/Badges';

interface ProjectPreviewProps {
  title: string;
  description: string;
  date: string;
  languages: string;
  reactions: number;
  image: string;
  altImage: string;
  heightType?: string;
}

export default function ProjectPreview({
  title,
  description,
  date,
  languages,
  reactions,
  image,
  altImage,
  heightType,
}: ProjectPreviewProps) {
  return (
    <div>
      <Link href="/portfolio/example">
        <a
          className="relative z-0 flex-auto block w-full transition bg-green-dark ring-blue-light hover:ring-4 hover:z-10 hover:shadow-2xl"
          style={{ height: heightType === 'full' ? '48rem' : '24rem' }}
        >
          <Image
            src={image}
            alt={altImage}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute flex justify-between w-auto top-4 right-4">
            <PoweredByBadge languages={languages} containerStyle="py-2" />
            <ReactionsBadge reactions={reactions} containerStyle="py-2" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 w-full p-5 bg-green-dark bg-opacity-80">
            <h2 className="text-xl text-blue font-play">{title}</h2>
            <p className="text-base text-orange font-ubuntu">{description}</p>
            <p className="mt-2 text-sm text-white font-ubuntu">{date}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
