/* eslint-disable react/button-has-type */
import { useRouter } from 'next/router';
import Header from 'components/Header';
import Image from 'next/image';
import Icon from 'assets/icons';

export default function Contact() {
  const router = useRouter();

  return (
    <>
      <Header />
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
      <h1 className="my-10 text-xl text-center font-play text-blue">
        Contact Me
      </h1>
    </>
  );
}
