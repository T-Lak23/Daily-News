import { Link } from "react-router";
import type { Article } from "../types/news";

interface NewsProp {
  news: Article;
}
const NewsCard = ({ news }: NewsProp) => {
  const { title, description, url, urlToImage, publishedAt, source } = news;
  return (
    <Link
      to={url}
      target="blank"
      className="dark:bg-dark-card bg-card border dark:border-dark-border border-border rounded-xl overflow-hidden"
    >
      <img
        src={urlToImage || "/placeholder.webp"}
        alt={title}
        className="h-[200px] w-full object-cover"
      />
      <div className="p-3 flex flex-col flex-1 gap-4">
        <div className="flex flex-col gap-2 grow">
          <p className="dark:text-dark-main-foreground text-main-foreground text-lg font-semibold leading-6">
            {title}
          </p>
          <p className="dark:text-dark-muted-foreground text-muted-foreground h-[110px]">
            {description?.length > 150
              ? description?.slice(0, 150) + "..."
              : description}
          </p>
        </div>
        <div className="flex justify-between text-sm mt-auto pt-3 border-t dark:border-dark-border">
          <p className="dark:text-dark-muted-foreground text-main-foreground">
            {source.name}
          </p>
          <p className="dark:text-dark-primary text-primary">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
