import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ArticlePreview from 'components/ArticlePreview';
import ProjectPreview from 'components/ProjectPreview';
import Masonry from 'react-masonry-css';
import commandLineValues from './home-command-line-values';
import { IAllArticles, IAllProjects } from 'lib/dato-cms-service';

export default function Home({
  allArticles,
  allProjects,
}: {
  allArticles: IAllArticles;
  allProjects: IAllProjects;
}) {
  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="my-10 text-2xl text-center font-play text-orange-dark">
        Latest Articles
      </h1>
      <Masonry
        breakpointCols={{
          500: 1,
        }}
        className="my-masonry-grid my-masonry-grid_max-width"
        columnClassName="my-masonry-grid_column"
      >
        {allArticles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </Masonry>
      <h1 className="my-10 text-2xl text-center font-play text-orange-dark">
        Latest Projects
      </h1>
      <Masonry
        breakpointCols={{
          1920: 3,
          1100: 2,
          500: 1,
        }}
        className="my-masonry-grid my-masonry-grid_max-width"
        columnClassName="my-masonry-grid_column"
      >
        {allProjects.map((project) => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </Masonry>
      <Footer />
    </>
  );
}
