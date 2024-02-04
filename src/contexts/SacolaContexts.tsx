import { createContext, useContext, useState } from "react";
import { ProductType, ProductsContext } from "./ProductsContexts";

export interface itemSacolaType {
   id: string;
   product_name: string;
   sub_name: string;
   price: number;
   image: string;
   quantity: number;
}

interface SacolaContextType {
   sacola: itemSacolaType[];
   addSacola: (id: string) => void;
   changeQuantity: (id: string, quantity: number) => void;
}

export const sacolaContext = createContext({} as SacolaContextType);

interface SacolaProviderProps {
   children: React.ReactNode;
}

export function SacolaProvider({ children }: SacolaProviderProps) {
   const { products } = useContext(ProductsContext);
   const [sacola, setSacola] = useState<itemSacolaType[]>([]);

   function addSacola(id: string): void {
      console.log(id);
      if (sacola.find((item) => item.id === id)) {
         let newSacola = sacola.map((item) => {
            if (item.id === id) {
               return { ...item, quantity: item.quantity + 1 };
            }
            return item;
         });
         setSacola(newSacola);
      } else {
         products.map((product: ProductType) => {
            if (product.id === id) {
               setSacola([...sacola, { ...product, quantity: 1 }]);
            }
         });
      }
   }

   function changeQuantity(id: string, quantity: number): void {
      let newSacola: itemSacolaType[] = [];
      if (quantity < 1) {
         newSacola = sacola.filter((item) => {
            return item.id !== id;
         });
      } else {
         newSacola = sacola.map((item) => {
            if (item.id === id) {
               return { ...item, quantity: quantity };
            }
            return item;
         });
      }
      setSacola(newSacola);
   }

   return (
      <sacolaContext.Provider
         value={{
            sacola,
            addSacola,
            changeQuantity,
         }}
      >
         {children}
      </sacolaContext.Provider>
   );
}
