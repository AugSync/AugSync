import Icon from 'assets/icons';
import Link from 'next/link';

export default function SocialMediaBar() {
  return (
    <div className="flex items-center justify-center svg:m-4">
      <Link href="https://www.facebook.com/AugSync/" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Icon name="facebook" className="my-2 mr-3" width="2.5rem" />
        </a>
      </Link>
      <Link href="https://twitter.com/augsync" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Icon name="twitter" className="mx-3 my-2" width="2.5rem" />
        </a>
      </Link>
      <Link href="https://github.com/AugSync" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Icon name="github" className="mx-3 my-2" width="2.5rem" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/augsync/" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <Icon name="linked-in" className="my-2 ml-3" width="2.5rem" />
        </a>
      </Link>
    </div>
  );
}
