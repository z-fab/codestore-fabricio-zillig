import { CircleUser, ShoppingBag } from "lucide-react";

export function Menu() {
    return (
        <nav className="flex justify-between items-center h-28 px-8">
            <div className="flex items-center gap-20 justify-start">
                <h1 className="font-playfair text-3xl text-primary-700">
                    <span className="font-bold text-primary-500">plant</span>
                    store
                </h1>
                <ul className="flex gap-10 mt-2">
                    <li>
                        <a
                            className="hover:text-primary-300 transition-all"
                            href="/"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-primary-300 transition-all"
                            href="/about"
                        >
                            Produtos
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-primary-300 transition-all"
                            href="/about"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="flex gap-10">
                <li>
                    <CircleUser />
                </li>
                <li>
                    <ShoppingBag />
                </li>
            </ul>
        </nav>
    );
}
