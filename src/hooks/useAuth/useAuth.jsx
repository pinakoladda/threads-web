import { createContext, useEffect, useState, useContext } from "react";
import { request } from "../../api";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tkn = localStorage.getItem("token");
    if (!tkn) {
      if (
        window.location.pathname !== "/signin" &&
        window.location.pathname !== "/signup"
      ) {
        window.location.href = "/signin";
      }
      return;
    }
    request
      .get("/user")
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/signin";
        }
      });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const user = useContext(AuthContext);

  return { user };
};
