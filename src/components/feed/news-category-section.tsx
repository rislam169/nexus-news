import FeaturedNewsCard from "./featured-news-card";
import NewsCard, { NewsCardProps } from "./news-card";

type Props = {
  /** Displayed as the title of the categroy */
  categoryName: string;

  /** List of news articles */
  articles: NewsCardProps[];

  /** True category section has feature news */
  hasFeatureNews: boolean;
};

/** Renders all the category with corresponding news articles */
export default function NewsCategorySection({
  categoryName,
  articles,
  hasFeatureNews,
}: Props) {
  return (
    <div className="bg-gray-50 py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          {/* <!-- post --> */}
          <div className="flex-shrink max-w-full w-full  overflow-hidden order-first">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold">
                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                {categoryName}
              </h2>
            </div>
            <div className="flex flex-row flex-wrap -mx-3">
              {hasFeatureNews && (
                <FeaturedNewsCard
                  title={articles[0].title}
                  description={articles[0].description}
                  category={articles[0].category}
                  img={articles[0].img}
                  author={articles[0].author}
                  publishDate={articles[0].publishDate}
                />
              )}
              {articles.map((article) => (
                <NewsCard
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  img={article.img}
                  author={article.author}
                  publishDate={article.publishDate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
