import { ProductsContext } from "@/contexts/ProductsContexts";
import { CardProduto } from "../components/CardProduto";
import { Skeleton } from "@/components/ui/skeleton";
import { useContext } from "react";

export function Home() {
   const { products } = useContext(ProductsContext);

   return (
      <div className="flex flex-col max-w-7xl m-auto px-5">
         <div className="rounded-xl bg-gradient-to-tr from-brand-300 to-brand-100 h-[28rem]"></div>
         <main>
            <div className="flex flex-wrap justify-around gap-3 my-6 mx-auto px-4 min-w-[20rem]">
               {products.length > 0
                  ? products.map((product) => (
                       <CardProduto key={product.id} info={product} />
                    ))
                  : Array.from({ length: 8 }).map((_, i) => (
                       <div
                          key={"sk" + i}
                          className="flex flex-col space-y-3 mb-8"
                       >
                          <Skeleton className="h-64 w-72 rounded-xl" />
                          <div className="space-y-2">
                             <Skeleton className="h-4 w-[250px]" />
                             <Skeleton className="h-4 w-[200px]" />
                          </div>
                       </div>
                    ))}
            </div>
         </main>
      </div>
   );
}
