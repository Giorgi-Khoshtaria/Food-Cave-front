import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
// import { useCart } from "../cart-components/CartContext";

interface UserData {
  id: string;
  email: string;
  isAdmin: boolean;
  data: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (userData: UserData) => void;
  logout: () => void;
  userData?: UserData | null;
  setUserData: Dispatch<SetStateAction<UserData | null>>;
}

// Define the type for AuthContext
type AuthContextType = AuthContextProps | undefined;

export const AuthContext = createContext<AuthContextType>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // const { resetCart } = useCart();

  const [userData, setUserData] = useState<UserData | null>(() => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  useEffect(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    if (storedAuthState) {
      setIsAuthenticated(JSON.parse(storedAuthState));
    }
  }, []);

  const login = (userData: UserData) => {
    setIsAuthenticated(true);
    setUserData(userData);
    setIsAdmin(userData.isAdmin);
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    setIsAdmin(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userData");

    // Clear cart items
    localStorage.removeItem(`cartItems`);
    // resetCart(); // Clear cart items in the context
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isAdmin, login, logout, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
