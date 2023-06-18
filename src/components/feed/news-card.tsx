import { featureOnDevelopment } from "../../utils";

export type NewsCardProps = {
  /** Title of the news */
  title: string;

  /** Short description of the news */
  description?: string;

  /** Category of the news */
  category: string;

  /** Image url display in the card */
  img: string;
};

export default function NewsCard({
  title,
  description,
  category,
  img,
}: NewsCardProps) {
  return (
    <div className="flex-shrink max-w-full w-full sm:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
      <div className="flex flex-row sm:block hover-img">
        <a href="#" onClick={featureOnDevelopment}>
          <img className="max-w-full w-full mx-auto" src={img} alt={title} />
        </a>
        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
          <h3 className="text-lg font-bold leading-tight mb-2">
            <a href="#" onClick={featureOnDevelopment}>
              {title}
            </a>
          </h3>
          <p className="hidden md:block text-gray-600 leading-tight mb-1">
            {description}
          </p>
          <a className="text-gray-500" href="#" onClick={featureOnDevelopment}>
            <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
            {category}
          </a>
        </div>
      </div>
    </div>
  );
}
