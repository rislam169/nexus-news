import { useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import crossIcon from "../../assets/cross.svg";
import { useDebounce } from "../../hooks/use-debounce";
import { fetchArticle } from "../../store/article/article-slice";
import { useAppDispatch } from "../../store/store-helper";

/** Debounce interval in miliseconds */
const DEBOUNCE_TIME = 500;

/** Renders search bar and run search operation */
export default function Search() {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>("");

  const dispatch = useAppDispatch();
  const debouncedSearchKey = useDebounce(searchKey, DEBOUNCE_TIME);

  useEffect(() => {
    dispatch(fetchArticle({ searchKey: debouncedSearchKey }));
  }, [debouncedSearchKey, dispatch]);

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
        } absolute left-auto right-0 top-full z-50 text-left bg-white text-gray-700 border border-gray-100 mt-1 p-3`}
        style={{ minWidth: "15rem" }}
      >
        <div className="flex flex-wrap items-stretch w-full relative">
          <input
            type="text"
            className="flex-shrink flex-grow max-w-full leading-5 w-px flex-1 relative py-2 px-5 text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
            name="text"
            placeholder="Search..."
            aria-label="search"
            value={searchKey ?? ""}
            onChange={({ target }) => setSearchKey(target.value)}
          />
          <div className="flex -mr-px">
            <button
              className="flex items-center py-2 px-5 ml-1 leading-5 text-gray-100 rounded focus:outline-none focus:ring-0 hover:bg-gray-200"
              type="submit"
            >
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
