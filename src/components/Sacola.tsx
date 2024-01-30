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
import { itemSacolaType } from "@/types";

interface SacolaProps {
    itens_sacola: itemSacolaType[];
    setSacola: Function;
};

export function Sacola({ itens_sacola, setSacola }: SacolaProps) {


    function changeQuantity(id: string, quantity: number): void {
        let newSacola:itemSacolaType[] = [];
        if (quantity < 1) {
            newSacola = itens_sacola.filter((item) => {
                return item.id !== id;
            });
        } else {
            newSacola = itens_sacola.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: quantity };
                }
                return item;
            });
        }
        setSacola(newSacola);
    }

    return (
        <Sheet>
            <SheetTrigger>
                <ShoppingBag />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Seu carrinho</SheetTitle>
                    <SheetDescription>
                        {itens_sacola.length > 0
                            ? itens_sacola.length.toString() + " produtos"
                            : "Sem produto"}
                    </SheetDescription>
                </SheetHeader>
                {itens_sacola.length > 0 ? (
                    <ScrollArea className="h-svh w-full pt-4 top-1">
                        {itens_sacola.map((item) => (
                            <CardProdutoSacola key={item.id} info={item} changeQuantity={changeQuantity}/>
                        ))}
                    </ScrollArea>
                ) : (
                    <SacolaEmpty />
                )}
            </SheetContent>
        </Sheet>
    );
}
