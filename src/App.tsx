import "./App.css";
import "./style.css";

import upArrowIcon from "./assets/up-arrow.svg";
import { useCustomJs } from "./hooks/use-custom-js";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MobileMenu from "./components/mobile-menu/mobile-menu";
import NewsSection from "./components/feed/news-section";
import articles from "./components/feed/articles.json";
import NewsSlider from "./components/feed/news-slider/news-slider";
import Category from "./components/feed/category/category";
import { useAppSelector } from "./store/store-helper";
import { useArticleFetcher } from "./hooks/use-article-fetcher";
import {
  articlesSelector,
  isFetchingArticlesSelector,
} from "./store/article/article-selector";
import { Box, CircularProgress } from "@mui/material";
import { reformatArticles } from "./utils";

function App() {
  useCustomJs();
  useArticleFetcher();

  const categorizedArticles = reformatArticles(
    useAppSelector(articlesSelector)
  );
  const isFetchingArticles = useAppSelector(isFetchingArticlesSelector);

  if (isFetchingArticles) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="text-gray-700 pt-9 sm:pt-10">
      <Header />

      <MobileMenu />

      <main id="content">
        <Category />

        {Object.entries(categorizedArticles).map((newSection, index) => {
          return (
            <NewsSection
              categoryName={newSection[0]}
              articles={newSection[1]}
              hasFeatureNews={index == 0}
            />
          );
        })}

        <NewsSlider />

        <NewsSection
          categoryName="Bussiness"
          articles={articles}
          hasFeatureNews={false}
        />

        <NewsSection
          categoryName="Entertainment"
          articles={articles}
          hasFeatureNews={false}
        />
      </main>

      <Footer />

      <a
        href="#"
        className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden"
      >
        <img src={upArrowIcon} alt="Up" />
      </a>
    </div>
  );
}

export default App;
