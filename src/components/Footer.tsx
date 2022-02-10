import SocialMediaBar from 'components/SocialMediaBar';

export default function Footer() {
  return (
    <footer className="container flex justify-between px-4 m-auto bg-green-dark">
      <div className="flex items-center justify-center">
        <p className="my-6 text-sm text-blue font-ubuntu">
          Augusto Barco | Full Stack Developer
        </p>
      </div>
      <SocialMediaBar />
    </footer>
  );
}
