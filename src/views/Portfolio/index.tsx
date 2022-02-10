import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Paginator from 'components/Paginator';
import Masonry from 'react-masonry-css';
import ProjectPreview from 'components/ProjectPreview';
import Search from 'components/Search';
import Select from 'components/Select';
import commandLineValues from './portfolio-command-line-values';

export default function Portfolio() {
  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="my-10 text-xl text-center font-play text-orange-dark">
        Projects
      </h1>

      <Search />
      <view className="flex items-center justify-start w-full pl-16 my-10">
        <h3 className="mr-5 text-lg text-center font-play text-blue">
          Filter By
        </h3>
        <Select />
        <Select />
        <Select />
      </view>

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
      <Paginator />
      <Footer />
    </>
  );
}
