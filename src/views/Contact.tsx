import Header from 'components/Header';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="relative w-full" style={{ height: '30rem' }}>
        <Image
          src="/images/contact.jpg"
          alt="Person contacting to anybody"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
}
