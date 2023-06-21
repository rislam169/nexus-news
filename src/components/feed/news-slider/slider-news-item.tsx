import { featureOnDevelopment } from "../../../utils";
import { NewsCardProps } from "../news-card";

export default function SliderNewsItem({
  title,
  img,
  category,
}: NewsCardProps) {
  return (
    <li className="splide__slide">
      <div className="w-full pb-3">
        <div className="hover-img bg-white">
          <a href="#" onClick={featureOnDevelopment}>
            <img
              className="max-w-full w-full mx-auto"
              src={img}
              alt="alt title"
            />
          </a>
          <div className="py-3 px-6">
            <h3 className="text-lg font-bold leading-tight mb-2">
              <a href="#" onClick={featureOnDevelopment}>
                {title}
              </a>
            </h3>
            <a
              className="text-gray-500"
              href="#"
              onClick={featureOnDevelopment}
            >
              <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
              {category}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
