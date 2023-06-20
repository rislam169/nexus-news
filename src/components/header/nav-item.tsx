import { featureOnDevelopment } from "../../utils";

type Props = {
  /** Display on the nav bar link */
  label: string;

  /** True if menu is active */
  isActive: boolean;
};

export default function NavItem({ label, isActive }: Props) {
  return (
    <li
      className={`${
        isActive ? "active " : ""
      }relative border-l border-gray-800 hover:bg-gray-900`}
    >
      <a
        className="block py-3 px-6 border-b-2 border-transparent"
        href="#"
        onClick={featureOnDevelopment}
      >
        {label}
      </a>
    </li>
  );
}
