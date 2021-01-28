import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import commandLineValues from './portfolio-command-line-values';

export default function Portfolio() {
  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="font-play text-orange-dark my-10 text-center text-xl">
        Projects
      </h1>
    </>
  );
}
