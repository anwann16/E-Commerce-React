import { AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";

import { currentUser, login, logout } from "../services/apiAuth";

type UserDataTypes = {
  id: string;
  username: string;
  email: string;
  avatar: string;
};

type LoginApiType = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: UserDataTypes | null;
  loginApiCall: ({ email, password }: LoginApiType) => Promise<void>;
  logoutApiCall: () => Promise<void>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

type AuthContextProviderType = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<UserDataTypes | null>(() => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      return JSON.parse(userProfile);
    }
    return null;
  });

  // console.log(search);

  const loginApiCall = async ({ email, password }: LoginApiType) => {
    await login({ email, password });
    const response: AxiosResponse<UserDataTypes> = await currentUser();
    const profile = response.data;
    setUser(profile);
    localStorage.setItem("userProfile", JSON.stringify(profile));
  };

  const logoutApiCall = async (): Promise<void> => {
    await logout();
    localStorage.removeItem("userProfile");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        loginApiCall,
        logoutApiCall,
        user,
        search,
        setSearch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
