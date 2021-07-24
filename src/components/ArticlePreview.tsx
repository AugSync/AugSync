import Icon from 'assets/icons';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectPreviewProps {
  title: string;
  description: string;
  date: string;
  lang: string;
  reactions: number;
  image: string;
  altImage: string;
}

export default function ProjectPreview({
  title,
  description,
  date,
  lang,
  reactions,
  image,
  altImage,
}: ProjectPreviewProps) {
  return (
    <div>
      <Link href="/blog/example">
        <a className="relative z-0 block w-full transition bg-green-dark h-96 ring-blue-light hover:ring-4 hover:z-10 hover:shadow-2xl">
          <Image
            src={image}
            alt={altImage}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute flex justify-between w-auto h-12 top-4 right-4">
            <div className="flex items-center justify-between w-auto h-auto p-4 bg-green-dark">
              <Icon name="flag" />
              <p className="ml-2 text-base text-white font-ubuntu">{lang}</p>
            </div>
            <div className="flex items-center justify-between w-auto h-auto p-4 ml-2 bg-orange-light">
              <Icon name="face" />
              <p className="ml-2 text-base text-white font-ubuntu">
                {reactions}
              </p>
            </div>
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
