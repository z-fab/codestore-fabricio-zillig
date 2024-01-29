import { CircleUser } from "lucide-react";
import { Sacola } from "./Sacola";
import { itemSacolaType } from "../types";

export function Menu(props: { sacola: itemSacolaType[], setSacola: Function}) {
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
                <Sacola itens_sacola={props.sacola} setSacola={props.setSacola}/>
            </div>
        </nav>
    );
}
