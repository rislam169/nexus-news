import { Box, CircularProgress } from "@mui/material";
import {
  articlesSelector,
  isFetchingArticlesSelector,
} from "../../store/article/article-selector";
import { useAppSelector } from "../../store/store-helper";
import { reformatArticles } from "../../utils";
import NewsCategorySection from "./news-category-section";
import { useArticleFetcher } from "../../hooks/use-article-fetcher";

export default function ArticleSection() {
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
    <>
      {Object.entries(categorizedArticles).map((newSection, index) => {
        return (
          <NewsCategorySection
            categoryName={newSection[0]}
            articles={newSection[1]}
            hasFeatureNews={index == 0}
          />
        );
      })}
    </>
  );
}
