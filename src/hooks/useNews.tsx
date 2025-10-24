import axios from "axios";
import { useEffect, useState } from "react";
import type { Article } from "../types/news";

const useNews = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [totalPage, setTotalPage] = useState<number>(1);

  const pageSize = 12;
  const fetchNews = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const endpoint = `${import.meta.env.VITE_NEWS_ENDPOINT}/top-headlines`;
      const params = new URLSearchParams({
        page: page.toString(),
        max: pageSize.toString(),
        apikey: import.meta.env.VITE_NEWS_API_KEY,
        lang: "en",
      });

      if (search) {
        params.append("q", search);
      } else if (category) {
        params.append("category", category);
      }

      const url = `${endpoint}?${params.toString()}`;

      const response = await axios.get(url);

      console.log(response.data);
      const articles = response.data.articles || [];
      const totalRecords = response.data.totalArticles || 0;

      setNews(articles);
      setTotalPage(Math.ceil(totalRecords / pageSize));
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page, search, category]);
  return {
    news,
    isLoading,
    error,
    setPage,
    search,
    setSearch,
    category,
    setCategory,
    page,
    totalPage,
  };
};

export default useNews;
