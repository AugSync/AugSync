import Icon from 'assets/icons';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectPreviewProps {
  title: string;
  description: string;
  date: string;
  languajes: string;
  reactions: number;
  image: string;
  altImage: string;
  heightType?: string;
}

export default function ProjectPreview({
  title,
  description,
  date,
  languajes,
  reactions,
  image,
  altImage,
  heightType,
}: ProjectPreviewProps) {
  return (
    <Link href="/">
      <a
        className="flex-auto transition bg-green-dark w-4/12 relative ring-blue-light hover:ring-4 z-0 hover:z-10 hover:shadow-2xl"
        style={{ height: heightType === 'full' ? '48rem' : '24rem' }}
      >
        <Image
          src={image}
          alt={altImage}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="w-auto h-12 absolute top-4 right-4 flex justify-between">
          <div className="bg-green-dark flex justify-between items-center h-auto w-auto p-4">
            <p className="text-white text-base font-ubuntu ml-2">
              {languajes}
            </p>
          </div>
          <div className="bg-orange-light flex justify-between items-center h-auto w-auto p-4 ml-2">
            <Icon name="face" />
            <p className="text-white text-base font-ubuntu ml-2">{reactions}</p>
          </div>
        </div>
        <div className="bg-green-dark bg-opacity-80 w-full absolute bottom-0 left-0 right-0 p-5">
          <h2 className="text-blue text-xl font-play">{title}</h2>
          <p className="text-orange text-base font-ubuntu">{description}</p>
          <p className="text-white text-sm font-ubuntu mt-2">{date}</p>
        </div>
      </a>
    </Link>
  );
}
