import ArticlePreview from 'components/ArticlePreview';
import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Paginator from 'components/Paginator';
import Masonry from 'react-masonry-css';
import Search from 'components/Search';
import Select from 'components/Select';
import commandLineValues from './blog-command-line-values';

export default function Blog() {
  return (
    <>
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="my-10 text-xl text-center font-play text-orange-dark">
        Articles
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
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
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
      </Masonry>
      <Paginator />
      <Footer />
    </>
  );
}
