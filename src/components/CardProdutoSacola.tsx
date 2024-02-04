import { useContext } from "react";
import { Minus, Plus, Trash } from "lucide-react";
import { itemSacolaType, sacolaContext } from "@/contexts/SacolaContexts";

export function CardProdutoSacola({ info }: { info: itemSacolaType }) {
   const { changeQuantity } = useContext(sacolaContext);

   return (
      <div className="w-full min-w-64 h-28 rounded-xl overflow-hidden border p-2 flex flex-row mb-3 justify-between">
         <div className="flex flex-row  w-11/12">
            <div className="h-full w-16 overflow-hidden rounded-lg flex justify-center items-center bg-gray-100">
               <img
                  className="h-auto max-w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Imagem do Produto"
                  style={{ height: "200px" }}
               />
            </div>
            <div className="flex-row ml-2 my-auto px-1 justify-between">
               <p className="font-bold text-sm ">{info.product_name}</p>
               <p className="text-gray-400 text-xs italic">{info.sub_name}</p>
               <div className="flex flex-row items-center">
                  <div className="flex flex-row bg-stone-100 text-xs p-1 rounded-md items-center mt-2">
                     {info.quantity > 1 ? (
                        <button
                           className="px-2 hover:bg-stone-200 rounded"
                           onClick={() =>
                              changeQuantity(info.id, info.quantity - 1)
                           }
                        >
                           <Minus width={12} />
                        </button>
                     ) : (
                        <button
                           className="px-2 hover:bg-red-500 hover:text-red-100 rounded"
                           onClick={() => changeQuantity(info.id, 0)}
                        >
                           <Trash width={12} />
                        </button>
                     )}

                     <p className="px-4">{info.quantity}</p>
                     <button
                        className="px-2 hover:bg-stone-200 rounded"
                        onClick={() =>
                           changeQuantity(info.id, info.quantity + 1)
                        }
                     >
                        <Plus width={12} />
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex justify-center items-center w-1/3 border-l">
            <p className="text-sm font-bold text-gray-700">
               R$ {(info.price * info.quantity).toFixed(2).replace(".", ",")}
            </p>
         </div>
      </div>
   );
}
