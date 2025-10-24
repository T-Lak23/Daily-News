import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import ToggleTheme from "../components/ToggleTheme";
import useNews from "../hooks/useNews";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import FilterByCategory from "../components/FilterByCategory";

const Home = () => {
  const {
    news,
    setSearch,
    isLoading,
    error,
    setPage,
    page,
    totalPage,
    category,
    setCategory,
  } = useNews();
  const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 600);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  return (
    <div className="bg-main text-main-foreground dark:bg-dark-main dark:text-dark-main-foreground min-h-screen w-full px-2 py-6  md:px-4 md:py-6">
      <div className="flex items-center justify-between">
        <ToggleTheme />
        <FilterByCategory category={category} setCategory={setCategory} />
      </div>
      <div className="py-5">
        <SearchBar search={searchInput} setSearch={setSearchInput} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 grid-cols-1">
        {error && <p className="text-red-400 py-2">{error?.message}</p>}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {" "}
            {news?.map((n, i) => {
              return <NewsCard news={n} key={i} />;
            })}
          </>
        )}
      </div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </div>
  );
};

export default Home;
