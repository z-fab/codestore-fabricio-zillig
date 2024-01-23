import { CardProduto } from "./components/CardProduto";
import { Menu } from "./components/Menu";

export function App() {
    return (
        <div>
            <Menu />
            <div className="bg-gradient-to-tr from-brand-300 to-brand-100 h-[28rem]"></div>
            <main>
                <div className="flex gap-5 my-6 mx-5">
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                </div>
            </main>
        </div>
    );
}
