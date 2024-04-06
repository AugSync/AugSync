import Icon from 'assets/icons';
import Link from 'next/link';

export default function Paginator() {
  return (
    <div className="flex items-center justify-center my-10">
      <Link href="/blog" passHref>
        <Icon name="arrow-left" className="m-2" width="2.5rem" />
      </Link>
      {[1, 2, 3, 4, 5].map((pageNumber, idx) => (
        <Link
          href="/blog"
          key={idx}
          className="px-2 py-1 text-base text-orange font-ubuntu hover:bg-green-dark"
        >
          {pageNumber}
        </Link>
      ))}
      <Link href="/blog" passHref>
        <Icon name="arrow-right" className="m-2" />
      </Link>
    </div>
  );
}
