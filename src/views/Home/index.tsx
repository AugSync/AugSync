import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ArticlePreview from 'components/ArticlePreview';
import ProjectPreview from 'components/ProjectPreview';
import Masonry from 'react-masonry-css';
import commandLineValues from './home-command-line-values';
import { IAllArticles } from 'lib/dato-cms-service';

export default function Home({ allArticles }: { allArticles: IAllArticles }) {
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
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {allArticles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </Masonry>
      <h1 className="my-10 text-2xl text-center font-play text-orange-dark">
        Most Liked Projects
      </h1>
      <Masonry
        breakpointCols={{
          1920: 3,
          1100: 2,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={24}
          image="/images/next.png"
          altImage="nextjs image"
          heightType="full"
        />
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={24}
          image="/images/postgres.jpg"
          altImage="nextjs image"
        />
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={500}
          image="/images/postgres.jpg"
          altImage="nextjs image"
          heightType="full"
        />
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={24}
          image="/images/postgres.jpg"
          altImage="nextjs image"
          heightType="full"
        />
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={500}
          image="/images/postgres.jpg"
          altImage="nextjs image"
          heightType="full"
        />
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={24}
          image="/images/postgres.jpg"
          altImage="nextjs image"
          heightType="full"
        />
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={24}
          image="/images/postgres.jpg"
          altImage="nextjs image"
        />
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={24}
          image="/images/postgres.jpg"
          altImage="nextjs image"
        />
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={24}
          image="/images/postgres.jpg"
          altImage="nextjs image"
        />
      </Masonry>
      <Footer />
    </>
  );
}
