import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import commandLineValues from './blog-command-line-values';

export default function Blog() {
  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="my-10 text-xl text-center font-play text-orange-dark">
        Articles
      </h1>
    </>
  );
}
