import { featureOnDevelopment } from "../../utils";
import { NewsCardProps } from "./news-card";

export default function FeaturedNewsCard({
  title,
  description,
  author,
  publishDate,
  img,
}: NewsCardProps) {
  return (
    <div className="flex-shrink max-w-full w-full px-3 pb-5">
      <div className="relative hover-img max-h-98 overflow-hidden">
        {/* <!--thumbnail--> */}
        <a href="#" onClick={featureOnDevelopment}>
          <img
            className="max-w-full w-full mx-auto h-auto"
            src={img}
            alt={title}
          />
        </a>
        <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
          {/* <!--title--> */}
          <a href="#" onClick={featureOnDevelopment}>
            <h2 className="text-3xl font-bold capitalize text-white mb-3">
              {title}
            </h2>
          </a>
          <p className="text-gray-100 hidden sm:inline-block">{description}</p>
          {/* <!-- author and date --> */}
          <div className="pt-2">
            <div className="text-gray-100 flex items-center">
              <span className="inline-block h-10 border-l-2 border-red-600 mr-2"></span>
              <div className="flex flex-col">
                <span>By {author.substring(0, 30)}</span>
                <span> {publishDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
