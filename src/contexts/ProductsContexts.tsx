import { productsList } from "@/lib/products";
import { createContext, useEffect, useState } from "react";

export interface ProductType {
   id: string;
   category: string;
   product_name: string;
   sub_name: string;
   price: number;
   image: string;
   stock: number;
   description: string;
}

export interface ProductsContextType {
   products: ProductType[];
}

interface ProductsProviderProps {
   children: React.ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsProvider({ children }: ProductsProviderProps) {
   const [products, setProducts] = useState<ProductType[]>([]);

   const getProducts = new Promise<ProductType[]>((resolve, _) => {
      setTimeout(() => {
         const products_list = productsList;
         resolve(products_list);
      }, 5000);
   });

   useEffect(() => {
      getProducts.then((products) => {
         setProducts(products);
      });
   }, []);

   return (
      <ProductsContext.Provider value={{ products }}>
         {children}
      </ProductsContext.Provider>
   );
}
