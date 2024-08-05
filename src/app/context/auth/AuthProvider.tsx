import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";

export type AuthProviderProps = PropsWithChildren<unknown>;

export function AuthProvider(props: AuthProviderProps) {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  const authContext = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated, login, logout]
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}
