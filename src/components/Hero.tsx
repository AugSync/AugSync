import Image from 'next/image';
import React from 'react';
import Icon from 'assets/icons';
import { useRouter } from 'next/router';
import { IResponsiveImage } from 'lib/graph-fragments';
import { Image as DatoImage } from 'react-datocms';

export default function Hero({
  url,
  alt,
  responsiveImage,
}: {
  url?: string;
  alt: string;
  responsiveImage?: IResponsiveImage;
}) {
  const router = useRouter();

  return (
    <div className="relative w-full" style={{ height: '30rem' }}>
      <button
        className="absolute z-20 flex items-center justify-center px-4 py-2 text-base text-white bg-orange-dark font-ubuntu top-7 left-7"
        onClick={() => router.back()}
      >
        <Icon name="back" className="w-10 mr-2" width="1.5rem" />
        Back
      </button>
      {responsiveImage ? (
        <DatoImage
          data={{
            ...responsiveImage,
            alt,
          }}
          className="w-full h-full"
          pictureStyle={{ objectFit: 'cover' }}
        />
      ) : (
        <Image
          src={url}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
      )}
    </div>
  );
}
