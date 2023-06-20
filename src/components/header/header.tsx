import searchIcon from "../../assets/search.svg";
import crossIcon from "../../assets/cross.svg";
import menuIcon from "../../assets/menu.svg";
import NavItem from "./nav-item";

const navItems = [
  { label: "Home", isActive: true },
  { label: "General", isActive: false },
  { label: "Business", isActive: false },
  { label: "Entertainment", isActive: false },
  { label: "Health", isActive: false },
  { label: "Science", isActive: false },
  { label: "Sports", isActive: false },
  { label: "Technology", isActive: false },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex justify-between">
            <div className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center">
              Nexus News
            </div>

            <div className="flex flex-row h-11">
              {/* <!-- nav menu --> */}
              <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                {navItems.map((item) => (
                  <NavItem label={item.label} isActive={item.isActive} />
                ))}
              </ul>

              {/* <!-- search form & mobile nav --> */}
              <div className="flex flex-row items-center text-gray-300">
                <div className="search-dropdown relative border-r lg:border-l border-gray-800 hover:bg-gray-900 h-11">
                  <button className="block py-3 px-6 border-b-2 border-transparent">
                    <img src={searchIcon} alt="Search" />
                    <img src={crossIcon} alt="Cancel" />
                  </button>
                  <div
                    className="dropdown-menu absolute left-auto right-0 top-full z-50 text-left bg-white text-gray-700 border border-gray-100 mt-1 p-3"
                    style={{ minWidth: "15rem" }}
                  >
                    <div className="flex flex-wrap items-stretch w-full relative">
                      <input
                        type="text"
                        className="flex-shrink flex-grow flex-shrink max-w-full leading-5 w-px flex-1 relative py-2 px-5 text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                        name="text"
                        placeholder="Search..."
                        aria-label="search"
                      />
                      <div className="flex -mr-px">
                        <button
                          className="flex items-center py-2 px-5 -ml-1 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0"
                          type="submit"
                        >
                          <img src={searchIcon} alt="Search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative hover:bg-gray-800 block lg:hidden">
                  <button
                    type="button"
                    className="menu-mobile block py-3 px-6 border-b-2 border-transparent"
                  >
                    <span className="sr-only">Mobile menu</span>
                    <img src={menuIcon} alt="Menu" /> Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
