"use client"

import { createContext} from "react";
interface CartContextType {
    data: any;
    setData: (value: any) => void;
  }
const cartContext = createContext<CartContextType | null>(null); // Use 'null' as the default value

export default cartContext;
