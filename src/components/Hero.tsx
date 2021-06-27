/* eslint-disable react/button-has-type */
import Image from 'next/image';
import React from 'react';
import Icon from 'assets/icons';
import { useRouter } from 'next/router';

export default function Hero() {
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
      <Image
        src="/images/contact.jpg"
        alt="Person contacting to anybody"
        layout="fill"
        objectFit="cover"
        className="z-10"
      />
    </div>
  );
}
