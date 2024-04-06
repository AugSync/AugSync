import LinkButton from 'components/LinkButton';
import SocialMediaBar from 'components/SocialMediaBar';
import Link from 'next/link';
import { useContext } from 'react';
import { GlobalStateContext } from 'context/GlobalStateContext';

export default function Header() {
  const { isSidebarVisible, toggleSidebar } = useContext(GlobalStateContext);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <div>
      <header className="fixed z-50 w-full bg-green-dark h-30">
        <nav className="container flex justify-between px-4 m-auto">
          <div
            className={`fixed transition-all ${
              isSidebarVisible ? 'inline' : 'hidden'
            } z-50 items-center justify-center mt-24 ml-3 sm:flex sm:relative sm:mt-0 sm:ml-0 `}
          >
            <Link href="/" passHref legacyBehavior>
              <LinkButton icon="home" title="Home" activeByRoute />
            </Link>
            <Link href="/blog" passHref legacyBehavior>
              <LinkButton icon="document" title="Blog" activeByRoute />
            </Link>
            <Link href="/portfolio" passHref legacyBehavior>
              <LinkButton icon="folder" title="Portfolio" activeByRoute />
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <LinkButton icon="mail" title="Contact" activeByRoute />
            </Link>
          </div>

          <div className="flex items-center justify-center p-4 sm:hidden">
            <button
              className="flex flex-col items-center justify-center w-12 h-12 border border-white rounded group"
              onClick={() => toggleSidebar()}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isSidebarVisible
                    ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isSidebarVisible
                    ? 'opacity-0'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isSidebarVisible
                    ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
            </button>
          </div>
          <SocialMediaBar />
        </nav>
      </header>
      <div className="h-20 sm:h-14" />
    </div>
  );
}
