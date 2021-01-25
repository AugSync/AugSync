import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import commandLineValues from './home-command-line-values';

export default function Home() {
  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="font-play text-orange-dark my-10 text-center text-xl">
        Latest Articles
      </h1>
    </>
  );
}
