import { useEffect } from "react";
import { useAppDispatch } from "../store/store-helper";
import { fetchArticle } from "../store/article/article-slice";

/** Hooks that loads articles */
export function useArticleFetcher(): void {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticle());
  }, [dispatch]);
}
