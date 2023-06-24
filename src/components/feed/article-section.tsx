import { Box, CircularProgress, Typography } from "@mui/material";
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
  const categorizedArticleList = Object.entries(categorizedArticles);
  const isFetchingArticles = useAppSelector(isFetchingArticlesSelector);

  if (isFetchingArticles) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (categorizedArticleList.length === 0) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Typography variant="h4">No articles found to display</Typography>
      </Box>
    );
  }

  return (
    <main id="content">
      {categorizedArticleList.map((newSection, index) => {
        return (
          <NewsCategorySection
            key={index}
            categoryName={newSection[0]}
            articles={newSection[1]}
            hasFeatureNews={index == 0}
          />
        );
      })}
    </main>
  );
}
