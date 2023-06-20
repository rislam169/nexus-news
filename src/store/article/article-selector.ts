import { RootState } from "../store-helper";
import { Article } from "./article-slice";

/**
 * Returns the articles
 */
export function articlesSelector(state: RootState): Article[] {
  return state.article.articles;
}

/**
 * Returns true if the areticles are currently being fetched
 */
export function isFetchingArticlesSelector(state: RootState): boolean {
  return state.article.isFetchingArticles;
}
