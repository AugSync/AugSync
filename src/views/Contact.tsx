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
          className="bg-orange-dark absolute z-20 text-white font-ubuntu text-base px-4 py-2 flex justify-center items-center top-7 left-7"
          onClick={() => router.back()}
        >
          <Icon name="back" className="mr-2 w-10" width="1.5rem" />
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
      <h1 className="font-play text-blue my-10 text-center text-xl">
        Contact Me
      </h1>
    </>
  );
}
