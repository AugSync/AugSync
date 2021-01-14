import Button from 'components/Button';
import SocialMediaBar from 'components/SocialMediaBar';

export default function Header() {
  return (
    <header className="bg-green-dark">
      <nav className="container px-4 flex justify-between">
        <div className="flex justify-center items-center">
          <Button icon="home" isActive title="Home" />
          <Button icon="document" title="Blog" />
          <Button icon="folder" title="Portfolio" />
          <Button icon="mail" title="Contact" />
        </div>
        <SocialMediaBar />
      </nav>
    </header>
  );
}
