import CommandLine from 'components/CommandLine';
import Header from 'components/Header';

export default function Home() {
  const commandLineValues = [
    { type: 'home', title: '~/' },
    { type: 'folder', title: '.home' },
    { type: 'input', title: '>' },
    { type: 'output', title: 'whoami' },
    { type: 'break' },
    { type: 'home', title: '~/' },
    { type: 'folder', title: '.home' },
    { type: 'input', title: '>' },
    {
      type: 'output',
      title: 'Augusto_Barco',
      color: 'text-blue',
      isResponse: true,
    },
    { type: 'break' },
    { type: 'home', title: '~/' },
    { type: 'folder', title: '.home' },
    { type: 'input', title: '>' },
    { type: 'output', title: 'cd ./.bio && cat bio.txt' },
    { type: 'break' },
    { type: 'home', title: '~/' },
    { type: 'folder', title: '.home' },
    { type: 'split', title: '/' },
    { type: 'folder', title: '.bio', color: 'text-orange-dark' },
    { type: 'input', title: '>' },
    {
      type: 'output',
      title:
        'Hello, I’m Augusto Barco. This is my personal web page, you’re welcome to watch all of my projects and latest blog post that I write for you. Have a nice experience.',
      color: 'text-blue',
      isResponse: true,
    },
    { type: 'break' },
    { type: 'home', title: '~/' },
    { type: 'folder', title: '.home' },
    { type: 'split', title: '/' },
    { type: 'folder', title: '.bio', color: 'text-orange-dark' },
    { type: 'input', title: '>' },
    {
      type: 'output',
      title: 'clear && cd ..',
    },
  ];

  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
    </>
  );
}
