import { featureOnDevelopment } from "../../utils";

type Props = {
  title: string;
  icon: string;
  url: string;
};

/** Renders the social media links */
export default function SocalMediaLink({ title, icon, url }: Props) {
  return (
    <li className="inline-block">
      <a
        target="_blank"
        className="hover:text-gray-100"
        rel="noopener noreferrer"
        href={url}
        title={title}
        onClick={featureOnDevelopment}
      >
        <img src={icon} alt={title} />
      </a>
    </li>
  );
}
