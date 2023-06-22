import crossIcon from "../../assets/cross.svg";
import { Categories } from "../../categories";
import NavItem from "../header/nav-item";

export default function MobileMenu() {
  return (
    <div className="side-area fixed w-full h-full inset-0 z-50">
      {/* <!-- bg open --> */}
      <div className="back-menu fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0">
        <div className="cursor-pointer text-white absolute right-64 p-2">
          <img src={crossIcon} alt="Cancel" />
        </div>
      </div>

      {/* <!-- Mobile navbar --> */}
      <nav
        id="mobile-nav"
        className="side-menu flex flex-col right-0 w-64 fixed top-0 bg-white dark:bg-gray-800 h-full overflow-auto z-40"
      >
        <div className="mb-auto">
          {/* <!--navigation--> */}
          <nav className="relative flex flex-wrap">
            <div className="text-center py-4 w-full font-bold border-b border-gray-100">
              Nexus News
            </div>
            <ul id="side-menu" className="w-full float-none flex flex-col">
              <NavItem label={"Home"} />
              {Categories.map((item) => (
                <NavItem label={item.title} key={item.title} />
              ))}
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}
