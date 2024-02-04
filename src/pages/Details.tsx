import { ProductsContext } from "@/contexts/ProductsContexts";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export function Details() {
   const { products } = useContext(ProductsContext);

   const { id } = useParams();
   const product = products.find((product) => product.id === id);

   return <pre>{JSON.stringify(product, null, 2)}</pre>;
}
