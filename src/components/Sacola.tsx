import { ShoppingBag } from "lucide-react";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SacolaEmpty } from "./SacolaEmpty";
import { CardProdutoSacola } from "./CardProdutoSacola";
import { useContext } from "react";
import { sacolaContext } from "@/contexts/SacolaContexts";

export function Sacola() {
   const { sacola } = useContext(sacolaContext);

   return (
      <Sheet>
         <SheetTrigger>
            <ShoppingBag />
         </SheetTrigger>
         <SheetContent>
            <SheetHeader>
               <SheetTitle>Sua Sacola (biodegradável)</SheetTitle>
               <SheetDescription>
                  {sacola.length > 0
                     ? sacola.length.toString() + " produtos"
                     : "Sem produto"}
               </SheetDescription>
            </SheetHeader>
            {sacola.length > 0 ? (
               <ScrollArea className="h-svh w-full pt-4 top-1">
                  {sacola.map((item) => (
                     <CardProdutoSacola key={item.id} info={item} />
                  ))}
               </ScrollArea>
            ) : (
               <SacolaEmpty />
            )}
         </SheetContent>
      </Sheet>
   );
}
