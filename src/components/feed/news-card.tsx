export type NewsCardProps = {
  /** Title of the news */
  title: string;

  /** Short description of the news */
  description?: string;

  /** Category of the news */
  category: string;

  /** Image url display in the card */
  img: string;

  /** The author of the article */
  author: string;

  /** Published date of the article */
  publishDate: string;

  /** Main url of the news from provider */
  url: string;
};

function onImageLoadError(event: any) {
  event.target.onerror = null;
  event.target.src =
    "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/368e6ab3b30c5b914434afdbe72268b6.jpg";
}

export default function NewsCard({
  title,
  description,
  author,
  publishDate,
  img,
  url,
}: NewsCardProps) {
  return (
    <div className="flex-shrink max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
      <div className="sm:block hover-img article-item">
        <a href={url} target="_blank">
          <img
            className="max-w-full w-full mx-auto"
            src={img}
            alt={title}
            onError={onImageLoadError}
          />
        </a>
        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
          <h3 className="text-lg font-bold leading-tight mb-2">
            <a href={url} target="_blank">
              {title}
            </a>
          </h3>
          <p className="hidden md:block text-gray-600 leading-tight mb-1">
            {description}
          </p>
          <a
            className="text-gray-500 flex items-center"
            href={url}
            target="_blank"
          >
            <span className="inline-block h-10 border-l-2 border-red-600 mr-2"></span>
            <div className="flex flex-col">
              <span>By {author.substring(0, 30)}</span>
              <span> {publishDate}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
