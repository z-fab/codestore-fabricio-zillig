import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContexts";
import { Router } from "./Router";
import { SacolaProvider } from "./contexts/SacolaContexts";

export function App() {
   return (
      <BrowserRouter>
         <ProductsProvider>
            <SacolaProvider>
               <Router />
            </SacolaProvider>
         </ProductsProvider>
      </BrowserRouter>
   );
}
