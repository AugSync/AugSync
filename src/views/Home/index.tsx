import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import commandLineValues from './home-command-line-values';
import ProjectPreview from 'components/ProjectPreview';

export default function Home() {
  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="font-play text-orange-dark my-10 text-center text-2xl">
        Latest Articles
      </h1>
      <div className="flex flex-wrap relative">
        <ProjectPreview
          title="Init project with Nextjs"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          lang="English"
          reactions={24}
          image="/images/next.png"
          altImage="nextjs image"
        />
        <ProjectPreview
          title="Init project with Postgres"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          lang="English"
          reactions={500}
          image="/images/postgres.jpg"
          altImage="nextjs image"
        />
        <ProjectPreview
          title="Init project with Nextjs"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          lang="English"
          reactions={24}
          image="/images/postgres.jpg"
          altImage="nextjs image"
        />
        <ProjectPreview
          title="Init project with Nextjs"
          description="Next its a open source project that find to help to many developers"
          date="10/12/2021"
          lang="English"
          reactions={24}
          image="/images/next.png"
          altImage="nextjs image"
        />
      </div>
    </>
  );
}
