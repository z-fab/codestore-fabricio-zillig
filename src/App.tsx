import { useState } from "react";
import { CardProduto } from "./components/CardProduto";
import { Menu } from "./components/Menu";
import { itemSacolaType, itemType } from "./types";
import { v4 as uuidv4 } from 'uuid';

export function App() {

    const products: itemType[] = Array.from({length: 10}).map((_, i) => (
        {
            id: uuidv4(),
            product_name: "Espada de São Jorge " + i,
            sub_name: "Dracaena trifasciata",
            price: 59.90,
            image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ))

    const [sacola, setSacola] = useState<itemSacolaType[]>([])

    function addSacola(id: string): void {
        console.log(id)
        products.map((product) => {
            if (product.id === id) {
                setSacola([
                    ...sacola,
                    {...product, quantity: 1}
                ])
            }
        })
    }

    return (
        <div className="flex flex-col max-w-7xl m-auto px-5">
            <Menu sacola={sacola} setSacola={setSacola} />
            <div className="rounded-xl bg-gradient-to-tr from-brand-300 to-brand-100 h-[28rem]"></div>
            <main>
                <div className="flex flex-wrap justify-around gap-3 my-6 mx-auto px-4 min-w-[20rem]">
                    {products.map((product) => (
                        <CardProduto key={product.id} info={product} addSacola={addSacola}/>
                    ))}
                </div>
            </main>
        </div>
    );
}
