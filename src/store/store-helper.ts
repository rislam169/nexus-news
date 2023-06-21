import { store } from "./store";
// eslint-disable-next-line no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout app instead of plain `useDispatch` and `useSelector` to get type-safety
export function useAppDispatch(): AppDispatch {
  return useDispatch<AppDispatch>();
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
