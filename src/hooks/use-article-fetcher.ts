import { useEffect } from "react";
import { useAppDispatch } from "../store/store-helper";
import { fetchArticle } from "../store/article/article-slice";
import { useParams } from "react-router-dom";

/** Hooks that loads articles */
export function useArticleFetcher(): void {
  const { category } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const filter = category ? { category } : {};
    dispatch(fetchArticle(filter));
  }, [category, dispatch]);
}
