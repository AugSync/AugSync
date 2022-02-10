import Icon from 'assets/icons';
import Link from 'next/link';

export default function Paginator() {
  return (
    <div className="flex items-center justify-center my-10">
      <Link href="/blog">
        <a>
          <Icon name="arrow-left" className="m-2" />
        </a>
      </Link>
      {[1, 2, 3, 4, 5].map((pageNumber, idx) => (
        <Link href="/blog" key={idx}>
          <a className="px-2 py-1 text-base text-orange font-ubuntu hover:bg-green-dark">
            {pageNumber}
          </a>
        </Link>
      ))}
      <Link href="/blog">
        <a>
          <Icon name="arrow-right" className="m-2" />
        </a>
      </Link>
    </div>
  );
}
