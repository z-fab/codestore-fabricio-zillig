import { ProductType } from "@/contexts/ProductsContexts";
import { sacolaContext } from "@/contexts/SacolaContexts";
import { Leaf, ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export function CardProduto({ info }: { info: ProductType }) {
   const { addSacola } = useContext(sacolaContext);

   return (
      <div className="w-72 min-w-64 rounded-xl overflow-hidden shadow-xl p-4">
         <div className="h-48 overflow-hidden rounded-lg">
            <img
               className="w-full object-cover object-top"
               src={info.image}
               alt="Imagem do Produto"
               style={{ height: "200px" }}
            />
         </div>

         <div className="flex mt-4 px-1 justify-between">
            <div className="flex flex-col mb-2">
               <p className="font-bold text-base ">{info.product_name}</p>
               <p className="text-gray-400 text-xs italic">{info.sub_name}</p>
            </div>
            <div className="flex items-center">
               <Leaf className="w-4 h-4 text-green-500" />
               <p className="text-sm ml-1 text-zync-700">4.3</p>
            </div>
         </div>
         <div className="px-1 py-4">
            <p className="text-xl font-bold text-gray-700">
               R$ {info.price.toFixed(2).replace(".", ",")}
            </p>
         </div>

         <div className="px-1 flex justify-between gap-2">
            <NavLink
               className="flex items-center justify-center border-2 rounded flex-1 h-10 bg-brand-300 border-none text-sm text-white hover:bg-brand-700 transition-all"
               to={"detail/" + info.id}
               title="Timer"
            >
               Ver Detalhes
            </NavLink>
            <button
               onClick={() => {
                  addSacola(info.id);
               }}
               className="flex items-center justify-center border rounded w-12 border-brand-300 text-brand-500 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-all"
            >
               <ShoppingBag className="w-5" />
            </button>
         </div>
      </div>
   );
}
