import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "../../api-client";

export type Article = {
  /** Contains the source of the article */
  source: string;

  /** Category of the article */
  category: string;

  /** Title of the article */
  title: string;

  /** Author of the article */
  author: string;

  /** Description of the article */
  description: string;

  /** Url of the article */
  url: string;

  /** Image url of the article */
  image_url: string;

  /** Published date of the article */
  published_at: string;
};
/**
 * State of Articles
 */
type ArticleState = {
  /** List of article */
  articles: Article[];

  /** True if article fetching is in progress */
  isFetchingArticles: boolean;
};

const initialState: ArticleState = {
  articles: [],
  isFetchingArticles: true,
};

/** Properties used to fetch the articles */
interface FetchArticleProps {
  /** Category of the article for search */
  category?: string;

  /** Keyword for searching articles */
  searchKey?: string;

  /** source for searching articles */
  source?: string;

  /** From Date for searching articles */
  fromDate?: string;

  /** To Date for searching articles */
  toDate?: string;
}

/** The return type for fetchArticle if successful */
interface FetchArticleResult {
  /** The articles that were fetched from the backend */
  fetchedArticles: Article[];
}

/** Fetches articles from the backend so they can be put into the store */
export const fetchArticle = createAsyncThunk(
  "article/fetchArticle",
  async ({
    category,
    searchKey,
    source,
    fromDate,
    toDate,
  }: FetchArticleProps): Promise<FetchArticleResult> => {
    const { data } = await apiClient.post("/articles", {
      category,
      searchKey,
      source,
      fromDate,
      toDate,
    });

    return { fetchedArticles: data.data };
  }
);

/**
 * Slice to access state of loaded articles
 */
const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.isFetchingArticles = true;
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.isFetchingArticles = false;
        state.articles = action.payload.fetchedArticles;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        // TODO: Replace this by more sophisticated error logging
        console.error(action.error);
        state.isFetchingArticles = false;
      });
  },
});

export const { setArticles } = articleSlice.actions;

export const articleReducer = articleSlice.reducer;
