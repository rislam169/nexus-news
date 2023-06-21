import { NavLink } from "react-router-dom";

type Props = {
  /** Display on the nav bar link */
  label: string;
};

export default function NavItem({ label }: Props): JSX.Element {
  return (
    <li className="relative" key={Math.random()}>
      <NavLink
        to={label === "Home" ? "/" : `/articles/${label}`}
        className="block py-3 px-6 border-b-2 border-transparent"
      >
        {label}
      </NavLink>
    </li>
  );
}
