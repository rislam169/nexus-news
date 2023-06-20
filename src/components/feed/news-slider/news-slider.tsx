import SliderNewsItem from "./slider-news-item";
import articles from "../articles.json";

export default function NewsSlider() {
  return (
    <div
      className="relative bg-gray-50"
      style={{
        backgroundImage: "url('img/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black bg-opacity-70">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-white text-2xl font-bold text-shadow-black">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                  American
                </h2>
              </div>
              <div id="post-carousel" className="splide post-carousel">
                <div className="splide__track">
                  <ul className="splide__list">
                    {articles.map((article) => (
                      <SliderNewsItem
                        title={article.title}
                        description={article.description}
                        category={article.category}
                        img={article.img}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
