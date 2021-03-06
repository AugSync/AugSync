import SocialMediaBar from 'components/SocialMediaBar';

export default function Header() {
  return (
    <header className="bg-green-dark">
      <nav className="container flex justify-between px-4 m-auto">
        <div className="flex items-center justify-center">
          <p className="my-6 text-sm text-blue font-ubuntu">
            Augusto Barco | Full Stack Developer
          </p>
        </div>
        <SocialMediaBar />
      </nav>
    </header>
  );
}
