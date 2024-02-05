import { CircleUser, List } from "lucide-react";
import { Sacola } from "./Sacola";
import { sacolaContext } from "@/contexts/SacolaContexts";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuIndicator,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   NavigationMenuViewport,
   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuListItem } from "./MenuListItem";

export function Menu() {
   const { sacola } = useContext(sacolaContext);

   return (
      <nav className="flex justify-between items-center h-28 max-w-7xl m-auto px-5">
         <div className="flex items-center gap-5 justify-start">
            <h1 className="font-playfair text-3xl text-brand-700">
               <span className="font-bold text-brand-500">plant</span>
               store
            </h1>
            <NavigationMenu>
               <NavigationMenuList>
                  <NavigationMenuItem>
                     <NavLink to="/">
                        <NavigationMenuLink
                           className={navigationMenuTriggerStyle()}
                        >
                           Home
                        </NavigationMenuLink>
                     </NavLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                     <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                           <MenuListItem
                              title="Interior"
                              to="category/Interior"
                           >
                              Plantas adaptadas para ambientes internos, com luz
                              indireta ou sombra.
                           </MenuListItem>
                           <MenuListItem
                              title="Exterior"
                              to="category/Exterior"
                           >
                              Plantas adaptadas para ambientes externos, com luz
                              direta.
                           </MenuListItem>
                        </ul>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
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
