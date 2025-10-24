interface SearchProp {
  setSearch: (val: string) => void;
  search: string;
}

const SearchBar = ({ setSearch, search }: SearchProp) => {
  return (
    <input
      type="text"
      className=" border focus:outline-0  border-border dark:border-dark-border px-4 py-2 rounded-xl bg-input dark:bg-dark-input w-full  "
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target?.value)}
    />
  );
};

export default SearchBar;
