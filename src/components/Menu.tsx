import { CircleUser } from "lucide-react";
import { Sacola } from "./Sacola";

const items_sacola: any[] = Array(0).fill("Item");

export function Menu() {
    return (
        <nav className="flex justify-between items-center h-28 px-8">
            <div className="flex items-center gap-20 justify-start">
                <h1 className="font-playfair text-3xl text-brand-700">
                    <span className="font-bold text-brand-500">plant</span>
                    store
                </h1>
                <nav className="flex gap-10 mt-2">
                    <a
                        className="hover:text-brand-300 transition-all"
                        href="/"
                    >
                        Home
                    </a>
                    <a
                        className="hover:text-brand-300 transition-all"
                        href="/about"
                    >
                        Produtos
                    </a>
                    <a
                        className="hover:text-brand-300 transition-all"
                        href="/about"
                    >
                        Contato
                    </a>
                </nav>
            </div>
            <div className="flex gap-10">
                <CircleUser />
                <Sacola items={items_sacola} />
            </div>
        </nav>
    );
}
