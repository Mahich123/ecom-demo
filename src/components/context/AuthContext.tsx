import { createContext, useEffect, useState } from "react";
import FetchProducts from "../FetchProducts";

type userData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type ContextProps = {
  user: userData | null;
  signUp: (userData: userData) => void;
  session: boolean;
  cartItem: Record<number, number>; 
  addProduct: (id: number) => void; 
  removeProduct: (id: number) => void;
  totalItem: number;
  totalAmount: number;
  signOut: () => void;
};

type Product = {
  id: number;
  image: string;
  name: string;
  discounted: string;
  price: string;
  percent: string;

};

export const AuthContext = createContext<ContextProps | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(() => {
    const currentUser = localStorage.getItem("user");
    return currentUser ? JSON.parse(currentUser) : null;
  });

  const [session, setSession] = useState(false);
  const [cartItem, setCartItem] = useState<Record<number, number>>({});
  const [totalAmount, setTotalAmount] = useState(0)
  

  const { data } = FetchProducts();

  useEffect(() => {
    const fetchedData = async () => {
      if (data.length > 0) {
        setCartItem(cartDefaultValue(data));
      }
    };
    fetchedData();
  }, [data]);

  const cartDefaultValue = (products: Product[]) => {
    const cart: Record<number, number> = {};
    products.forEach((d) => {
      cart[d.id] = 0;
    });

    return cart;
  };

  const addProduct = (id: number) => {
    const product = data.find((d) => d.id === id);
    
    if (product) {
      const price = parseFloat(product.discounted);
      setCartItem((prev) => ({
        ...prev,
        [id]: prev[id] + 1,
      }));
      setTotalAmount((prev) => prev + price);
    }
  }
  
  const removeProduct = (id: number) => {
    const product = data.find((d) => d.id === id);
    
    if (product) {
      const price = parseFloat( product.discounted);
      setCartItem((prev) => ({
        ...prev,
        [id]: Math.max(prev[id] - 1, 0),
      }));
      setTotalAmount((prev) => prev - price);
    }
  }
  

  const totalItem = Object.values(cartItem).reduce((total, quantity) => total + quantity, 0);

  useEffect(() => {
    const activeUser = localStorage.getItem("user");
    if (activeUser) {
      setUser(JSON.parse(activeUser));
      setSession(true);
    }
  }, []);
  // console.log("user", user);

  const signUp = (userData: userData) => {
    const user = JSON.parse(localStorage.getItem("user") || "[]")

    const existingUser = user.find((user: userData) => user.email === userData.email)
    
    if(existingUser) {
     throw new Error("email already registered")
    
    }

    user.push(userData)
    localStorage.setItem("user", JSON.stringify(userData));
    
    setUser(userData);
    setSession(true);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    setSession(false);
  };
  // console.log("session", session);
  console.log("CartItems", cartItem)

  const contextValue = { user, signUp, session, cartItem, addProduct, removeProduct, totalItem, totalAmount, signOut}
  return (
    <AuthContext.Provider value={ contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
