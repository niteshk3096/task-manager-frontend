import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data.user);
    setToken(data.token);
    console.log("token", data.token);
    navigate("/home");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigate("/", { replace: true });
  };
  const updateUserData = (data) => {
    setUser(data);
  };
  const setLoader = (data) => {
    setLoading(data);
  };
  const value = {
    user,
    token,
    isLoading,
    setLoader,
    login,
    updateUserData,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
