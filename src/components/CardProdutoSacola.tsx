import { itemSacolaType } from "@/contexts/SacolaContexts";
import { SeletorQtd } from "./SeletorQtd";

export function CardProdutoSacola({ info }: { info: itemSacolaType }) {
   return (
      <div className="w-full min-w-64 h-28 rounded-xl overflow-hidden border p-2 flex flex-row mb-3 justify-between">
         <div className="flex flex-row  w-11/12">
            <div className="h-full w-16 overflow-hidden rounded-lg flex justify-center items-center bg-gray-100">
               <img
                  className="h-auto max-w-full object-cover object-top"
                  src={info.image}
                  alt="Imagem do Produto"
                  style={{ height: "200px" }}
               />
            </div>
            <div className="flex-row ml-2 my-auto px-1 justify-between">
               <p className="font-bold text-sm ">{info.product_name}</p>
               <p className="text-gray-400 text-xs italic">{info.sub_name}</p>
               <div className="flex flex-row items-center">
                  <SeletorQtd info={info} />
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
