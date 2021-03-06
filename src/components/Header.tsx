import LinkButton from 'components/LinkButton';
import SocialMediaBar from 'components/SocialMediaBar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-dark">
      <nav className="container flex justify-between px-4 m-auto">
        <div className="flex items-center justify-center">
          <Link href="/" passHref>
            <LinkButton icon="home" title="Home" activeByRoute />
          </Link>
          <Link href="/blog" passHref>
            <LinkButton icon="document" title="Blog" activeByRoute />
          </Link>
          <Link href="/portfolio" passHref>
            <LinkButton icon="folder" title="Portfolio" activeByRoute />
          </Link>
          <Link href="/contact" passHref>
            <LinkButton icon="mail" title="Contact" activeByRoute />
          </Link>
        </div>
        <SocialMediaBar />
      </nav>
    </header>
  );
}
