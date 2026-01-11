import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, createUser } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load from localStorage on first mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // Signup
  const signup = async (data) => {
    const res = await createUser(data);

    const { user, accessToken } = res.result;
    
    if (!user || !accessToken) {
      throw new Error("Signup failed: missing token or user");
    }
    
    setToken(accessToken);
    setUser(user);
    
    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    
    return res;
    
  };

  // Login
  const login = async (data) => {
    const res = await loginUser(data);

    if (!res || !res.accessToken || !res.user) {
      console.log("Login response:", res);
      throw new Error("Login failed: backend did not return user or token");
    }

    setToken(res.accessToken);
    setUser(res.user);

    localStorage.setItem("token", res.accessToken);
    localStorage.setItem("user", JSON.stringify(res.user));

    return res;
  };

  // Logout
  const logout = () => {
    setToken(null);
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to consume context
export const useAuth = () => useContext(AuthContext);
