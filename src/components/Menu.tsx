import { CircleUser } from "lucide-react";
import { Sacola } from "./Sacola";
import { sacolaContext } from "@/contexts/SacolaContexts";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export function Menu() {
   const { sacola } = useContext(sacolaContext);
   console.log(sacola);
   return (
      <nav className="flex justify-between items-center h-28 px-8">
         <div className="flex items-center gap-20 justify-start">
            <h1 className="font-playfair text-3xl text-brand-700">
               <span className="font-bold text-brand-500">plant</span>
               store
            </h1>
            <nav className="flex gap-10 mt-2">
               <NavLink
                  className="hover:text-brand-300 transition-all"
                  to="/"
                  title="Timer"
               >
                  Home
               </NavLink>
               <NavLink
                  className="hover:text-brand-300 transition-all"
                  to="/"
                  title="Timer"
               >
                  Produtos
               </NavLink>
               <NavLink
                  className="hover:text-brand-300 transition-all"
                  to="/"
                  title="Timer"
               >
                  Sobre
               </NavLink>
            </nav>
         </div>
         <div className="flex gap-10">
            <CircleUser />
            <div className="relative">
               <Sacola />
               {sacola.length > 0 ? (
                  <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white w-5 h-5 text-sm rounded-full flex items-center justify-center focus:outline-none">
                     {sacola.length}
                  </div>
               ) : (
                  <></>
               )}
            </div>
         </div>
      </nav>
   );
}
