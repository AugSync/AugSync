import CommandLine from 'components/CommandLine';
import Header from 'components/Header';

export default function Blog() {
  const commandLineValues = [
    { type: 'home', title: '~/' },
    { type: 'folder', title: '.home' },
    { type: 'split', title: '/' },
    { type: 'folder', title: 'blog', color: 'text-orange-dark' },
    { type: 'input', title: '>' },
    { type: 'output', title: 'cat welcome.txt' },
    { type: 'break' },
    { type: 'home', title: '~/' },
    { type: 'folder', title: '.home' },
    { type: 'split', title: '/' },
    { type: 'folder', title: 'blog', color: 'text-orange-dark' },
    { type: 'input', title: '>' },
    {
      type: 'output',
      title:
        'Welcome to my blog, a place where you can find all kinds of articles on application development in multiple programming languages. Sometimes I write about my experience in multiple areas of programming and learning, also about emotional intelligence in the workplace, among other super interesting topics.',
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
