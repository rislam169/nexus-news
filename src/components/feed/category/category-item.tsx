import { featureOnDevelopment } from "../../../utils";

type Props = {
  title: string;
  description: string;
  img: string;
  isFeatured?: boolean;
};
export default function CategoryItem({
  title,
  description,
  img,
  isFeatured,
}: Props) {
  return (
    <article
      className={`flex-shrink max-w-full w-full sm:w-1/2 ${
        isFeatured ? "lg:pr-1" : ""
      }`}
    >
      <div
        className={`relative hover-img ${
          isFeatured ? "max-h-98" : "max-h-48"
        } overflow-hidden`}
      >
        <a href="#" onClick={featureOnDevelopment}>
          <img
            className="max-w-full w-full mx-auto h-auto"
            src={img}
            alt={title}
          />
        </a>
        <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
          <a href="#">
            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
              {description}
            </h2>
          </a>
          <div className="pt-1">
            <div className="text-gray-100">
              <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
              {title}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
