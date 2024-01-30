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
                <div className="relative">
                    <Sacola itens_sacola={props.sacola} setSacola={props.setSacola}/>
                    {props.sacola.length > 0 ? (
                        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white w-5 h-5 text-sm rounded-full flex items-center justify-center focus:outline-none">
                            {props.sacola.length}
                        </div>
                    ) : (<></>)}
                    
                </div>
            </div>
        </nav>
    );
}
