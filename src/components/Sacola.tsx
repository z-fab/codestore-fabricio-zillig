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

type SacolaProps = {
    items: any[];
};

export function Sacola({ items }: SacolaProps) {
    return (
        <Sheet>
            <SheetTrigger>
                <ShoppingBag />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Seu carrinho</SheetTitle>
                    <SheetDescription>
                        {items.length > 0
                            ? items.length.toString() + " produtos"
                            : "Sem produto"}
                    </SheetDescription>

                    {items.length > 0 ? (
                        <ScrollArea className=" h-svh w-full pt-4 top-1">
                            {items.map((item) => (
                                <p>{item}</p>
                            ))}
                        </ScrollArea>
                    ) : (
                        <SacolaEmpty />
                    )}
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
