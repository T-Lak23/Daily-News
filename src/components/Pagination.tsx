import { SquareChevronLeft, SquareChevronRight } from "lucide-react";

interface PaginationProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  totalPage: number;
}

const Pagination = ({ page, setPage, totalPage }: PaginationProp) => {
  return (
    <div className="flex justify-center items-center gap-0.5 py-6 text-main-foreground dark:text-dark-main-foreground disabled:text-muted-foreground ">
      <button
        className="disabled:opacity-50"
        onClick={() => setPage((prev) => Number(prev - 1))}
        disabled={page >= totalPage || page <= totalPage || totalPage <= 0}
      >
        <SquareChevronLeft className="stroke-current" />
      </button>
      <p>
        <span className="text-primary dark:text-dark-primary">{page}</span> of{" "}
        {totalPage}
      </p>
      <button
        className="disabled:opacity-50"
        onClick={() => setPage((prev) => Number(prev + 1))}
        disabled={page === totalPage}
      >
        <SquareChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
