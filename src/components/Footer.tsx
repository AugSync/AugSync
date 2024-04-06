import SocialMediaBar from 'components/SocialMediaBar';

export default function Footer() {
  return (
    <footer className="bg-green-dark">
      <div className="container flex justify-between m-auto bg-green-dark px-7">
        <div className="flex items-center justify-center">
          <p className="my-6 text-sm text-blue font-ubuntu">
            Augusto Barco | Software Developer
          </p>
        </div>
        <SocialMediaBar />
      </div>
    </footer>
  );
}
