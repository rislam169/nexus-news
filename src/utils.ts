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
      url: article.url,
    };

    (categorizedArticle[article["category"]] =
      categorizedArticle[article["category"]] || []).push(formatedArticle);
    return categorizedArticle;
  }, {});
}

/** Creates initial for name */
export function createInitial(name: string): string {
  let initials = "";
  const maxDigits = 2;
  if (!name) {
    return "";
  }

  const split = name.trim().split(" ");
  initials =
    split.length >= 2
      ? split[0][0] + split[1][0]
      : name.substring(0, maxDigits);
  return initials.toLocaleUpperCase();
}

/** Converts string to array trimming invidual string*/
export function stringToArray(
  text: string,
  separator: string
): string[] | null {
  if (!text) {
    return null;
  }
  return text.split(separator).map((item) => item.trim());
}
