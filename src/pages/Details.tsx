import { Badge } from "@/components/ui/badge";
import { ProductType, ProductsContext } from "@/contexts/ProductsContexts";
import { sacolaContext } from "@/contexts/SacolaContexts";
import { currencyFormatter } from "@/lib/utils";
import { ArrowLeftCircleIcon, Minus, Plus, ShoppingBag } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export function Details() {
   const { products } = useContext(ProductsContext);
   const { addSacola } = useContext(sacolaContext);

   const [quantity, setQuantity] = useState(1);

   const { id } = useParams();
   const { product_name, sub_name, price, image, description } = products.find(
      (product) => product.id === id
   ) as ProductType;

   return (
      <div className="max-w-7xl min-w-[48rem] mx-auto px-5">
         <div className="flex flex-grow mt-4">
            <div className="w-1/2">
               <div className="sticky top-32 h-screen-minus-header">
                  <img
                     className="w-full h-full object-cover object-center rounded-xl shadow-xl"
                     src={image}
                     alt="Morgan Glasses"
                  />
               </div>
            </div>
            <div className="w-1/2 overflow-auto">
               <div className="px-10 text">
                  <NavLink
                     to="/"
                     className="flex items-center justify-start gap-2 text-brand-500 hover:text-brand-300/80 transition-all"
                  >
                     <ArrowLeftCircleIcon className="w-5 h-5" /> Retornar para a
                     loja
                  </NavLink>
                  <Badge className="mt-6">Interior</Badge>

                  <h1 className="text-4xl font-bold text-brand-500 mt-2">
                     {product_name}
                  </h1>
                  <p className="text-xl italic text-stone-500 mt-1">
                     {sub_name}
                  </p>
                  <p className="mt-4">{description}</p>
                  <div className="mt-10 border p-5 rounded-xl">
                     <p className="text-xl font-bold">
                        <span className="pb-1 block italic text-stone-400 text-xs">
                           Valor Total
                        </span>{" "}
                        {currencyFormatter.format(price * quantity)}
                     </p>
                     <p className="text-xs text-stone-600 mb-1">
                        {currencyFormatter.format(price)} cada
                     </p>

                     <div className="mt-5 flex gap-5 justify-center items-center">
                        <div className="flex flex-row bg-stone-100 text-xs rounded-md items-center h-12 px-3">
                           {quantity > 1 ? (
                              <button
                                 className="px-2 hover:bg-stone-200 rounded"
                                 onClick={() => setQuantity((self) => self - 1)}
                              >
                                 <Minus width={12} />
                              </button>
                           ) : (
                              <button className="px-2 text-zinc-300">
                                 <Minus width={12} />
                              </button>
                           )}

                           <p className="px-4">{quantity}</p>
                           <button
                              className="px-2 hover:bg-stone-200 rounded"
                              onClick={() => setQuantity((self) => self + 1)}
                           >
                              <Plus width={12} />
                           </button>
                        </div>
                        <button
                           onClick={() => {
                              addSacola(id as string, quantity);
                              setQuantity(1);
                           }}
                           className="flex items-center justify-center gap-2 px-5 border-2 rounded flex-1 h-12 bg-brand-300 border-none text-lg text-white hover:bg-brand-700 transition-all"
                        >
                           <ShoppingBag className="w-5" />
                           Adicionar na Sacola
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
