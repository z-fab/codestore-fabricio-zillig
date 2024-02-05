import { ProductsContext } from "@/contexts/ProductsContexts";
import { CardProduto } from "../components/CardProduto";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export function Category() {
   const { cat } = useParams();
   const { products } = useContext(ProductsContext);

   const products_filter = products.filter((product) => {
      if (product.category === cat) {
         return product;
      }
   });

   return (
      <div className="flex flex-col max-w-7xl m-auto px-5">
         <main>
            <h1 className="text-4xl my-10 font-playfair text-center">{cat}</h1>
            <div className="flex flex-wrap justify-around gap-3 my-6 mx-auto px-4 min-w-[20rem]">
               {products_filter.length > 0 ? (
                  products_filter.map((product) => (
                     <CardProduto key={product.id} info={product} />
                  ))
               ) : (
                  <p>Sem Produtos</p>
               )}
            </div>
         </main>
      </div>
   );
}
