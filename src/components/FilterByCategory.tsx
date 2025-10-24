interface CategoryProp {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const FilterByCategory = ({ category, setCategory }: CategoryProp) => {
  const options = [
    "",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <select
      className="dark:bg-dark-card bg-card border dark:border-dark-border border-border px-2 py-1 rounded-lg "
      value={category}
      onChange={(e) => setCategory(e.target?.value)}
    >
      {options?.map((o, i) => (
        <option key={i} value={o}>
          {!o.length
            ? "None"
            : o.charAt(0).toUpperCase() + o.slice(1).toLowerCase()}
        </option>
      ))}
    </select>
  );
};

export default FilterByCategory;
