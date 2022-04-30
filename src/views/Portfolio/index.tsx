import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import Footer from 'components/Footer';
/* import Paginator from 'components/Paginator'; */
import Masonry from 'react-masonry-css';
import ProjectPreview from 'components/ProjectPreview';
import Search from 'components/Search';
/* import Select from 'components/Select'; */
import commandLineValues from './portfolio-command-line-values';
import { IAllProjects } from 'lib/dato-cms-service';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Portfolio({
  allProjects,
}: {
  allProjects: IAllProjects;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(
    typeof router.query.search === 'string' ? router.query.search : ''
  );

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <CommandLine values={commandLineValues} />
      <h1 className="my-10 text-xl text-center font-play text-orange-dark">
        Projects
      </h1>

      <Search search={search} onChange={onSearchChange} />
      {/* <view className="flex items-center justify-start w-full pl-16 my-10">
        <h3 className="mr-5 text-lg text-center font-play text-blue">
          Filter By
        </h3>
        <Select />
        <Select />
        <Select />
      </view> */}

      <Masonry
        breakpointCols={{
          1920: 3,
          1100: 2,
          500: 1,
        }}
        className="flex-auto my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {allProjects
          .filter(
            (project) =>
              project.title.toLowerCase().includes(search.toLowerCase()) ||
              project.seo.description
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              project.tags.some((tag) =>
                tag.title.toLowerCase().includes(search.toLowerCase())
              )
          )
          .map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
      </Masonry>
      {/* <Paginator /> */}
      <Footer />
    </div>
  );
}
