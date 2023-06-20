import menuIcon from "../../assets/menu.svg";
import NavItem from "./nav-item";
import { Categories } from "../feed/category/categories";
import Search from "./search";

/** Renders navbar as header */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white shadow-md">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex justify-between">
            <div className="mx-w-10 text-2xl font-bold capitalize text-black flex items-center">
              Nexus News
            </div>

            <div className="flex flex-row h-11">
              {/* <!-- nav menu --> */}
              <ul className="navbar hidden lg:flex lg:flex-row text-black text-sm items-center font-bold">
                <NavItem label={"Home"} />
                {Categories.map((item) => (
                  <NavItem label={item.title} />
                ))}
              </ul>

              <div className="flex flex-row items-center text-gray-300">
                <Search />

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
