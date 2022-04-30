import ArticlePreview from 'components/ArticlePreview';
import CommandLine from 'components/CommandLine';
import Header from 'components/Header';
import Footer from 'components/Footer';
/* import Paginator from 'components/Paginator'; */
import Masonry from 'react-masonry-css';
import Search from 'components/Search';
/* import Select from 'components/Select'; */
import commandLineValues from './blog-command-line-values';
import { IAllArticles } from 'lib/dato-cms-service';
import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { getLang } from 'utils';
import { useRouter } from 'next/router';

export default function Blog({ allArticles }: { allArticles: IAllArticles }) {
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
        Articles
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
          500: 1,
        }}
        className="flex-auto my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {allArticles
          .filter(
            (article) =>
              article.title.toLowerCase().includes(search.toLowerCase()) ||
              article.seo.description
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              article._allContentLocales.some((lang) =>
                getLang(lang.locale)
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) ||
              article.tags.some((tag) =>
                tag.title.toLowerCase().includes(search.toLowerCase())
              ) ||
              format(new Date(article._createdAt), 'MMMM dd yyyy', {
                locale: es,
              }).includes(search.toLowerCase())
          )
          .map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
      </Masonry>
      {/* <Paginator /> */}
      <Footer />
    </div>
  );
}
