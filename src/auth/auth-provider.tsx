import { PropsWithChildren, useState } from "react";
import { AuthContext, User } from "./auth-context";
import apiClient from "../api-client";

export function AuthProvider({ children }: PropsWithChildren): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [token, _setToken] = useState<string | null>(
    localStorage.getItem("ACCESS_TOKEN")
  );

  /**
   * Used to set or remove the token
   *
   * @param token Can be string to set and null to remove
   * @return void
   */
  function setToken(token: string | null): void {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  }

  /** Used to logout from the current session */
  function logout(): void {
    apiClient.post("logout").then(() => {
      setToken(null);
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
