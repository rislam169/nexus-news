import { useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import crossIcon from "../../assets/cross.svg";
import { useDebounce } from "../../hooks/use-debounce";
import { fetchArticle } from "../../store/article/article-slice";
import { useAppDispatch } from "../../store/store-helper";
import { Categories } from "../../categories";

/** Debounce interval in miliseconds */
const DEBOUNCE_TIME = 500;

/** Renders search bar and run search operation */
export default function Search() {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  const dispatch = useAppDispatch();
  const debouncedSearchKey = useDebounce(searchKey, DEBOUNCE_TIME);

  useEffect(() => {
    if (searchKey) {
      dispatch(fetchArticle({ searchKey: debouncedSearchKey }));
    }
  }, [debouncedSearchKey, dispatch, searchKey]);

  function filterArticles(): void {
    dispatch(
      fetchArticle({
        searchKey: debouncedSearchKey,
        source: source,
        category: selectedCategory,
        fromDate: fromDate,
        toDate: toDate,
      })
    );
  }

  function clearSearch(): void {
    dispatch(
      fetchArticle({
        searchKey: "",
        source: "",
        category: "",
        fromDate: "",
        toDate: "",
      })
    );

    setSource("");
    setSelectedCategory("");
    setFromDate("");
    setToDate("");
  }

  return (
    <div className="search-dropdown relative h-11">
      <button
        className="block py-3 px-6 border-b-2 border-transparent rounded hover:bg-gray-200"
        onClick={() => setIsSearchVisible((prevState) => !prevState)}
      >
        <img src={searchIcon} alt="Search" />
      </button>
      <div
        className={`${
          isSearchVisible ? "" : "hidden"
        } search_dropdown absolute left-auto right-0 top-full z-50 text-left shadow-2xl bg-white text-black border border-gray-200 mt-1 p-3`}
      >
        <div className="flex flex-row flex-wrap w-full relative">
          <button
            onClick={() => setIsSearchVisible(false)}
            className="bg-gray-300 absolute right-0 p-1 rounded-full"
          >
            <img src={crossIcon} alt="Cancel" />
          </button>
          <span className="flex flex-col max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4  m-3">
            <label htmlFor="from_date">From</label>
            <input
              type="date"
              id="from_date"
              className="w-full p-1 border-b-2 rounded text-black  border border-gray-400 shadow-sm overflow-x-auto"
              placeholder="From Date"
              aria-label="fromDate"
              value={fromDate}
              onChange={({ target }) => setFromDate(target.value)}
            />
          </span>
          <span className="flex flex-col max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4  m-3">
            <label htmlFor="to_date">To</label>
            <input
              type="date"
              id="to_date"
              className="w-full p-1 border-b-2 rounded text-black  border border-gray-400 shadow-sm overflow-x-auto"
              placeholder="To Date"
              aria-label="toDate"
              value={toDate}
              onChange={({ target }) => setToDate(target.value)}
            />
          </span>
          <span className="flex flex-col max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4  m-3">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="w-full p-1 border-b-2 rounded text-black  border border-gray-400 shadow-sm overflow-x-auto"
              value={selectedCategory}
              onChange={({ target }) => setSelectedCategory(target.value)}
            >
              {Categories.map((category) => (
                <option key={category.title} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </span>
          <span className="flex flex-col max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4  m-3">
            <label htmlFor="source">Source</label>
            <input
              id="source"
              type="text"
              className="w-full p-1 border-b-2 rounded text-black  border border-gray-400 shadow-sm overflow-x-auto"
              placeholder="Source"
              aria-label="source"
              value={source}
              onChange={({ target }) => setSource(target.value)}
            />
          </span>
          <span className="flex flex-col max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4  m-3">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              className="w-full p-1 border-b-2 rounded text-black  border border-gray-400 shadow-sm overflow-x-auto"
              placeholder=" Search..."
              aria-label="search"
              value={searchKey}
              onChange={({ target }) => setSearchKey(target.value)}
            />
          </span>
          <span className="flex flex-row max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4  m-3">
            <button
              onClick={filterArticles}
              className=" p-1 mr-1 mt-6  w-2/3 rounded focus:outline-none text-white bg-blue-500 hover:bg-blue-700"
            >
              Search
            </button>
            <button
              onClick={clearSearch}
              className="border p-1 mt-6 w-2/1 rounded border-blue-500 hover:text-white   hover:bg-blue-500"
            >
              Clear
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
