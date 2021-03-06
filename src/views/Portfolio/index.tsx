import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import commandLineValues from './portfolio-command-line-values';

export default function Portfolio() {
  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="my-10 text-xl text-center font-play text-orange-dark">
        Projects
      </h1>
    </>
  );
}
