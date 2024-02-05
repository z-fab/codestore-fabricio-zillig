import { itemSacolaType, sacolaContext } from "@/contexts/SacolaContexts";
import { Minus, Plus, Trash } from "lucide-react";
import { useContext } from "react";

export function SeletorQtd({ info }: { info: itemSacolaType }) {
   const { changeQuantity } = useContext(sacolaContext);
   return (
      <div className="flex flex-row bg-stone-100 text-xs p-1 rounded-md items-center mt-2">
         {info.quantity > 1 ? (
            <button
               className="px-2 hover:bg-stone-200 rounded"
               onClick={() => changeQuantity(info.id, info.quantity - 1)}
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
            onClick={() => changeQuantity(info.id, info.quantity + 1)}
         >
            <Plus width={12} />
         </button>
      </div>
   );
}
