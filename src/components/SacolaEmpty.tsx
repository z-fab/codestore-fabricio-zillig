import { Sprout } from "lucide-react";

export function SacolaEmpty() {
    return (
        <div className="flex flex-col items-center justify-center h-96">
            <Sprout className="w-10 h-10 text-zinc-400" />
            <p className="text-lg text-zinc-400 mt-3">
                Seu carrinho está vazio
            </p>
        </div>
    );
}
