import CommandLine from 'components/CommandLine';
import Header from 'components/Header';

export default function Portfolio() {
  const commandLineValues = [
    { type: 'home', title: '~/' },
    { type: 'folder', title: '.home' },
    { type: 'split', title: '/' },
    { type: 'folder', title: 'portfolio', color: 'text-orange-dark' },
    { type: 'input', title: '>' },
    { type: 'output', title: 'cat welcome.txt' },
    { type: 'break' },
    { type: 'home', title: '~/' },
    { type: 'folder', title: '.home' },
    { type: 'split', title: '/' },
    { type: 'folder', title: 'portfolio', color: 'text-orange-dark' },
    { type: 'input', title: '>' },
    {
      type: 'output',
      title:
        'Welcome to my portfolio, a place where you can find all kinds of programming projects in any language. I would love for you to see my projects where I try to capture everything I learn in this industry, lets enjoy my projects.',
      color: 'text-blue',
      isResponse: true,
    },
  ];

  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
    </>
  );
}
