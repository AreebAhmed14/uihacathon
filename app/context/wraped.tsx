"use client"
import {useState, ReactNode } from "react";
import cartContext from "./cartcontext";




export const Wraped = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(null);
  return (
    <cartContext.Provider value={{ data, setData }}>
      {children}
    </cartContext.Provider>
  );
};
