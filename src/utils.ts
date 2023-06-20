import { NewsCardProps } from "./components/feed/featured-news-card";
import { Article } from "./store/article/article-slice";

/** Alerts user about the upcoming feature where clicked on */
export function featureOnDevelopment(event: any = null): void {
  event && event.preventDefault();
  alert("This feature is in development");
}

/** Reformat and categorized articles to display in application */
export function reformatArticles(
  articles: Article[]
): Record<string, NewsCardProps[]> {
  return articles.reduce(function (categorizedArticle: any, article) {
    const formatedArticle: NewsCardProps = {
      title: article.title,
      description: article.description,
      category: article.category,
      img: article.image_url,
    };

    (categorizedArticle[article["category"]] =
      categorizedArticle[article["category"]] || []).push(formatedArticle);
    return categorizedArticle;
  }, {});
}
