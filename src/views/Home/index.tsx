import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ArticlePreview from 'components/ArticlePreview';
import ProjectPreview from 'components/ProjectPreview';
import commandLineValues from './home-command-line-values';

export default function Home() {
  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="my-10 text-2xl text-center font-play text-orange-dark">
        Latest Articles
      </h1>
      <div className="relative flex flex-wrap">
        <ArticlePreview
          title="Init project with Nextjs"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          lang="English"
          reactions={24}
          image="/images/next.png"
          altImage="nextjs image"
        />
        <ArticlePreview
          title="Init project with Postgres"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          lang="English"
          reactions={500}
          image="/images/postgres.jpg"
          altImage="nextjs image"
        />
        <ArticlePreview
          title="Init project with Nextjs"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          lang="English"
          reactions={24}
          image="/images/postgres.jpg"
          altImage="nextjs image"
        />
        <ArticlePreview
          title="Init project with Nextjs"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          lang="English"
          reactions={24}
          image="/images/next.png"
          altImage="nextjs image"
        />
      </div>
      <h1 className="my-10 text-2xl text-center font-play text-orange-dark">
        Most Liked Projects
      </h1>
      <div
        className="relative flex flex-col flex-wrap"
        style={{ maxHeight: 1600 }}
      >
        <ProjectPreview
          title="Init project with Mysql"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          languages="javascript, React"
          reactions={24}
          image="/images/next.png"
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
      </div>
      <Footer />
    </>
  );
}
