import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

type AuthContextData = {
  user: User | null;
  token: string | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  setToken(token: string): void;
};

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

export function useAuthContext(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      "useAuthContext() must be used inside the AuthProvider component"
    );
  }

  return context;
}
