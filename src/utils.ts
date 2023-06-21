import { NewsCardProps } from "./components/feed/news-card";
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
      author: article.author,
      publishDate: article.published_at,
    };

    (categorizedArticle[article["category"]] =
      categorizedArticle[article["category"]] || []).push(formatedArticle);
    return categorizedArticle;
  }, {});
}

/** Creates initial for name */
export function createInitial(name: string): string {
  return name
    .split(" ")
    .map((str) => str[0])
    .join("");
}

/** Converts string to array trimming invidual string*/
export function stringToArray(
  text: string,
  separator: string
): string[] | null {
  if (!text) {
    return null;
  }
  return text.split(separator).map((item) => item.replace(/ /g, ""));
}
