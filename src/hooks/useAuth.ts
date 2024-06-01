// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { auth } from "@/auth"; // Adjust the import path as necessary

type UseAuthReturnType = {
  isAuthenticated: boolean;
  userName: string | null;
};

const useAuth = (): UseAuthReturnType => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const session = await auth();
      console.log("Session: ", session);

      if (session && session.user) {
        setIsAuthenticated(true);
        setUserName(session.user.name || null);
      } else {
        setIsAuthenticated(false);
        setUserName(null);
      }
    };

    checkAuthStatus();
  }, []);

  return { isAuthenticated, userName };
};

export default useAuth;
