import { useState } from "react";
import { CardProduto } from "./components/CardProduto";
import { Menu } from "./components/Menu";
import { itemSacolaType, itemType } from "./types";
import { v4 as uuidv4 } from 'uuid';
import { Skeleton } from "@/components/ui/skeleton"

export function App() {

    const getProducts = new Promise<itemType[]>((resolve, reject) => {
        setTimeout(() => {
            let product_list = Array.from({length: 8}).map((_, i) => (
                {
                    id: uuidv4(),
                    product_name: "Espada de São Jorge " + i,
                    sub_name: "Dracaena trifasciata",
                    price: 59.90,
                    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }
            ))
            resolve(product_list)
        }, 5000)
    })

    const [products, setProducts] = useState<itemType[]>([])

    const [sacola, setSacola] = useState<itemSacolaType[]>([])

    function addSacola(id: string): void {
        console.log(id)
        products.map((product: itemType) => {
            if (product.id === id) {
                setSacola([
                    ...sacola,
                    {...product, quantity: 1}
                ])
            }
        })
    }

    getProducts.then((products) => {
        setProducts(products)
    })

    return (
        <div className="flex flex-col max-w-7xl m-auto px-5">
            <Menu sacola={sacola} setSacola={setSacola} />
            <div className="rounded-xl bg-gradient-to-tr from-brand-300 to-brand-100 h-[28rem]"></div>
            <main>
                <div className="flex flex-wrap justify-around gap-3 my-6 mx-auto px-4 min-w-[20rem]">
                    
                    {products.length > 0 ? products.map((product) => (
                        <CardProduto key={product.id} info={product} addSacola={addSacola}/>
                    )) : Array.from({length: 8}).map(() => (
                        <div className="flex flex-col space-y-3 mb-8">
                            <Skeleton className="h-64 w-72 rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
