import Icon from 'assets/icons';
import Link from 'next/link';

export default function SocialMediaBar() {
  return (
    <div className="flex items-center justify-center mx-4 svg:m-4">
      <Link
        href="https://www.facebook.com/AugSync/"
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="facebook" className="my-2 mr-3" width="2.5rem" />
      </Link>
      <Link
        href="https://twitter.com/augsync"
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="twitter" className="mx-3 my-2" width="2.5rem" />
      </Link>
      <Link
        href="https://github.com/AugSync"
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" className="mx-3 my-2" width="2.5rem" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/augsync/"
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="linked-in" className="my-2 ml-3" width="2.5rem" />
      </Link>
    </div>
  );
}
