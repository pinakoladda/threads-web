import { createContext, useEffect, useState } from "react";
import { request } from "../../api";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tkn = localStorage.getItem("token");
    if (!tkn && window.location.pathname !== "/signin") {
      window.location.href = "/signin";

      return;
    }
    request.get("/user").then((res) => setUser(res.data));
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const user = useContext(AuthContext);

  return { user };
};
