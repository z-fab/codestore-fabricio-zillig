import { Leaf, ShoppingBag} from "lucide-react";

export function CardProduto(){
    return (
        <div className="w-72 min-w-64 rounded-xl overflow-hidden shadow-xl p-4">

            <div className="h-200 overflow-hidden rounded-lg">
                <img className="w-full object-cover object-center" src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem do Produto" style={{ height: "200px" }} />
            </div>

            <div className="flex mt-4 px-1 justify-between">
                <div className="flex flex-col mb-2">
                    <p className="font-bold text-base ">
                        Espada de São Jorge
                    </p>
                    <p className="text-gray-400 text-xs italic">
                        Dracaena trifasciata
                    </p>
                </div>
                <div className="flex items-center">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <p className="text-sm ml-1 text-zync-700">4.3</p>
                </div>
            </div>
            <div className="px-1 py-4">
                <p className="text-xl font-bold text-gray-700">R$ 59,90</p>
            </div>
            
            <div className="px-1 flex justify-between gap-2">
                <button className="flex items-center justify-center border-2 rounded flex-1 h-10 bg-brand-300 border-none text-sm text-white hover:bg-brand-700 transition-all">
                    Ver Detalhes
                </button>
                <button className="flex items-center justify-center border rounded w-12 border-brand-300 text-brand-500 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-all">
                    <ShoppingBag className="w-5"/>
                </button>
            </div>
        </div>
    )
}