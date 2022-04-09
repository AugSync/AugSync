import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Paginator from 'components/Paginator';
import Masonry from 'react-masonry-css';
import ProjectPreview from 'components/ProjectPreview';
import Search from 'components/Search';
import Select from 'components/Select';
import commandLineValues from './portfolio-command-line-values';
import { IAllProjects } from 'lib/dato-cms-service';

export default function Portfolio({
  allProjects,
}: {
  allProjects: IAllProjects;
}) {
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
        {allProjects.map((project) => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </Masonry>
      <Paginator />
      <Footer />
    </>
  );
}
